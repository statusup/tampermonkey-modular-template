# 🧪 TESTS.md – Instruções de Testes para Scripts Modulares

Este documento descreve como validar o funcionamento dos scripts Tampermonkey contidos neste repositório, com foco em testes manuais, observações de ciclo e sugestões de testes automatizados no futuro.

---

## ✅ Objetivo Geral

Garantir que cada script:
- Execute sua função principal corretamente
- Se comunique entre abas usando `GM_*`
- Seja escalável e modular conforme proposto no manifesto

---

## 🔁 Teste: fluxo-ciclo-validacao.user.js

### Cenário
Simula um fluxo de envio de dados de uma aba de origem para validação em uma aba intermediária e confirmação em uma aba de destino.

### Passos
1. Acesse `https://origem.exemplo.com`
2. Clique no botão **"Enviar Texto"**
3. Observe a abertura de 2 novas abas: `validador.exemplo.com` e `destino.exemplo.com`
4. No validador, o dado será marcado como "validado"
5. No destino, a mudança será detectada e marcada como "concluído"
6. Retorne à aba origem e veja o alerta de sucesso

---

## 🎨 Teste: modulo-visual-exemplo.user.js

### Cenário
Um módulo visual escuta o evento `exibirAlertaBonito` e exibe uma notificação com cor temática.

### Passos
1. Acesse qualquer site com o script ativo
2. Execute no console:
```js
window.dispatchEvent(new CustomEvent('exibirAlertaBonito', {
  detail: { tipo: 'erro', texto: 'Erro simulado' }
}));
```
3. Verifique a exibição de um toast visual no canto inferior

---

## 👆 Teste: exemplo-simples-com-fluxo.user.js

### Cenário
Um botão simples com estrutura modular, pronto para ser escutado por outro módulo.

### Passos
1. Acesse `https://clicador.exemplo.com`
2. Clique no botão "Clique aqui"
3. Verifique:
   - Valor `GM_setValue` atualizado com status `executado`
   - Evento `exibirAlertaBonito` disparado
   - Possível alerta visual se o módulo visual estiver ativo

---

## 🤖 Automação Sugerida (Futuro)

Para testes automatizados, considere:
- **Selenium** ou **Puppeteer** para simular cliques, validações e observação de alertas
- Testes em sequência com múltiplos fluxos simulados
- Armazenamento de resultados dos testes com `GM_getValue` em logs ou painel

---

## 📂 Pré-requisitos para testes manuais

- Extensão Tampermonkey instalada e scripts ativados
- Permissões corretas concedidas no navegador
- Scripts adicionados na ordem correta para integrações (ex: `modulo-visual-exemplo` junto de outro)

---

## 🔄 Observações

- Scripts podem ser testados isoladamente ou em conjunto
- Comunicação entre abas depende de domínio correspondente (ou uso simulado)
- Para testes locais, crie páginas com estrutura mínima que simule os hosts `origem.exemplo.com`, `validador`, e `destino`
