# Documentação de Componentes

Guia completo de todos os componentes do projeto Serralheria da Ilha.

---

## Índice

- [Layouts](#layouts)
  - [Layout.astro](#layoutastro)
- [Componentes Astro](#componentes-astro)
  - [WorksGallery.astro](#worksgalleryastro)
- [Componentes React](#componentes-react)
  - [WhatsAppButton.tsx](#whatsappbuttontsx)
- [Páginas](#páginas)
  - [index.astro](#indexastro)

---

## Layouts

### Layout.astro

**Caminho**: `src/layouts/Layout.astro`

**Propósito**: Layout base para todas as páginas do site, incluindo configurações de SEO, meta tags e estilos globais.

#### Props

```typescript
interface Props {
  title: string;           // Título da página (obrigatório)
  description?: string;    // Meta description (opcional)
}
```

#### Uso

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Serralheria da Ilha - Home"
  description="Serralheria industrial com 30 anos de experiência"
>
  <main>
    <!-- Conteúdo da página -->
  </main>
</Layout>
```

#### Características

**SEO**
- Meta charset UTF-8
- Meta viewport para responsividade
- Meta description customizável
- Meta generator (Astro)
- Title tag dinâmico

**Fontes**
- Google Fonts preconnect (otimização DNS)
- Inter (corpo de texto): 300, 400, 500, 600, 700, 800
- Oswald (display): 400, 500, 600, 700
- Font-display: swap (FOIT prevention)

**Estilos Globais**
- CSS Reset (margin, padding, box-sizing)
- Scroll suave (smooth scrolling)
- Overflow-x hidden (previne scroll horizontal)
- Antialiasing

**Acessibilidade**
- `lang="pt-BR"` no HTML
- Semantic HTML5

#### Código Completo

```astro
---
interface Props {
  title: string;
  description?: string;
}

const {
  title,
  description = "Serralheria Industrial e Artística com 30 anos de experiência"
} = Astro.props;
---

<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta name="generator" content={Astro.generator} />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <title>{title}</title>
  </head>
  <body class="font-sans bg-charcoal text-gray-100 antialiased">
    <slot />
  </body>
</html>

<style is:global>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }
</style>
```

---

## Componentes Astro

### WorksGallery.astro

**Caminho**: `src/components/WorksGallery.astro`

**Propósito**: Galeria responsiva de trabalhos/projetos em layout Masonry Grid com efeitos de hover.

#### Props

Nenhuma (dados são definidos internamente).

#### Estrutura de Dados

```typescript
interface Work {
  image: string;      // Caminho para imagem (relativo a /public)
  title: string;      // Título do projeto
  category: string;   // Categoria (ex: "Portões", "Estruturas")
}

const works: Work[] = [
  {
    image: '/images/placeholder-1.jpg',
    title: 'Portão Industrial',
    category: 'Portões'
  },
  // ...
];
```

#### Uso

```astro
---
import WorksGallery from '../components/WorksGallery.astro';
---

<WorksGallery />
```

#### Características

**Layout Masonry**
- Grid responsivo com alturas variadas
- 3 colunas em desktop
- 2 colunas em tablet
- 1 coluna em mobile
- Padrão de altura: 1-2-1 rows span

**Hover Effects**
- Overlay gradient (preto com transparência)
- Zoom na imagem (scale 1.1)
- Transições suaves (300ms)

**Responsividade**
```css
Desktop (>768px):   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
Mobile (<768px):    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
```

**Acessibilidade**
- Semantic HTML (section, h2, h3)
- Alt text em imagens (title usado como alt)

#### Código CSS (Masonry Logic)

```css
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  grid-auto-rows: 250px;
}

/* Padrão de altura variada */
.masonry-item:nth-child(3n + 1) {
  grid-row: span 1;  /* Item 1, 4, 7, ... */
}

.masonry-item:nth-child(3n + 2) {
  grid-row: span 2;  /* Item 2, 5, 8, ... (destaque) */
}

.masonry-item:nth-child(3n + 3) {
  grid-row: span 1;  /* Item 3, 6, 9, ... */
}
```

#### Customização

Para adicionar novos projetos:

```astro
---
const works: Work[] = [
  {
    image: '/images/novo-projeto.jpg',
    title: 'Estrutura Metálica X',
    category: 'Estruturas'
  },
  // ... projetos existentes
];
---
```

Passos:
1. Adicionar imagem em `public/images/`
2. Adicionar objeto ao array `works`
3. Rebuild (`npm run build`)

---

## Componentes React

### WhatsAppButton.tsx

**Caminho**: `src/components/WhatsAppButton.tsx`

**Propósito**: Botão flutuante fixo para contato direto via WhatsApp com tooltip interativo.

#### Props

```typescript
interface WhatsAppButtonProps {
  phoneNumber: string;    // Número no formato internacional (ex: "5527999678125")
  message?: string;       // Mensagem pré-preenchida (opcional)
}
```

**Defaults**:
- `message`: `"Olá! Gostaria de solicitar um orçamento."`

#### Uso

```astro
---
import WhatsAppButton from '../components/WhatsAppButton';
---

<!-- Hidratação imediata (client:load) -->
<WhatsAppButton
  client:load
  phoneNumber="5527999678125"
  message="Olá! Vi o site e gostaria de um orçamento."
/>
```

#### Características

**Posicionamento**
- `position: fixed` (sempre visível)
- `bottom: 1.5rem` (24px)
- `right: 1.5rem` (24px)
- `z-index: 50` (acima de outros elementos)

**Interatividade**
- Hover: mostra tooltip "Fale conosco!"
- Click: abre WhatsApp em nova aba
- URL format: `https://wa.me/{phoneNumber}?text={encodedMessage}`

**Animações**
- Flutuação contínua (keyframe `float`, 3s loop)
- Hover: scale 1.1 (aumenta 10%)
- Ícone rotaciona 12° no hover

**Estados**
```typescript
const [isHovered, setIsHovered] = useState(false);
```
- `isHovered: true` → Exibe tooltip
- `isHovered: false` → Esconde tooltip

**Acessibilidade**
- `aria-label="Contato via WhatsApp"`
- Button semântico (não div)
- Tooltip com posicionamento absoluto

#### Código Completo

```tsx
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = 'Olá! Gostaria de solicitar um orçamento.'
}: WhatsAppButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float group"
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle size={32} className="transition-transform group-hover:rotate-12" />

            {isHovered && (
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
                    Fale conosco!
                </span>
            )}
        </button>
    );
}
```

#### Tailwind Classes Breakdown

```css
/* Container */
fixed           → position: fixed
bottom-6        → bottom: 1.5rem
right-6         → right: 1.5rem
z-50            → z-index: 50

/* Aparência */
bg-green-500    → background-color: #10b981
rounded-full    → border-radius: 9999px (círculo)
p-4             → padding: 1rem
shadow-2xl      → box-shadow: grande

/* Hover */
hover:bg-green-600  → background fica mais escuro
hover:scale-110     → transform: scale(1.1)

/* Animações */
animate-float       → Animação customizada (definida em tailwind.config)
transition-all      → Transição suave em todas propriedades
duration-300        → 300ms de duração

/* Grupo (para hover do ícone) */
group               → Contexto para child hover
```

#### Customização

**Trocar Ícone**:
```tsx
import { Phone } from 'lucide-react';  // Trocar MessageCircle por Phone

<Phone size={32} ... />
```

**Posicionamento Diferente**:
```tsx
// Bottom-left
className="fixed bottom-6 left-6 ..."

// Top-right
className="fixed top-6 right-6 ..."
```

**Cores Customizadas**:
```tsx
// Trocar verde por outra cor
className="... bg-orange-500 hover:bg-orange-600 ..."
```

---

## Páginas

### index.astro

**Caminho**: `src/pages/index.astro`

**Propósito**: Página inicial (homepage) do site, contendo todas as seções principais.

#### Estrutura

A página está dividida em 5 seções principais:

1. **Navbar** (Navegação fixa)
2. **Hero Section** (Seção principal com vídeo)
3. **Projetos Section** (Galeria de trabalhos)
4. **Footer** (Rodapé com informações e mapa)
5. **WhatsApp Button** (Botão flutuante)

---

### 1. Navbar

**Características**:
- Posição fixa no topo (`fixed top-0`)
- Background blur para glassmorphism
- Sticky ao scroll
- Responsivo (menu mobile escondido)

**Estrutura**:
```html
<nav class="fixed w-full z-50 top-0 border-b backdrop-blur-md">
  <Logo />
  <Navigation Links /> (Desktop only)
  <CTA Button />
</nav>
```

**Classes Principais**:
```css
fixed           → Fixo no viewport
w-full          → Largura 100%
z-50            → Acima de outros elementos
backdrop-blur   → Efeito glassmorphism
border-b        → Borda inferior
```

**Links de Navegação**:
```html
<a href="#servicos">Serviços</a>
<a href="#projetos">Projetos Recentes</a>
<a href="#sobre">A Oficina</a>
```

---

### 2. Hero Section

**Características**:
- Altura total da viewport (`h-screen`)
- Vídeo de background com overlay
- Texto centralizado com gradientes
- CTAs (Call-to-Actions)

**Estrutura**:
```html
<section class="relative h-screen">
  <Video Background />
  <Gradient Overlay />
  <Content (z-10) />
</section>
```

**Vídeo Background**:
```html
<video autoplay loop muted playsinline>
  <source src="https://cdn.pixabay.com/..." type="video/mp4">
</video>
```

**Atributos do Vídeo**:
- `autoplay`: Inicia automaticamente
- `loop`: Loop infinito
- `muted`: Sem som (permite autoplay)
- `playsinline`: Não fullscreen no iOS
- `opacity-40`: 40% de opacidade

**Gradient Overlay**:
```css
bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent
```
- De baixo para cima
- Preto sólido → Preto 70% → Transparente

**Badge "Desde 1994"**:
```html
<span class="inline-block py-1 px-3 border rounded-full">
  Desde 1994
</span>
```

**Título Principal**:
```html
<h1 class="text-8xl font-extrabold">
  Serralheria de <br/>
  <span class="bg-gradient-to-r from-orange-500 to-yellow-500">
    Alto Padrão.
  </span>
</h1>
```

**Gradient Text**:
```css
text-transparent        → Texto transparente
bg-clip-text           → Gradient aplicado ao texto
bg-gradient-to-r       → Gradiente da esquerda para direita
from-orange-500        → Laranja início
to-yellow-500          → Amarelo fim
```

**CTAs**:
```html
<!-- Primário (Orange) -->
<a href="#projetos" class="bg-orange-600 hover:bg-orange-700">
  Ver Portfólio
</a>

<!-- Secundário (Outline) -->
<a href="https://wa.me/..." class="border border-white/20 hover:bg-white/5">
  Solicitar Orçamento
</a>
```

---

### 3. Projetos Section

**Características**:
- Grid de 3 colunas (responsivo)
- Cards com hover overlay
- Imagens do Unsplash (placeholder)

**Estrutura**:
```html
<section id="projetos" class="py-24">
  <Header />
  <Grid de Cards />
</section>
```

**Grid**:
```css
grid-cols-1           → 1 coluna (mobile)
md:grid-cols-2        → 2 colunas (tablet)
lg:grid-cols-3        → 3 colunas (desktop)
gap-6                 → Espaçamento 1.5rem
```

**Card Structure**:
```html
<div class="group relative aspect-square">
  <img class="group-hover:scale-110" />

  <div class="overlay opacity-0 group-hover:opacity-100">
    <p class="category">Estrutural</p>
    <h3 class="title">Galpão Industrial</h3>
  </div>
</div>
```

**Hover Effect**:
```css
/* Imagem */
group-hover:scale-110     → Zoom 110%
transition-transform      → Transição suave
duration-700              → 700ms

/* Overlay */
opacity-0                     → Invisível por padrão
group-hover:opacity-100       → Visível no hover
transition-opacity            → Fade in/out
```

**Unsplash URLs**:
```
https://images.unsplash.com/photo-{id}?q=80&w=1000&auto=format&fit=crop
```

Parâmetros:
- `q=80`: Qualidade 80%
- `w=1000`: Largura 1000px
- `auto=format`: WebP se suportado
- `fit=crop`: Crop inteligente

---

### 4. Footer

**Características**:
- Grid 2 colunas (desktop) → 1 coluna (mobile)
- Informações de contato
- Google Maps embed
- Links sociais

**Estrutura**:
```html
<footer class="bg-black py-12 border-t">
  <div class="grid md:grid-cols-2 gap-12">
    <Info Column />
    <Map Column />
  </div>
</footer>
```

**Info Column**:
```html
<div>
  <h4>Serralheria da Ilha</h4>
  <p>Descrição</p>

  <div class="contact-info">
    <p>📍 Endereço</p>
    <p>📞 Telefone</p>
  </div>

  <div class="social-links">
    <a href="https://wa.me/...">WHATSAPP</a>
    <a href="#">INSTAGRAM</a>
  </div>
</div>
```

**Google Maps Iframe**:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="100%"
  class="grayscale hover:grayscale-0"
/>
```

**Grayscale Effect**:
```css
grayscale              → Preto e branco
hover:grayscale-0      → Colorido no hover
transition-all         → Transição suave
```

---

### 5. WhatsApp Float Button

**Standalone Implementation** (não usa componente React):

```html
<a
  href="https://wa.me/SEUNUMERO?text=..."
  target="_blank"
  class="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 p-4 rounded-full shadow-lg"
>
  <svg>...</svg>  <!-- Ícone WhatsApp -->
</a>
```

**Características**:
- Link direto (não requer JavaScript)
- Ícone SVG inline (sem dependências)
- Mensagem pré-preenchida via query param
- Opens in new tab (`target="_blank"`)

**URL Structure**:
```
https://wa.me/5527999678125?text=Ol%C3%A1%2C+vi+o+site...
                         ↑
                         URL-encoded message
```

---

## Árvore de Componentes

```
index.astro (Página)
│
├─ Navbar (inline)
│  ├─ Logo
│  ├─ Navigation Links
│  └─ CTA Button
│
├─ Hero Section (inline)
│  ├─ Video Background
│  ├─ Gradient Overlay
│  └─ Content
│     ├─ Badge
│     ├─ Title (gradient)
│     ├─ Description
│     └─ CTAs
│
├─ Projetos Section (inline)
│  ├─ Header
│  └─ Grid
│     └─ Cards (3x)
│        ├─ Image
│        └─ Overlay
│
├─ Footer (inline)
│  ├─ Info Column
│  │  ├─ Title
│  │  ├─ Description
│  │  ├─ Contact Info
│  │  └─ Social Links
│  └─ Map Column
│     └─ Google Maps Iframe
│
└─ WhatsApp Float Button (inline SVG)
```

---

## Guia de Customização

### Trocar Número do WhatsApp

**Arquivos afetados**:
- `src/pages/index.astro` (linhas 29, 67, 142)

**Formato**: `5527999999999` (DDI + DDD + Número)

```astro
<!-- Buscar e substituir SEUNUMERO -->
<a href="https://wa.me/5527999678125">
```

### Adicionar Novo Componente

1. **Criar arquivo**:
```bash
# Astro component
touch src/components/NovoComponente.astro

# React component
touch src/components/NovoComponente.tsx
```

2. **Estrutura básica**:
```astro
---
// src/components/NovoComponente.astro
interface Props {
  titulo: string;
}

const { titulo } = Astro.props;
---

<div class="componente">
  <h2>{titulo}</h2>
</div>

<style>
  .componente {
    /* Estilos escopados */
  }
</style>
```

3. **Importar e usar**:
```astro
---
import NovoComponente from '../components/NovoComponente.astro';
---

<NovoComponente titulo="Olá Mundo" />
```

### Adicionar Nova Página

1. **Criar arquivo em `src/pages/`**:
```bash
touch src/pages/sobre.astro
```

2. **Estrutura**:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Sobre Nós">
  <main>
    <h1>Sobre a Serralheria da Ilha</h1>
  </main>
</Layout>
```

3. **Acessar**: `http://localhost:4321/sobre`

---

## Performance

### Bundle Size por Componente

| Componente | HTML | CSS | JS | Total |
|------------|------|-----|----|-------|
| Layout | 2KB | 1KB | 0KB | 3KB |
| WorksGallery | 3KB | 2KB | 0KB | 5KB |
| WhatsAppButton | 1KB | 1KB | 8KB | 10KB |
| index.astro | 8KB | 8KB | 0KB | 16KB |

**Total First Load**: ~34KB (gzipped)

### Otimizações

- **Astro Components**: Pré-renderizados, zero JS
- **React Components**: Hidratação parcial apenas WhatsAppButton
- **CSS**: Tailwind purge + minificação
- **Images**: Lazy loading + CDN (Unsplash)
- **Fonts**: Preconnect + display=swap

---

## Troubleshooting

### Componente não aparece

```bash
# 1. Verifique import
import Component from '../components/Component.astro';

# 2. Verifique path relativo
# src/pages/index.astro → src/components/X.astro = ../components/X.astro
# src/pages/blog/post.astro → src/components/X.astro = ../../components/X.astro

# 3. Restart dev server
Ctrl+C
npm run dev
```

### Estilos não aplicados

```bash
# Limpar cache Astro
rm -rf .astro

# Restart dev server
npm run dev
```

### React component não hidrata

```astro
<!-- Verificar client directive -->
<Component client:load />  <!-- ✓ Correto -->
<Component />              <!-- ✗ Não hidrata -->
```

---

## Testes

### Testar Componente Isolado

```bash
# 1. Criar página de teste
touch src/pages/test-component.astro

# 2. Importar componente
---
import Component from '../components/Component.astro';
---

<Component prop="valor" />

# 3. Acessar /test-component
```

### Validação

```bash
# TypeScript check
npx tsc --noEmit

# Astro check
npx astro check

# Build test
npm run build
```

---

## Recursos Adicionais

- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)
- [React in Astro](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Tailwind with Astro](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

---

Documentação criada para o projeto Serralheria da Ilha.
Última atualização: Janeiro 2026
