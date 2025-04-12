# 📜 Registro de Atualizações e Estrutura do Projeto

Este documento registra as etapas de criação, decisões e estruturação do repositório **tampermonkey-modular-template**.

---

## ✅ Etapas Realizadas

### 1. Criação do Manifesto Modular
- Arquivos criados:
  - `manifesto/manifesto.md`
  - `manifesto/manifesto.txt`
  - `manifesto/manifesto.json`
- Finalidade: Definir princípios de modularidade, comunicação e estrutura entre scripts

### 2. Criação da Diretriz Visual x Funcional
- Arquivos criados:
  - `diretrizes/visual-funcional.md`
  - `diretrizes/visual-funcional.txt`
- Finalidade: Separar estilo visual da lógica, priorizar funcionalidade e manter código enxuto

### 3. Criação do Esqueleto Modular
- Arquivo criado: `templates/esqueleto_modular_base.user.js`
- Função: Template de início com comunicação embutida (`fluxoId`, `GM_setValue`, listener)

### 4. Exemplos de Uso
- Pasta `exemplos/` criada com:
  - `fluxo-ciclo-validacao.user.js`
  - `modulo-visual-exemplo.user.js`
  - `exemplo-simples-com-fluxo.user.js`

### 5. Página de Documentação Visual
- Criado `index.html` (versão simples) e `index_v2.html` (com navegação lateral)
- Habilitado GitHub Pages com diretório `/ (root)`

### 6. Criação da Wiki
- Páginas criadas:
  - Manifesto Modular
  - Diretriz Visual x Funcional
  - Guia de Testes
  - Estrutura Recomendada
- Conteúdo copiado dos arquivos `.md` do repositório

### 7. Criação do Guia de Testes
- Arquivo criado: `TESTS.md`
- Instruções manuais para validação dos exemplos
- Orientações futuras de testes automatizados

---

## 🗂 Estrutura Final do Repositório

```
📦 tampermonkey-modular-template/
│
├── manifesto/
│   ├── manifesto.md
│   ├── manifesto.txt
│   └── manifesto.json
│
├── diretrizes/
│   ├── visual-funcional.md
│   └── visual-funcional.txt
│
├── templates/
│   └── esqueleto_modular_base.user.js
│
├── exemplos/
│   ├── fluxo-ciclo-validacao.user.js
│   ├── modulo-visual-exemplo.user.js
│   └── exemplo-simples-com-fluxo.user.js
│
├── index.html
├── README.md
├── TESTS.md
└── atualizacao.md
```

---

## 📌 Recomendação

Sempre que realizar mudanças significativas, registre aqui:
- Data
- Objetivo
- Arquivos afetados
- Resultado esperado

Isso ajudará na manutenção e versionamento manual do projeto.

---

Última atualização automática: abril de 2025.
