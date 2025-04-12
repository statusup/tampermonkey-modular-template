# 🎨 Diretriz: Estilo Visual vs Funcionalidade

## Princípio
Priorize a lógica funcional do script. O visual pode ser aprimorado depois.

## Etapas

### 1. Funcionalidade
- Foco em clareza e eficiência
- Sem efeitos visuais complexos

### 2. Visual Modularizado
- Use módulos separados para estilo
- Comunique via:
```js
window.dispatchEvent(new CustomEvent('exibirAlertaBonito', {
  detail: { tipo: 'info', texto: 'Algo aconteceu' }
}));
```

### 3. Aprimoramento Visual
- Adicione toasts, cores, animações **apenas após funcionamento validado**

---

Separar estilo e lógica ajuda manutenção e evita retrabalho.
