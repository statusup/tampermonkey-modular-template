# 🧠 Tampermonkey Modular Template

Este repositório contém padrões, templates e diretrizes para desenvolver **scripts escaláveis e modulares** com Tampermonkey. A arquitetura aqui proposta foca em:

- Comunicação entre módulos via `GM_setValue` e `GM_addValueChangeListener`
- Estrutura de dados reutilizável com `fluxoId`
- Separação entre lógica funcional e estilo visual
- Flexibilidade para evolução dos scripts, sem reescritas profundas

## 📄 Manifestos

- [Manifesto Arquitetura Modular](./manifesto/manifesto.md)
- [Diretriz Visual x Funcional](./diretrizes/visual-funcional.md)

## 🧱 Templates

- [Script base modular](./templates/esqueleto_modular_base.user.js)

## 🧪 Exemplos

- [Exemplo de fluxo cíclico entre abas](./exemplos/exemplo-uso-fluxo-cycle.user.js)

## 🤖 Uso com IA

Ao trabalhar com assistentes de IA, inclua este trecho no início da conversa para orientar a arquitetura:

> 📌 [Prompt IA](./manifesto/manifesto.md#prompt-para-ia)

## 📬 Contribuições

Sugestões, melhorias ou exemplos novos são bem-vindos!
# tampermonkey-modular-template
