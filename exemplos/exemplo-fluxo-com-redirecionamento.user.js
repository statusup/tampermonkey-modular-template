// ==UserScript==
// @name         Exemplo Refatorado: Redirecionamento com Retorno ao Google
// @namespace    http://example.net/
// @version      1.1
// @description  Inicia no Google, valida no YouTube, redireciona ao Facebook e retorna com notificação
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

  const criarNotificacao = (texto) => {
    const div = document.createElement("div");
    div.textContent = texto;
    Object.assign(div.style, {
      position: "fixed", bottom: "20px", left: "20px", padding: "12px 20px",
      background: "#333", color: "#fff", borderRadius: "6px", zIndex: 9999
    });
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  };

  if (host.includes("google.com")) {
    let ciclos = 0;
    const botao = document.createElement("button");
    botao.textContent = "Iniciar com Redirecionamento";
    Object.assign(botao.style, {
      position: "fixed", bottom: "20px", right: "20px", zIndex: 9999,
      padding: "10px 20px", background: "#fbbc05", color: "#000", border: "none", borderRadius: "5px"
    });
    document.body.appendChild(botao);

    botao.onclick = () => {
      const id = gerarId();
      GM_setValue(id, { id, status: "iniciado", redirecionado: false });

      GM_addValueChangeListener(id, (k, o, n) => {
        if (n.status === "concluido") {
          ciclos++;
          criarNotificacao(`✔️ Ciclo ${ciclos} finalizado`);
          if (ciclos >= 10) {
            criarNotificacao("🛑 10 ciclos completos.");
            botao.disabled = true;
          }
        }
      });

      window.location.href = `https://www.youtube.com/?fluxoId=${id}`;
    };
  }

  if (host.includes("youtube.com")) {
    const id = new URLSearchParams(location.search).get("fluxoId");
    if (!id) return;

    const dados = GM_getValue(id);
    if (!dados || dados.redirecionado) return;

    const btn = document.createElement("button");
    btn.textContent = "Avançar para Etapa Final";
    Object.assign(btn.style, {
      position: "fixed", top: "30px", left: "30px", padding: "10px 20px",
      background: "#cc0000", color: "white", border: "none", borderRadius: "5px", zIndex: 9999
    });
    document.body.appendChild(btn);

    btn.onclick = () => {
      GM_setValue(id, { ...dados, redirecionado: true });
      window.location.href = `https://www.facebook.com/?fluxoId=${id}`;
    };
  }

  if (host.includes("facebook.com")) {
    const id = new URLSearchParams(location.search).get("fluxoId");
    if (!id) return;

    const dados = GM_getValue(id);
    if (!dados || dados.status === "concluido") return;

    const div = document.createElement("div");
    div.textContent = "🟢 Etapa final concluída! Retornando ao início...";
    Object.assign(div.style, {
      position: "fixed", top: "30px", left: "30px", padding: "10px 20px",
      background: "#4267B2", color: "#fff", borderRadius: "6px", zIndex: 9999
    });
    document.body.appendChild(div);

    GM_setValue(id, { ...dados, status: "concluido" });

    setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 1500);
  }
})();
