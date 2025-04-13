// ==UserScript==
// @name         Exemplo: Fluxo com Redirecionamento e Retorno ao Início
// @namespace    http://example.net/
// @version      1.0
// @description  Inicia fluxo no Google, valida no YouTube com redirecionamento para Facebook, e retorna para o Google com status
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
    const gerarId = () => 'fluxo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    if (host.includes("google.com")) {
        let ciclos = 0;

        const btn = document.createElement("button");
        btn.textContent = "Iniciar com Redirecionamento";
        Object.assign(btn.style, {
            position: "fixed", bottom: "20px", right: "20px", zIndex: 9999,
            padding: "10px 20px", background: "#fbbc05", color: "black", border: "none", borderRadius: "5px"
        });
        document.body.appendChild(btn);

        btn.onclick = () => {
            const id = gerarId();
            const dados = {
                id,
                texto: "Gostaria de continuar o fluxo?",
                origem: "google",
                redirecionado: false,
                status: "iniciado"
            };
            GM_setValue(id, dados);

            GM_addValueChangeListener(id, (k, o, n) => {
                if (n.status === "completo") {
                    ciclos++;
                    alert(`✔️ Ciclo ${ciclos} finalizado com redirecionamento.`);
                    if (ciclos >= 10) {
                        btn.disabled = true;
                        alert("🛑 10 ciclos completos.");
                    }
                }
            });

            window.location.href = `https://www.youtube.com/?fluxoId=${id}`;
        };
    }

    if (host.includes("youtube.com")) {
        const fluxoId = new URLSearchParams(location.search).get("fluxoId");
        if (!fluxoId) return;

        const dados = GM_getValue(fluxoId);
        if (!dados || dados.redirecionado) return;

        const div = document.createElement("div");
        div.innerHTML = `<div style="position:fixed;top:30px;left:30px;background:white;padding:20px;border:1px solid #000;z-index:99999;">
          <p><strong>Etapa 1:</strong> ${dados.texto}</p>
          <button id="continuar">Sim</button>
        </div>`;
        document.body.appendChild(div);

        document.getElementById("continuar").onclick = () => {
            const atualizado = { ...dados, redirecionado: true, status: "validado" };
            GM_setValue(fluxoId, atualizado);
            window.location.href = `https://www.facebook.com/?fluxoId=${fluxoId}`;
        };
    }

    if (host.includes("facebook.com")) {
        const fluxoId = new URLSearchParams(location.search).get("fluxoId");
        if (!fluxoId) return;

        const dados = GM_getValue(fluxoId);
        if (!dados || dados.status === "completo") return;

        const msg = document.createElement("div");
        msg.innerHTML = `<div style="position:fixed;top:30px;left:30px;background:white;padding:20px;border:2px solid green;z-index:99999;">
          <p><strong>Etapa Final:</strong> Concluído. Retornando ao início...</p>
        </div>`;
        document.body.appendChild(msg);

        GM_setValue(fluxoId, { ...dados, status: "completo" });

        setTimeout(() => {
            window.location.href = "https://www.google.com";
        }, 1500);
    }
})();
