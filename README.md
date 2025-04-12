# 🧠 Tampermonkey Modular Template

Este repositório contém **padrões, templates e diretrizes** para desenvolver scripts escaláveis e modulares com Tampermonkey, priorizando modularidade, escalabilidade e manutenção.

## 🔗 Índice Rápido

- [📄 Manifestos](#manifestos)
- [🧱 Templates](#templates)
- [🧪 Exemplos Reais e Simulados](#exemplos-reais-e-simulados)
- [🤖 Uso com IAs](#uso-com-ias)
- [📚 Documentação Expandida (Wiki)](#documentação-expandida-wiki)
- [🧾 Registro do Projeto](#registro-do-projeto)

---

## 📄 Manifestos

Documentos que definem os princípios do projeto:

- [Manifesto Modular](./manifesto/manifesto.md)
- [Diretriz Visual x Funcional](./diretrizes/visual-funcional.md)

## 🧱 Templates

Modelos prontos para iniciar seus scripts:

- [Script Base Modular](./templates/esqueleto_modular_base.user.js)

## 🧪 Exemplos Reais e Simulados

Scripts que demonstram a arquitetura modular aplicada:

- [fluxo-ciclo-validacao.user.js](./exemplos/fluxo-ciclo-validacao.user.js): Fluxo entre 3 abas com validação.
- [modulo-visual-exemplo.user.js](./exemplos/modulo-visual-exemplo.user.js): Módulo visual que reage a eventos.
- [exemplo-simples-com-fluxo.user.js](./exemplos/exemplo-simples-com-fluxo.user.js): Botão simples preparado para expansão.
- [exemplo-fluxo-google-youtube-facebook.user.js](./exemplos/exemplo-fluxo-google-youtube-facebook.user.js): Fluxo real entre domínios públicos, com validação e comunicação entre abas.

## 🤖 Uso com IAs

Para garantir que IAs sigam a estrutura modular, inicie prompts com:

> Todo script deve seguir arquitetura modular. Use GM_setValue, GM_addValueChangeListener e fluxoId, mesmo em scripts simples. Priorize funcionalidade antes do visual. Estilo deve ser modularizado.

Use o arquivo [prompt_ia_base.txt](./prompt_ia_base.txt) para instruções completas.

## 📚 Documentação Expandida (Wiki)

Consulte a [Wiki](https://github.com/statusup/tampermonkey-modular-template/wiki) para detalhes adicionais:

- [📜 Manifesto Modular](https://github.com/statusup/tampermonkey-modular-template/wiki/Manifesto-Modular)
- [🎨 Diretriz Visual x Funcional](https://github.com/statusup/tampermonkey-modular-template/wiki/Diretriz-Visual-x-Funcional)
- [🧪 Guia de Testes](https://github.com/statusup/tampermonkey-modular-template/wiki/Guia-de-Testes)
- [🧱 Estrutura Recomendada](https://github.com/statusup/tampermonkey-modular-template/wiki/Estrutura-Recomendada)

## 🧾 Registro do Projeto

Consulte o [arquivo de atualização](./atualizacao.md) para o histórico completo e a estrutura atual do repositório.

---

## Estrutura Modular Recomendada

- **Comunicação entre abas**: Use `GM_setValue` e `GM_addValueChangeListener` para fluxos robustos.
- **Modularização visual**: Separe estilos em módulos reutilizáveis.
- **Escalabilidade por fluxo**: Estruture scripts com `fluxoId` para expansão simplificada.
