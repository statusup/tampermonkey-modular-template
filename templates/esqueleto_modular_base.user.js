// ==UserScript==
// @name         🌐 Script Modular Base (Template)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Estrutura inicial para scripts escaláveis com comunicação embutida entre módulos
// @match        https://seudominio.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// 📄 Manifesto: ./manifesto/manifesto.md
// 🎨 Diretriz Visual: ./diretrizes/visual-funcional.md
// ==/UserScript==

(function() {
    'use strict';

    const fluxoId = 'fluxo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    GM_setValue(fluxoId, {
        origem: 'moduloBase',
        status: 'inicial',
        timestamp: Date.now(),
        dados: {}
    });

    GM_addValueChangeListener(fluxoId, (key, oldValue, newValue) => {
        if (newValue.status === 'atualizado') {
            console.log('Recebido status atualizado:', newValue);
        }
    });

    // Futuro: Modularização visual pode escutar eventos customizados aqui
    // window.dispatchEvent(new CustomEvent('exibirAlertaBonito', { detail: { tipo: 'info', texto: 'Evento' } }));

})();
