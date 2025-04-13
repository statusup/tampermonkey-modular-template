// ==UserScript==
// @name         Exemplo: Fluxo com Dois Pop-ups (Ciclo Fechado)
// @namespace    http://example.net/
// @version      1.0
// @description  Demonstra fluxo em que o Google abre dois pop-ups sequenciais (YouTube e Facebook) e espera retorno de ambos para fechar o ciclo
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
        let ciclosCompletos = 0;

        const btn = document.createElement("button");
        btn.textContent = "Iniciar Ciclo";
        Object.assign(btn.style, {
            position: "fixed", bottom: "20px", right: "20px", zIndex: 9999,
            padding: "10px 20px", background: "#34a853", color: "white", border: "none", borderRadius: "5px"
        });
        document.body.appendChild(btn);

        btn.onclick = () => {
            const id = gerarId();
            const dados = {
                id,
                etapa1: false,
                etapa2: false,
                texto: "Qual sua rede social favorita?"
            };
            GM_setValue(id, dados);

            GM_addValueChangeListener(id, (k, o, n) => {
                if (n.etapa1 && n.etapa2) {
                    ciclosCompletos++;
                    alert(`✅ Ciclo ${ciclosCompletos} finalizado com sucesso!`);
                    if (ciclosCompletos >= 10) {
                        alert("🔁 Ciclos completos! Parando...");
                        btn.disabled = true;
                    }
                }
            });

            window.open(`https://www.youtube.com/?fluxoId=${id}`, "_blank", "width=600,height=400");
            setTimeout(() => {
                window.open(`https://www.facebook.com/?fluxoId=${id}`, "_blank", "width=600,height=400");
            }, 1000);
        };
    }

    if (host.includes("youtube.com")) {
        const fluxoId = new URLSearchParams(location.search).get("fluxoId");
        if (!fluxoId) return;

        const dados = GM_getValue(fluxoId);
        if (!dados || dados.etapa1) return;

        const div = document.createElement("div");
        div.innerHTML = `<div style="position:fixed;top:20px;left:20px;background:white;padding:20px;border:2px solid #444;z-index:99999;">
          <p><strong>Etapa 1:</strong> ${dados.texto}</p>
          <button id="sim">Sim</button>
        </div>`;
        document.body.appendChild(div);

        document.getElementById("sim").onclick = () => {
            GM_setValue(fluxoId, { ...dados, etapa1: true });
            alert("Etapa 1 concluída (YouTube)");
            window.close();
        };
    }

    if (host.includes("facebook.com")) {
        const fluxoId = new URLSearchParams(location.search).get("fluxoId");
        if (!fluxoId) return;

        const dados = GM_getValue(fluxoId);
        if (!dados || dados.etapa2) return;

        const div = document.createElement("div");
        div.innerHTML = `<div style="position:fixed;top:20px;left:20px;background:white;padding:20px;border:2px solid #444;z-index:99999;">
          <p><strong>Etapa 2:</strong> Confirma recebimento?</p>
          <button id="confirmar">Confirmar</button>
        </div>`;
        document.body.appendChild(div);

        document.getElementById("confirmar").onclick = () => {
            GM_setValue(fluxoId, { ...dados, etapa2: true });
            alert("Etapa 2 concluída (Facebook)");
            window.close();
        };
    }
})();
