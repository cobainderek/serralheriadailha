# Documentação Técnica - Serralheria da Ilha

## Visão Geral

Landing page moderna e de alta performance desenvolvida para a Serralheria da Ilha, empresa com 30 anos de experiência em metalurgia industrial e artística localizada em Vitória/ES.

## Índice

- [Arquitetura](#arquitetura)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Configuração](#configuração)
- [Build e Deploy](#build-e-deploy)
- [Performance](#performance)
- [Manutenção](#manutenção)

---

## Arquitetura

### Padrão de Arquitetura

O projeto utiliza uma arquitetura **JAMstack** (JavaScript, APIs, and Markup):

- **Static Site Generation (SSG)**: Todo o site é pré-renderizado em HTML estático
- **Island Architecture**: Componentes React hidratados apenas onde necessário
- **Zero JavaScript por padrão**: JS carregado apenas para componentes interativos

### Princípios de Design

1. **Performance First**: Core Web Vitals otimizados
2. **Mobile First**: Design responsivo começando pelo mobile
3. **Acessibilidade**: ARIA labels e navegação por teclado
4. **SEO Optimized**: Meta tags, semantic HTML, sitemap

---

## Stack Tecnológica

### Framework Principal

**Astro 5.16.6**
- Framework moderno para sites estáticos
- Suporta múltiplos frameworks (React, Vue, Svelte)
- Zero JS shipping por padrão
- Otimização automática de assets
- Hot Module Replacement (HMR)

### UI Framework

**React 18.2.0**
- Usado apenas para componentes interativos
- Hidratação parcial (Islands)
- Componentes: WhatsAppButton

### Styling

**Tailwind CSS 3.4.0**
- Utility-first CSS framework
- JIT (Just-In-Time) compilation
- Purge automático de CSS não usado
- Design system customizado

**@astrojs/tailwind 5.0.0**
- Integração nativa com Astro
- Suporte a componentes Astro e React

### Ícones

**Lucide React 0.300.0**
- Biblioteca de ícones moderna e leve
- Tree-shakeable (apenas ícones usados)
- SVG otimizados

### Build Tools

- **TypeScript**: Type safety
- **Vite**: Build tool ultrarrápido
- **PostCSS**: Processamento de CSS

---

## Estrutura do Projeto

```
serralheria_da_ilha/
│
├── .astro/                      # Cache do Astro (auto-gerado)
│
├── public/                      # Assets estáticos (servidos diretamente)
│   ├── images/                  # Imagens dos projetos
│   └── favicon.svg              # Favicon do site
│
├── src/                         # Código fonte
│   ├── components/              # Componentes reutilizáveis
│   │   ├── WhatsAppButton.tsx   # Botão flutuante do WhatsApp (React)
│   │   └── WorksGallery.astro   # Galeria de trabalhos (Astro)
│   │
│   ├── layouts/                 # Layouts base
│   │   └── Layout.astro         # Layout principal com SEO
│   │
│   ├── pages/                   # Páginas (file-based routing)
│   │   └── index.astro          # Página inicial
│   │
│   └── env.d.ts                 # Definições de tipos TypeScript
│
├── astro.config.mjs             # Configuração do Astro
├── tailwind.config.mjs          # Configuração do Tailwind
├── tsconfig.json                # Configuração do TypeScript
├── package.json                 # Dependências e scripts
└── README.md                    # Documentação do usuário
```

### Convenções de Nomenclatura

- **Componentes Astro**: PascalCase, extensão `.astro`
- **Componentes React**: PascalCase, extensão `.tsx`
- **Layouts**: PascalCase, extensão `.astro`
- **Pages**: kebab-case ou index, extensão `.astro`

---

## Componentes

### 1. Layout.astro

**Propósito**: Layout base com configuração de SEO e estilos globais.

**Props**:
```typescript
interface Props {
  title: string;           // Título da página
  description?: string;    // Meta description (opcional)
}
```

**Características**:
- Meta tags para SEO
- Google Fonts (Inter, Oswald)
- Reset CSS global
- Scroll suave
- Prevenção de scroll horizontal

**Uso**:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Página Inicial" description="Descrição customizada">
  <!-- Conteúdo -->
</Layout>
```

### 2. WhatsAppButton.tsx

**Propósito**: Botão flutuante para contato direto via WhatsApp.

**Props**:
```typescript
interface WhatsAppButtonProps {
  phoneNumber: string;      // Número no formato internacional (5527999999999)
  message?: string;         // Mensagem pré-preenchida (opcional)
}
```

**Características**:
- Posicionamento fixo (bottom-right)
- Tooltip no hover
- Animação de flutuação
- Abre WhatsApp em nova aba
- Mensagem URL-encoded

**Estados**:
- `isHovered`: Controla exibição do tooltip

**Uso**:
```astro
---
import WhatsAppButton from '../components/WhatsAppButton';
---

<WhatsAppButton
  client:load
  phoneNumber="5527999678125"
  message="Olá! Vi o site e gostaria de um orçamento."
/>
```

### 3. WorksGallery.astro

**Propósito**: Galeria responsiva de projetos em grid Masonry.

**Estrutura de Dados**:
```typescript
interface Work {
  image: string;      // Caminho da imagem
  title: string;      // Título do projeto
  category: string;   // Categoria (Portões, Estruturas, etc)
}
```

**Características**:
- Layout Masonry (grid com alturas variadas)
- Hover effects (overlay + zoom)
- Responsivo (3 colunas desktop → 1 coluna mobile)
- Placeholders para imagens

**Grid Behavior**:
- Item 3n+1: 1 row span
- Item 3n+2: 2 rows span (destaque)
- Item 3n+3: 1 row span

### 4. index.astro (Página Principal)

**Seções**:

1. **Navbar**
   - Logo
   - Links de navegação (Desktop)
   - CTA "Fale Conosco"
   - Background blur + border

2. **Hero Section**
   - Vídeo de background (Pixabay CDN)
   - Overlay gradient
   - Título principal com gradient
   - CTAs (Ver Portfólio, Solicitar Orçamento)

3. **Projetos Section**
   - Grid de 3 colunas
   - Cards com hover overlay
   - Imagens do Unsplash

4. **Footer**
   - Informações de contato
   - Endereço e telefone
   - Links sociais (WhatsApp, Instagram)
   - Google Maps iframe
   - Grid responsivo (2 colunas → 1 coluna mobile)

5. **WhatsApp Button**
   - Botão flutuante fixo
   - Ícone SVG customizado
   - Link direto para WhatsApp

---

## Configuração

### astro.config.mjs

```javascript
export default defineConfig({
  integrations: [
    tailwind(),  // Integração Tailwind
    react()      // Suporte a React
  ],
  output: 'static',              // SSG mode
  build: {
    inlineStylesheets: 'auto'    // Inline CSS pequenos
  }
});
```

### tailwind.config.mjs

**Cores Customizadas**:
```javascript
colors: {
  'industrial-gray': '#3A3A3C',
  'charcoal': '#2C2C2E',
  'petrol-blue': '#1C4E5A',
  'safety-orange': '#FF6B35',
  'gold': '#D4AF37',
  'steel': '#71797E',
}
```

**Fontes**:
- `sans`: Inter (corpo de texto)
- `display`: Oswald (títulos)

**Animações Customizadas**:
- `pulse-slow`: Pulsação suave (3s)
- `float`: Flutuação vertical (3s ease-in-out)

### tsconfig.json

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

---

## Build e Deploy

### Scripts Disponíveis

```bash
# Desenvolvimento (http://localhost:4321)
npm run dev

# Build de produção
npm run build

# Preview do build localmente
npm run preview
```

### Processo de Build

1. **Compilação TypeScript**: `.ts/.tsx` → JavaScript
2. **Processamento Astro**: `.astro` → HTML estático
3. **Otimização CSS**: Tailwind JIT + PurgeCSS
4. **Otimização de Assets**: Minificação, compressão
5. **Output**: Pasta `dist/` com arquivos estáticos

### Output (dist/)

```
dist/
├── index.html              # Página principal
├── _astro/                 # Assets otimizados (CSS, JS)
├── images/                 # Imagens otimizadas
└── favicon.svg
```

### Deploy Recomendado

**Plataformas Compatíveis**:
- ✅ Vercel (Recomendado)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Cloudflare Pages
- ✅ AWS S3 + CloudFront
- ✅ Qualquer host de arquivos estáticos

**Vercel (Exemplo)**:
1. Conectar repositório GitHub
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy automático em commits

---

## Performance

### Core Web Vitals (Objetivos)

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Otimizações Implementadas

#### 1. Loading Strategies

- **Vídeo Hero**: Carregamento lazy + autoplay muted
- **Imagens**: Lazy loading nativo (`loading="lazy"`)
- **Fonts**: Preconnect + display=swap

#### 2. CSS

- Inline de CSS crítico
- PurgeCSS automático (remove CSS não usado)
- Minificação automática

#### 3. JavaScript

- Partial hydration (apenas WhatsAppButton)
- Tree-shaking automático
- Code splitting

#### 4. Assets

- Imagens CDN (Unsplash, Pixabay)
- SVG para ícones (menor que fontes de ícones)
- Compressão automática no build

### Métricas Esperadas

- **First Load**: ~50-100KB (HTML + CSS + JS crítico)
- **Total Bundle Size**: ~150-200KB
- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)

---

## Manutenção

### Atualização de Conteúdo

#### 1. Trocar Número WhatsApp

**Arquivo**: `src/pages/index.astro`

**Linhas**: 29, 67, 142

```astro
<!-- Substituir SEUNUMERO pelo número completo -->
<a href="https://wa.me/5527999678125">
```

#### 2. Adicionar Projetos

**Arquivo**: `src/components/WorksGallery.astro`

```typescript
const works: Work[] = [
  {
    image: '/images/projeto-1.jpg',
    title: 'Novo Projeto',
    category: 'Categoria'
  },
  // ...
];
```

**Passos**:
1. Adicionar imagens em `public/images/`
2. Atualizar array `works`
3. Rebuild do projeto

#### 3. Atualizar Google Maps

**Arquivo**: `src/pages/index.astro`

**Linha**: ~135

**Como obter iframe do Google Maps**:
1. Acessar [Google Maps](https://maps.google.com)
2. Procurar endereço
3. Clicar em "Compartilhar" → "Incorporar mapa"
4. Copiar código `<iframe>`
5. Substituir no código

#### 4. Alterar Cores do Tema

**Arquivo**: `tailwind.config.mjs`

```javascript
colors: {
  'industrial-gray': '#NOVA_COR',
  // ...
}
```

### Atualização de Dependências

```bash
# Verificar versões desatualizadas
npm outdated

# Atualizar dependências minor/patch
npm update

# Atualizar major versions (com cuidado)
npm install astro@latest
```

### Debugging

#### Dev Server não inicia

```bash
# Limpar cache e reinstalar
rm -rf node_modules .astro
npm install
npm run dev
```

#### Build falha

```bash
# Verificar erros de TypeScript
npx tsc --noEmit

# Build com logs detalhados
npm run build -- --verbose
```

#### Estilos não aplicados

- Verificar se Tailwind classes estão no `content` config
- Limpar `.astro` cache
- Restart dev server

---

## Suporte e Recursos

### Documentação Oficial

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Lucide Icons](https://lucide.dev)

### Issues Comuns

**Q: WhatsApp não abre no mobile**
- Verificar formato do número: `5527999999999` (sem espaços/caracteres)

**Q: Imagens não aparecem**
- Verificar caminho relativo a `public/`
- Exemplo: `public/images/foto.jpg` → `/images/foto.jpg`

**Q: Fontes não carregam**
- Verificar conexão com Google Fonts
- Checar CSP headers se em produção

---

## Contribuindo

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código

- **Prettier**: Formatação automática
- **ESLint**: Linting JavaScript/TypeScript
- **Commits**: Conventional Commits (feat:, fix:, docs:, etc)

---

## Licença

Este projeto foi desenvolvido para Serralheria da Ilha. Todos os direitos reservados.

---

## Autor

Desenvolvido com ❤️ para Serralheria da Ilha

**Contato**: (27) 99967-8125
**Endereço**: Rua Gastão Villa, 432 - Vitória/ES
