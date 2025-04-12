# 📜 Manifesto de Arquitetura Modular para Scripts Tampermonkey

**Versão:** 1.0  
**Data:** Abril 2025

## ✨ Visão
Todo script nasce simples, mas deve estar pronto para crescer.

## 🎯 Objetivo
Desenvolver scripts que possam:
- comunicar-se com outros módulos
- evoluir sem reescritas profundas
- ser reaproveitados como peças de um sistema maior

## 📦 Princípios

1. Todo script é um módulo
2. Comunicação embutida desde o início
3. Design para integração futura
4. Escute sempre que possível
5. Evite decisões finais

## 🧰 Estrutura Recomendada
- `@name` descritivo
- `@match` específico
- `fluxoId` único
- Comunicação `GM_*`
- Comentário padrão de integração

## 🧪 Exemplo Prático

```js
const fluxoId = 'fluxo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
GM_setValue(fluxoId, { status: 'inicial', origem: 'meuScript' });

GM_addValueChangeListener(fluxoId, (key, oldValue, newValue) => {
  if (newValue.status === 'atualizado') {
    console.log('Recebido novo status:', newValue);
  }
});
```

## 🤖 Prompt para IA

> Todo script deve seguir arquitetura modular. Mesmo que a tarefa inicial pareça simples, use GM_setValue, GM_addValueChangeListener, fluxoId e permita evolução futura. Priorize funcionalidade sobre visual. Comente se algo for modularizado depois.
