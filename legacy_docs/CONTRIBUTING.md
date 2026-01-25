# Guia de Contribuição

Obrigado pelo interesse em contribuir com o projeto da Serralheria da Ilha! Este documento fornece diretrizes para colaboração efetiva.

---

## Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Workflow de Desenvolvimento](#workflow-de-desenvolvimento)
- [Commits](#commits)
- [Pull Requests](#pull-requests)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Features](#sugerir-features)

---

## Código de Conduta

### Nossos Compromissos

- Manter um ambiente respeitoso e inclusivo
- Aceitar críticas construtivas
- Focar no que é melhor para o projeto
- Demonstrar empatia com outros colaboradores

### Comportamentos Inaceitáveis

- Linguagem ofensiva ou discriminatória
- Assédio público ou privado
- Publicar informações privadas de terceiros
- Conduta não profissional

---

## Como Contribuir

### Tipos de Contribuição

1. **Código**
   - Corrigir bugs
   - Implementar features
   - Melhorar performance
   - Refatorar código

2. **Documentação**
   - Corrigir typos
   - Melhorar explicações
   - Adicionar exemplos
   - Traduzir conteúdo

3. **Design**
   - Melhorar UI/UX
   - Criar mockups
   - Sugerir paleta de cores
   - Otimizar assets

4. **Testes**
   - Escrever testes unitários
   - Criar testes E2E
   - Reportar bugs

---

## Configuração do Ambiente

### Pré-requisitos

- **Node.js**: 18.x ou superior
- **npm**: 9.x ou superior
- **Git**: 2.x ou superior
- **VS Code**: Recomendado (com extensões)

### Extensões VS Code Recomendadas

```json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Instalação

```bash
# 1. Fork o repositório no GitHub
# 2. Clone seu fork

git clone https://github.com/SEU-USERNAME/serralheria_da_ilha.git
cd serralheria_da_ilha

# 3. Adicione o repositório original como upstream

git remote add upstream https://github.com/ORIGINAL-OWNER/serralheria_da_ilha.git

# 4. Instale dependências

npm install

# 5. Inicie o servidor de desenvolvimento

npm run dev
```

### Verificar Instalação

```bash
# Dev server deve iniciar em http://localhost:4321
# Você deve ver a landing page da serralheria
# HMR (Hot Module Replacement) deve funcionar ao editar arquivos
```

---

## Padrões de Código

### Estrutura de Arquivos

```
src/
├── components/          # Componentes reutilizáveis
│   ├── *.astro         # Componentes Astro
│   └── *.tsx           # Componentes React
├── layouts/            # Layouts base
│   └── Layout.astro    # Layout principal
├── pages/              # Páginas (file-based routing)
│   └── index.astro     # Homepage
└── env.d.ts            # Type declarations
```

### Convenções de Nomenclatura

#### Arquivos

```typescript
// Componentes Astro: PascalCase.astro
Hero.astro
WorksGallery.astro
ContactForm.astro

// Componentes React: PascalCase.tsx
WhatsAppButton.tsx
ImageCarousel.tsx

// Páginas: kebab-case.astro ou index.astro
index.astro
sobre-nos.astro
contato.astro

// Layouts: PascalCase.astro
Layout.astro
BlogLayout.astro
```

#### Variáveis e Funções

```typescript
// camelCase para variáveis e funções
const phoneNumber = '5527999999999';
const handleClick = () => { ... };

// PascalCase para componentes
const Hero = () => { ... };

// UPPER_SNAKE_CASE para constantes
const MAX_ITEMS = 10;
const API_ENDPOINT = 'https://api.example.com';
```

#### CSS Classes (Tailwind)

```html
<!-- Ordem recomendada -->
<!-- 1. Layout (flex, grid, block) -->
<!-- 2. Positioning (relative, absolute) -->
<!-- 3. Box Model (width, height, padding, margin) -->
<!-- 4. Typography (text-*, font-*) -->
<!-- 5. Visual (bg-*, border-*, shadow-*) -->
<!-- 6. Interactivity (hover:, focus:, active:) -->
<!-- 7. Responsive (md:, lg:, xl:) -->

<div class="flex flex-col w-full p-6 text-lg font-bold bg-white hover:bg-gray-100 md:flex-row">
  ...
</div>
```

### TypeScript

#### Tipos e Interfaces

```typescript
// Sempre defina tipos para props
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';  // Opcional com default
}

// Use interfaces para estruturas de dados
interface Work {
  image: string;
  title: string;
  category: string;
  description?: string;
}

// Evite 'any', use 'unknown' se necessário
const data: unknown = await fetch(...);
```

#### Type Annotations

```typescript
// Explicite tipos em parâmetros de função
function formatPhone(number: string): string {
  return `+55 ${number}`;
}

// Use type inference quando óbvio
const count = 10;  // OK, tipo inferido como number
const items: Work[] = [];  // Necessário, array vazio
```

### React

#### Componentes Funcionais

```tsx
import { useState } from 'react';

interface Props {
  initialValue: number;
}

export default function Counter({ initialValue }: Props) {
  const [count, setCount] = useState(initialValue);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

#### Hooks

```tsx
// Sempre nomeie custom hooks com 'use' prefix
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  // ...
  return size;
}

// Use hooks no topo do componente
function Component() {
  const [state, setState] = useState(0);
  const value = useCustomHook();

  // ...resto do componente
}
```

### Astro

#### Frontmatter

```astro
---
// 1. Imports
import Layout from '../layouts/Layout.astro';
import Component from '../components/Component.astro';

// 2. Type definitions
interface Work {
  title: string;
  image: string;
}

// 3. Props (se aplicável)
const { title, description } = Astro.props;

// 4. Data fetching / Logic
const works: Work[] = [...];
const filteredWorks = works.filter(...);
---

<!-- Template -->
<Layout title={title}>
  ...
</Layout>
```

#### Client Directives

```astro
<!-- Use client:load apenas para componentes críticos -->
<WhatsAppButton client:load phoneNumber="..." />

<!-- Use client:idle para componentes não críticos -->
<ImageCarousel client:idle images={...} />

<!-- Use client:visible para componentes abaixo da dobra -->
<Newsletter client:visible />

<!-- Evite client:load em múltiplos componentes -->
```

### CSS/Tailwind

#### Customização

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      // Prefira extend a sobrescrever
      colors: {
        'brand-primary': '#FF6B35',
      },
      // Use nomes semânticos
      spacing: {
        '128': '32rem',
      }
    }
  }
}
```

#### Componentes Estilizados

```astro
<!-- Evite inline styles excessivos -->
<style>
  /* Escopo local em componentes Astro */
  .custom-class {
    @apply flex items-center gap-4;
  }

  /* Evite !important */
  /* Use especificidade correta */
</style>
```

---

## Workflow de Desenvolvimento

### 1. Criar Branch

```bash
# Sempre crie branches a partir da main atualizada
git checkout main
git pull upstream main

# Nomeie branches descritivamente
git checkout -b feature/add-contact-form
git checkout -b fix/mobile-menu-bug
git checkout -b docs/update-readme
```

**Prefixos de branch**:
- `feature/`: Novas funcionalidades
- `fix/`: Correções de bugs
- `docs/`: Documentação
- `refactor/`: Refatoração
- `test/`: Adição de testes
- `chore/`: Tarefas de manutenção

### 2. Desenvolver

```bash
# Faça commits frequentes e atômicos
git add src/components/ContactForm.tsx
git commit -m "feat: add contact form component"

git add src/components/ContactForm.test.tsx
git commit -m "test: add tests for contact form"
```

### 3. Testar

```bash
# Build local
npm run build

# Verificar TypeScript
npx tsc --noEmit

# Preview do build
npm run preview
```

### 4. Sincronizar

```bash
# Antes de fazer PR, sincronize com upstream
git fetch upstream
git rebase upstream/main

# Resolva conflitos se houver
# Teste novamente após rebase
```

### 5. Push

```bash
# Push para seu fork
git push origin feature/add-contact-form
```

---

## Commits

### Conventional Commits

Usamos o padrão [Conventional Commits](https://www.conventionalcommits.org/).

#### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

#### Tipos

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação (não afeta lógica)
- **refactor**: Refatoração
- **test**: Testes
- **chore**: Manutenção

#### Exemplos

```bash
# Feature
feat(hero): add video background to hero section

# Bug fix
fix(mobile): correct navbar overflow on small screens

# Documentation
docs(readme): update installation instructions

# Refactor
refactor(gallery): extract image card to separate component

# Multiple changes (evite, prefira commits atômicos)
feat(contact): add contact form with validation
```

#### Boas Práticas

```bash
✅ GOOD
feat: add WhatsApp floating button
fix: correct mobile menu z-index
docs: update contributing guide

❌ BAD
update stuff
fixed bug
changes
WIP
asdfasdf
```

#### Breaking Changes

```bash
# Use BREAKING CHANGE no rodapé
feat(api): change WhatsApp link format

BREAKING CHANGE: phoneNumber prop now requires international format
```

---

## Pull Requests

### Antes de Abrir PR

- [ ] Código segue os padrões do projeto
- [ ] Build passa sem erros (`npm run build`)
- [ ] Não há warnings de TypeScript
- [ ] Testado em Chrome, Firefox, Safari
- [ ] Testado em mobile (DevTools)
- [ ] Commits seguem Conventional Commits
- [ ] Branch está atualizado com main

### Template de PR

```markdown
## Descrição

Breve descrição do que foi alterado e por quê.

## Tipo de Mudança

- [ ] Bug fix (mudança que corrige um issue)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Documentação

## Como Testar

1. Faça checkout da branch
2. Rode `npm install`
3. Rode `npm run dev`
4. Navegue para [página específica]
5. Verifique [comportamento específico]

## Screenshots

(Se aplicável, adicione screenshots ou GIFs)

## Checklist

- [ ] Código segue o style guide
- [ ] Comentei código complexo
- [ ] Documentação atualizada
- [ ] Build passa
- [ ] Testado em múltiplos browsers
```

### Code Review

#### Para Revisores

- Seja construtivo e gentil
- Explique o "por quê" dos comentários
- Aprove ou solicite mudanças claramente
- Teste as mudanças localmente se possível

#### Para Autores

- Responda a todos os comentários
- Faça mudanças solicitadas em commits separados
- Não force push após review começar
- Agradeça o feedback

---

## Reportar Bugs

### Antes de Reportar

1. Verifique se já não existe issue similar
2. Teste na versão mais recente
3. Tente reproduzir em navegador diferente
4. Colete informações sobre o ambiente

### Template de Bug Report

```markdown
**Descrição do Bug**
Descrição clara e concisa do bug.

**Como Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Scroll até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente**
- OS: [ex: Windows 10]
- Browser: [ex: Chrome 120]
- Versão do Node: [ex: 18.17.0]
- Resolução da tela: [ex: 1920x1080]

**Informações Adicionais**
Qualquer contexto adicional.
```

---

## Sugerir Features

### Template de Feature Request

```markdown
**A feature resolve um problema? Descreva.**
Descrição clara do problema. Ex: "Sempre fico frustrado quando [...]"

**Descreva a solução desejada**
Descrição clara de como deveria funcionar.

**Descreva alternativas consideradas**
Outras soluções ou features que você considerou.

**Contexto Adicional**
Screenshots, mockups, exemplos de outros sites, etc.
```

### Discussão de Features

1. Abra uma issue com o template acima
2. Aguarde feedback da comunidade
3. Se aprovado, pode ser implementado
4. Se rejeitado, explicaremos o motivo

---

## Dúvidas Frequentes

### Como atualizar meu fork?

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### Como desfazer commits locais?

```bash
# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1
```

### Como resolver conflitos de merge?

```bash
# 1. Fetch upstream
git fetch upstream

# 2. Tente rebase
git rebase upstream/main

# 3. Se houver conflitos, resolva manualmente
# Edite arquivos conflitantes

# 4. Marque como resolvido
git add <arquivo-resolvido>
git rebase --continue

# 5. Force push (se já tinha pushado antes)
git push --force-with-lease origin sua-branch
```

### Posso trabalhar em múltiplas features simultaneamente?

Sim! Use branches separadas:

```bash
git checkout -b feature/feature-1
# trabalhe...
git commit -m "feat: feature 1"

git checkout main
git checkout -b feature/feature-2
# trabalhe...
git commit -m "feat: feature 2"
```

---

## Recursos Úteis

### Documentação

- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Ferramentas

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

### Comunidade

- GitHub Issues: [Discussões técnicas]
- GitHub Discussions: [Perguntas gerais]

---

## Agradecimentos

Obrigado por contribuir com o projeto da Serralheria da Ilha! Sua colaboração é muito valorizada.

Se tiver dúvidas, não hesite em abrir uma issue ou iniciar uma discussão.

Boas contribuições! 🚀
