// ==UserScript==
// @name         Exemplo Refatorado: Fluxo com Dois Pop-ups (Estilo Visual Integrado)
// @namespace    http://example.net/
// @version      1.1
// @description  Fluxo visual com popups centralizados e feedback ao Google
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

  const criarPopup = (titulo, texto, botoes) => {
    const fundo = document.createElement("div");
    fundo.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:9999;";
    
    const box = document.createElement("div");
    box.style = "background:#fff;padding:25px;border-radius:8px;max-width:400px;text-align:center;font-family:sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.3)";
    box.innerHTML = `<h3 style="margin-bottom:10px">${titulo}</h3><p style="margin-bottom:20px">${texto}</p>`;

    botoes.forEach(botao => {
      const b = document.createElement("button");
      b.textContent = botao.texto;
      b.style = "margin:5px;padding:8px 15px;border:none;border-radius:4px;background:#007bff;color:#fff;cursor:pointer;";
      b.onclick = () => {
        botao.acao();
        fundo.remove();
      };
      box.appendChild(b);
    });

    fundo.appendChild(box);
    document.body.appendChild(fundo);
  };

  if (host.includes("google.com")) {
    let ciclos = 0;

    const btn = document.createElement("button");
    btn.textContent = "Iniciar Ciclo Visual";
    Object.assign(btn.style, {
      position: "fixed", bottom: "20px", right: "20px", zIndex: 9999,
      padding: "10px 20px", background: "#34a853", color: "white", border: "none", borderRadius: "5px"
    });
    document.body.appendChild(btn);

    btn.onclick = () => {
      const id = gerarId();
      const dados = { id, etapa1: false, etapa2: false, texto: "Qual sua rede favorita?" };
      GM_setValue(id, dados);

      GM_addValueChangeListener(id, (k, o, n) => {
        if (n.etapa1 && n.etapa2) {
          ciclos++;
          alert(`✅ Ciclo ${ciclos} concluído.`);
          if (ciclos >= 10) {
            alert("🛑 10 ciclos finalizados.");
            btn.disabled = true;
          }
        }
      });

      window.open(`https://www.youtube.com/?fluxoId=${id}`, "_blank", "width=500,height=400");
      setTimeout(() => {
        window.open(`https://www.facebook.com/?fluxoId=${id}`, "_blank", "width=500,height=400");
      }, 800);
    };
  }

  if (host.includes("youtube.com")) {
    const fluxoId = new URLSearchParams(location.search).get("fluxoId");
    if (!fluxoId) return;
    const dados = GM_getValue(fluxoId);
    if (!dados || dados.etapa1) return;

    criarPopup("Etapa 1 - Validação", dados.texto, [
      {
        texto: "Validar",
        acao: () => {
          GM_setValue(fluxoId, { ...dados, etapa1: true });
          alert("Etapa 1 validada!");
          window.close();
        }
      }
    ]);
  }

  if (host.includes("facebook.com")) {
    const fluxoId = new URLSearchParams(location.search).get("fluxoId");
    if (!fluxoId) return;
    const dados = GM_getValue(fluxoId);
    if (!dados || dados.etapa2) return;

    criarPopup("Etapa 2 - Confirmação", "Confirma o recebimento da etapa?", [
      {
        texto: "Confirmar",
        acao: () => {
          GM_setValue(fluxoId, { ...dados, etapa2: true });
          alert("Etapa 2 concluída!");
          window.close();
        }
      }
    ]);
  }
})();
