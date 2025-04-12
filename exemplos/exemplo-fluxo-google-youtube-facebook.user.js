// ==UserScript==
// @name         Exemplo: Fluxo entre Google, YouTube e Facebook
// @namespace    http://example.net/
// @version      1.0
// @description  Demonstração de fluxo modular cíclico entre 3 sites públicos, simulando um envio validado e confirmado
// @match        https://www.google.com/*
// @match        https://www.youtube.com/*
// @match        https://www.facebook.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

(function () {
    'use strict';
    const host = window.location.hostname;
    const gerarFluxoId = () => 'fluxo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    if (host.includes("google.com")) {
        // Página de origem: cria o fluxo e inicia
        const btn = document.createElement("button");
        btn.textContent = "Iniciar Envio Simulado";
        Object.assign(btn.style, {
            position: "fixed", bottom: "20px", right: "20px", zIndex: 9999,
            padding: "10px 20px", background: "#4285F4", color: "white", border: "none", borderRadius: "5px"
        });
        document.body.appendChild(btn);

        btn.onclick = () => {
            const fluxoId = gerarFluxoId();
            const dados = {
                id: fluxoId,
                status: "iniciado",
                mensagem: "Olá! Este é um exemplo de dado sendo enviado.",
                validado: false,
                confirmado: false
            };
            GM_setValue(fluxoId, dados);
            alert("Fluxo iniciado: " + fluxoId);

            // Listener para o retorno final
            GM_addValueChangeListener(fluxoId, (key, oldVal, newVal) => {
                if (newVal.validado && newVal.confirmado) {
                    alert("Fluxo COMPLETO: " + newVal.mensagem);
                }
            });

            // Abre abas
            window.open(`https://www.youtube.com/?fluxoId=${fluxoId}`, "_blank");
            window.open(`https://www.facebook.com/?fluxoId=${fluxoId}`, "_blank");
        };
    }

    if (host.includes("youtube.com")) {
        // Página intermediária: valida a informação
        const fluxoId = new URLSearchParams(location.search).get("fluxoId");
        if (!fluxoId) return;

        const dados = GM_getValue(fluxoId);
        if (!dados || dados.validado) return;

        const box = document.createElement("div");
        box.innerHTML = `<div style="position:fixed;top:30px;left:30px;background:white;padding:20px;z-index:9999;border:2px solid #ccc;">
        <p><strong>ID:</strong> ${fluxoId}</p>
        <p><strong>Mensagem:</strong> ${dados.mensagem}</p>
        <button id="aprovar">Aprovar</button> <button id="rejeitar">Rejeitar</button>
        </div>`;
        document.body.appendChild(box);

        document.getElementById("aprovar").onclick = () => {
            GM_setValue(fluxoId, { ...dados, validado: true, status: "validado" });
            alert("Dado validado!");
        };
        document.getElementById("rejeitar").onclick = () => {
            GM_setValue(fluxoId, { ...dados, status: "rejeitado" });
            alert("Dado rejeitado.");
        };
    }

    if (host.includes("facebook.com")) {
        // Página de destino: confirma se já foi validado
        const fluxoId = new URLSearchParams(location.search).get("fluxoId");
        if (!fluxoId) return;

        GM_addValueChangeListener(fluxoId, (key, oldVal, newVal) => {
            if (newVal.status === "validado" && !newVal.confirmado) {
                GM_setValue(fluxoId, { ...newVal, confirmado: true, status: "concluido" });
                alert("Fluxo confirmado na etapa final!");
            }
        });
    }
})();
