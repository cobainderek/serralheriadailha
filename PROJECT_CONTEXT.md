# Serralheria da Ilha - Contexto Técnico

## Visão Geral
Landing page institucional de alta performance (SSG) para serralheria.
- **Stack**: Astro 5, React 18, Tailwind CSS 3.4, TypeScript.
- **Arquitetura**: Static Site Generation (SSG) com Partial Hydration (Islands).
- **Estilo**: Dark theme industrial, Glassmorphism, Tailwind customizado.

## Estrutura Principal
```
src/
├── components/
│   ├── WhatsAppButton.tsx  # Botão flutuante (React, client:load)
│   └── WorksGallery.astro  # Galeria Masonry (Astro, static)
├── layouts/
│   └── Layout.astro        # Layout base (HTML, Head, Fonts, Metadata)
└── pages/
    └── index.astro         # Página única (Hero, Sobre, Serviços, Footer)
public/
└── images/                 # Assets estáticos
```

## Comandos
- `npm run dev`: Servidor local (localhost:4321).
- `npm run build`: Gera build de produção em `dist/`.
- `npm run preview`: Visualiza o build localmente.

## Customização
### 1. Dados de Contato e Links
Editar `src/pages/index.astro`:
- Variáveis locais para telefone e links.
- Seção de Footer e Navbar.

### 2. Galeria de Projetos
Editar `src/components/WorksGallery.astro`:
- Adicionar imagens em `public/images/`.
- Atualizar array `works` no frontmatter do componente:
  ```typescript
  const works = [{ image: '/images/foto.jpg', title: '...', category: '...' }];
  ```

### 3. Cores e Estilos
Editar `tailwind.config.mjs`:
- Cores customizadas: `industrial-gray`, `safety-orange`, `charcoal`.
- Fontes: `Inter` (texto), `Oswald` (títulos).

## Detalhes Técnicos
- **WorksGallery**: Grid responsivo Masonry (loop css `nth-child` para spans variados).
- **WhatsAppButton**: Componente React hidratado (`client:load`) para interatividade e tooltip.
- **Fontes**: Google Fonts (otimizado com preconnect no Layout).
- **Icons**: `lucide-react`.
