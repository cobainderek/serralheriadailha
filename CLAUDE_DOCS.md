# 🔧 Serralheria da Ilha - Documentação para Manutenção (Claude AI)

## 📋 Visão Geral do Projeto
Landing page institucional de alta performance para **Serralheria da Ilha**, a melhor serralheria do Espírito Santo.

### Stack Tecnológica
- **Framework**: Astro 5 (SSG - Static Site Generation)
- **UI Components**: React 18 (Islands Architecture)
- **Styling**: Tailwind CSS 3.4 + CSS customizado
- **Language**: TypeScript
- **Icons**: lucide-react
- **Fonts**: Google Fonts (Inter + Oswald)

### Arquitetura
- **SSG (Static Site Generation)**: Build-time rendering para performance máxima
- **Partial Hydration (Islands)**: Apenas componentes interativos são hidratados no client
- **Single Page**: Uma única página com múltiplas seções

---

## 🗂️ Estrutura de Arquivos

```
serralheria_da_ilha/
├── src/
│   ├── components/
│   │   ├── WhatsAppButton.tsx      # Botão flutuante WhatsApp (React, client:load)
│   │   └── WorksGallery.astro      # Galeria de projetos Masonry (Astro, static)
│   ├── layouts/
│   │   └── Layout.astro            # Layout base (HTML, Head, SEO, Fonts)
│   └── pages/
│       └── index.astro             # Página principal (Hero, Sobre, Serviços, Galeria, Footer)
├── public/
│   ├── images/                     # Imagens dos projetos
│   └── welder-bg.gif               # GIF animado do Hero
├── tailwind.config.mjs             # Configuração Tailwind (cores customizadas)
├── astro.config.mjs                # Configuração Astro
├── package.json                    # Dependencies
└── PROJECT_CONTEXT.md              # Contexto técnico resumido
```

---

## 🎨 Design System

### Paleta de Cores (Tailwind Custom)
```javascript
// tailwind.config.mjs
colors: {
  'industrial-gray': '#2C3E50',
  'safety-orange': '#E67E22',
  'charcoal': '#1A1A1A',
}
```

### Tipografia
- **Títulos**: `Oswald` (Google Fonts) - Bold, industrial
- **Corpo**: `Inter` (Google Fonts) - Clean, legível

### Estilo Visual
- **Dark Theme**: Fundo escuro (#0a0a0a) com elementos em charcoal
- **Glassmorphism**: Cards com backdrop-blur e transparência
- **Gradientes**: Laranja para amarelo em CTAs e destaques
- **Animações**: Hover effects, fade-ins, scroll animations

---

## 🔧 Componentes Principais

### 1. Layout.astro
**Localização**: `src/layouts/Layout.astro`

**Responsabilidades**:
- HTML base structure
- SEO metadata (title, description, Open Graph)
- Google Fonts preconnect e import
- Global styles
- Favicon

**Props**:
```typescript
interface Props {
  title: string;
}
```

### 2. index.astro (Página Principal)
**Localização**: `src/pages/index.astro`

**Seções**:
1. **Hero**: Título principal, subtítulo, CTA, GIF de fundo
2. **Sobre**: História da empresa (30 anos de tradição)
3. **Serviços**: Grid de serviços oferecidos
4. **Galeria**: Componente WorksGallery
5. **Footer**: Informações de contato e links sociais

**Variáveis de Contato** (editar aqui para atualizar):
```typescript
const phoneNumber = "5527999999999"; // WhatsApp
const instagramUrl = "https://instagram.com/serralheria_da_ilha";
```

### 3. WorksGallery.astro
**Localização**: `src/components/WorksGallery.astro`

**Funcionalidade**:
- Grid Masonry responsivo
- Modal para visualização de imagens
- Scroll infinito automático
- Categorias de projetos

**Como adicionar novos projetos**:
```typescript
const works = [
  {
    image: '/images/nome-da-imagem.jpg',
    title: 'Nome do Projeto',
    category: 'Categoria'
  },
  // Adicionar mais aqui
];
```

**Categorias disponíveis**:
- Portões
- Grades
- Estruturas
- Corrimãos
- Coberturas
- Esquadrias

### 4. WhatsAppButton.tsx
**Localização**: `src/components/WhatsAppButton.tsx`

**Funcionalidade**:
- Botão flutuante fixo no canto inferior direito
- Tooltip com mensagem
- Link direto para WhatsApp
- Animação de pulse

**Hydration**: `client:load` (carrega JavaScript no client)

---

## 🛠️ Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (localhost:4321)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 📝 Guia de Manutenção

### Atualizar Informações de Contato
**Arquivo**: `src/pages/index.astro`

1. Editar variáveis no topo do arquivo:
```typescript
const phoneNumber = "5527999999999";
const instagramUrl = "https://instagram.com/...";
const email = "contato@serralheria.com";
```

2. Verificar seção Footer para links adicionais

### Adicionar Novos Projetos à Galeria
**Arquivo**: `src/components/WorksGallery.astro`

1. Adicionar imagem em `public/images/`
2. Atualizar array `works`:
```typescript
const works = [
  // ... projetos existentes
  {
    image: '/images/novo-projeto.jpg',
    title: 'Novo Projeto',
    category: 'Portões'
  }
];
```

### Modificar Cores do Site
**Arquivo**: `tailwind.config.mjs`

```javascript
theme: {
  extend: {
    colors: {
      'industrial-gray': '#2C3E50',  // Cinza principal
      'safety-orange': '#E67E22',    // Laranja destaque
      'charcoal': '#1A1A1A',         // Preto suave
    }
  }
}
```

### Alterar Textos da Página
**Arquivo**: `src/pages/index.astro`

- **Hero**: Buscar por "30 ANOS DE TRADIÇÃO"
- **Sobre**: Buscar por "Sobre Nós"
- **Serviços**: Buscar por "Nossos Serviços"
- **Footer**: Buscar por "Serralheria da Ilha"

### Trocar Fontes
**Arquivo**: `src/layouts/Layout.astro`

1. Atualizar link do Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Nova+Fonte&display=swap" rel="stylesheet">
```

2. Atualizar `tailwind.config.mjs`:
```javascript
fontFamily: {
  sans: ['Nova Fonte', 'sans-serif'],
}
```

---

## 🐛 Troubleshooting

### Build falha
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json .astro
npm install
npm run build
```

### Imagens não aparecem
- Verificar se estão em `public/images/`
- Usar caminho absoluto: `/images/foto.jpg`
- Não usar `./` ou `../`

### Componente React não funciona
- Verificar diretiva `client:load` no import
- Exemplo: `<WhatsAppButton client:load />`

### Estilos Tailwind não aplicam
- Verificar se classe existe no `tailwind.config.mjs`
- Rodar `npm run dev` novamente
- Limpar cache: `rm -rf .astro`

---

## 🚀 Performance

### Otimizações Implementadas
- ✅ SSG (Static Site Generation)
- ✅ Partial Hydration (apenas WhatsAppButton)
- ✅ Google Fonts preconnect
- ✅ Imagens otimizadas (WebP quando possível)
- ✅ CSS minificado no build
- ✅ JavaScript mínimo (apenas componentes interativos)

### Métricas Esperadas
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 90+

---

## 📦 Dependências Principais

```json
{
  "astro": "^5.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "tailwindcss": "^3.4.0",
  "lucide-react": "latest"
}
```

---

## 🔐 SEO & Metadata

**Arquivo**: `src/layouts/Layout.astro`

```html
<title>Serralheria da Ilha - A Melhor do Espírito Santo</title>
<meta name="description" content="30 anos de tradição...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

---

## 📞 Informações de Contato (Hardcoded)

- **WhatsApp**: Definido em `src/pages/index.astro` (variável `phoneNumber`)
- **Instagram**: Definido em `src/pages/index.astro` (variável `instagramUrl`)
- **Email**: Definido no Footer

---

## 🎯 Próximas Melhorias Sugeridas

1. **CMS Integration**: Adicionar Strapi/Sanity para gerenciar projetos
2. **Blog**: Seção de notícias/projetos recentes
3. **Formulário de Contato**: Integração com EmailJS ou similar
4. **Analytics**: Google Analytics 4
5. **Internacionalização**: i18n para múltiplos idiomas
6. **PWA**: Service Worker para offline support

---

## 📄 Licença & Créditos

- **Desenvolvido para**: Serralheria da Ilha
- **Localização**: Espírito Santo, Brasil
- **Ano**: 2026

---

**Última atualização**: Janeiro 2026
**Versão**: 1.0.0
