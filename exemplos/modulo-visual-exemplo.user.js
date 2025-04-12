// ==UserScript==
// @name         Exemplo: Módulo Visual para Alerta
// @namespace    http://example.net/
// @version      1.0
// @description  Escuta eventos visuais e exibe feedbacks amigáveis
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';

    function criarToast(mensagem, cor = '#28a745') {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: ${cor};
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            z-index: 10000;
            font-family: sans-serif;
        `;
        toast.textContent = mensagem;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    window.addEventListener('exibirAlertaBonito', (e) => {
        const { tipo, texto } = e.detail;
        const cor = tipo === 'erro' ? '#dc3545' : tipo === 'info' ? '#17a2b8' : '#28a745';
        criarToast(texto, cor);
    });
})();
