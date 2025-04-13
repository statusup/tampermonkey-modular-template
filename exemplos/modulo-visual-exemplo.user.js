// ==UserScript==
// @name         Exemplo: Clique Simples com Fluxo Modular
// @namespace    http://example.net/
// @version      1.0
// @description  Um clique simples com estrutura pronta para evoluir
// @match        https://clicador.exemplo.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

(function() {
    'use strict';

    const fluxoId = 'fluxo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    GM_setValue(fluxoId, { status: 'pronto', origem: 'clicador' });

    GM_addValueChangeListener(fluxoId, (k, o, n) => {
        if (n.status === 'executado') {
            alert('Comando recebido! 🎉');
        }
    });

    const botao = document.createElement('button');
    botao.textContent = 'Clique aqui';
    botao.style.cssText = 'position:fixed;bottom:20px;left:20px;padding:10px;';
    botao.onclick = () => {
        GM_setValue(fluxoId, { ...GM_getValue(fluxoId), status: 'executado' });
        window.dispatchEvent(new CustomEvent('exibirAlertaBonito', {
            detail: { tipo: 'info', texto: 'Ação enviada!' }
        }));
    };

    document.body.appendChild(botao);
})();
