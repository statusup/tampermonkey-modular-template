// ==UserScript==
// @name         Exemplo: Fluxo Cíclico com Validação e Envio
// @namespace    http://example.net/
// @version      1.0
// @description  Simula envio de dados de uma página de origem para validação e processamento final em outra
// @match        https://origem.exemplo.com/*
// @match        https://validador.exemplo.com/*
// @match        https://destino.exemplo.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

(function() {
    'use strict';

    const host = window.location.hostname;

    const gerarFluxoId = () =>
        'fluxo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    if (host.includes('origem')) {
        const fluxoId = gerarFluxoId();
        GM_setValue(fluxoId, {
            status: 'iniciado',
            dados: { mensagem: 'Olá mundo!' },
            origem: 'origem'
        });

        GM_addValueChangeListener(fluxoId, (k, o, n) => {
            if (n.status === 'concluido') {
                alert('Fluxo finalizado! Dado: ' + n.dados.mensagem);
            }
        });

        const urlValidador = `https://validador.exemplo.com/?fluxoId=${fluxoId}`;
        const urlDestino = `https://destino.exemplo.com/?fluxoId=${fluxoId}`;
        window.open(urlValidador, '_blank');
        window.open(urlDestino, '_blank');
    }

    if (host.includes('validador')) {
        const fluxoId = new URLSearchParams(location.search).get('fluxoId');
        const dados = GM_getValue(fluxoId);
        if (dados) {
            GM_setValue(fluxoId, { ...dados, status: 'validado', validador: true });
        }
    }

    if (host.includes('destino')) {
        const fluxoId = new URLSearchParams(location.search).get('fluxoId');
        GM_addValueChangeListener(fluxoId, (k, o, n) => {
            if (n.status === 'validado' && n.validador) {
                GM_setValue(fluxoId, { ...n, status: 'concluido', destino: true });
                console.log('Fluxo concluído com sucesso.');
            }
        });
    }

})();
