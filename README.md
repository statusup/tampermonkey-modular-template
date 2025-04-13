# 🧠 Tampermonkey Modular Template

Este repositório contém padrões, templates e diretrizes para desenvolver **scripts escaláveis e modulares** com Tampermonkey.

## 🔗 Índice Rápido

- [📄 Manifestos](#-manifestos)
- [🧱 Templates](#-templates)
- [🧪 Exemplos Reais e Simulados](#-exemplos-reais-e-simulados)
- [🤖 Uso com IAs](#-uso-com-ias)
- [📚 Documentação Expandida (Wiki)](#-documentação-expandida-wiki)
- [🧾 Registro do Projeto](#-registro-do-projeto)

---

## 📄 Manifestos

- [Manifesto Modular](./manifesto/manifesto.md)
- [Diretriz Visual](./diretrizes/visual-funcional.md)

## 🧱 Templates

- [Script Base Modular](./templates/esqueleto_modular_base.user.js)

## 🧪 Exemplos Reais e Simulados

Scripts que demonstram a arquitetura modular aplicada:

- [fluxo-ciclo-validacao.user.js](./exemplos/fluxo-ciclo-validacao.user.js): fluxo entre 3 abas com validação.
- [modulo-visual-exemplo.user.js](./exemplos/modulo-visual-exemplo.user.js): módulo visual que reage a eventos.
- [exemplo-simples-com-fluxo.user.js](./exemplos/exemplo-simples-com-fluxo.user.js): botão simples já preparado para expansão.
- [exemplo-fluxo-google-youtube-facebook.user.js](./exemplos/exemplo-fluxo-google-youtube-facebook.user.js): fluxo real funcional entre domínios públicos, validando e confirmando dados via comunicação entre abas.
- [exemplo-fluxo-com-popups.user.js](./exemplos/exemplo-fluxo-com-popups.user.js): fluxo cíclico com dois pop-ups de validação/recebimento, com retorno ao início e controle de ciclos.
- [exemplo-fluxo-com-redirecionamento.user.js](./exemplos/exemplo-fluxo-com-redirecionamento.user.js): fluxo com redirecionamento de uma etapa para outra, encerrando o ciclo com retorno automático ao ponto inicial.

## 🤖 Uso com IAs

Use o [prompt_ia_base.txt](./prompt_ia_base.txt) para instruir inteligências artificiais a seguirem a estrutura deste repositório corretamente.

## 📚 Documentação Expandida (Wiki)

- [📜 Manifesto Modular](https://github.com/statusup/tampermonkey-modular-template/wiki/Manifesto-Modular)
- [🎨 Diretriz Visual x Funcional](https://github.com/statusup/tampermonkey-modular-template/wiki/Diretriz-Visual-x-Funcional)
- [🧪 Guia de Testes](https://github.com/statusup/tampermonkey-modular-template/wiki/Guia-de-Testes)
- [🧱 Estrutura Recomendada](https://github.com/statusup/tampermonkey-modular-template/wiki/Estrutura-Recomendada)

## 🧾 Registro do Projeto

Consulte o [arquivo de atualização](./atualizacao.md) para ver o histórico completo e a estrutura atual do repositório.
