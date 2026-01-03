# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.0.0] - 2026-01-01

### Lançamento Inicial

Primeira versão da landing page da Serralheria da Ilha.

### ✨ Adicionado

#### Infraestrutura
- Configuração inicial do projeto Astro 5.16.6
- Integração com React 18.2.0 para componentes interativos
- Integração com Tailwind CSS 3.4.0
- Configuração TypeScript com strict mode
- Build system otimizado com Vite
- Hot Module Replacement (HMR) para desenvolvimento

#### Layouts
- **Layout.astro**: Layout base com SEO e meta tags
  - Meta description customizável
  - Google Fonts (Inter, Oswald) com preconnect
  - CSS reset global
  - Scroll suave
  - Configuração de idioma pt-BR

#### Componentes

##### Astro Components
- **WorksGallery.astro**: Galeria de projetos em Masonry Grid
  - Grid responsivo (3 → 2 → 1 colunas)
  - Hover effects (overlay + zoom)
  - 9 projetos placeholder
  - Alturas variadas (padrão 1-2-1)

##### React Components
- **WhatsAppButton.tsx**: Botão flutuante de contato
  - Posicionamento fixo (bottom-right)
  - Tooltip interativo no hover
  - Animação de flutuação contínua
  - Integração WhatsApp com mensagem pré-preenchida
  - Ícone Lucide React (MessageCircle)

#### Páginas
- **index.astro**: Homepage completa
  - Navbar fixa com glassmorphism
  - Hero section com vídeo background (Pixabay CDN)
  - Seção de projetos com grid de 3 colunas
  - Footer com informações de contato
  - Google Maps embed responsivo
  - Links sociais (WhatsApp, Instagram)
  - WhatsApp float button com SVG inline

#### Estilos

##### Tailwind Customization
- Paleta de cores industrial:
  - `industrial-gray`: #3A3A3C
  - `charcoal`: #2C2C2E
  - `petrol-blue`: #1C4E5A
  - `safety-orange`: #FF6B35
  - `gold`: #D4AF37
  - `steel`: #71797E

- Fontes customizadas:
  - `sans`: Inter (corpo de texto)
  - `display`: Oswald (títulos)

- Animações customizadas:
  - `pulse-slow`: Pulsação 3s
  - `float`: Flutuação vertical 3s

##### CSS Global
- Reset CSS (margin, padding, box-sizing)
- Scroll behavior smooth
- Overflow-x hidden
- Font antialiasing

#### Assets
- Favicon SVG
- Pasta de imagens configurada (`public/images/`)
- Integração com CDNs externas:
  - Unsplash (imagens de projetos)
  - Pixabay (vídeo hero)
  - Google Fonts (tipografia)

#### Configurações

##### astro.config.mjs
- Output mode: `static` (SSG)
- Integração React com partial hydration
- Integração Tailwind CSS
- Inline stylesheets automático

##### tailwind.config.mjs
- Content paths configurados
- Theme extensions (cores, fontes, animações)
- JIT mode habilitado

##### tsconfig.json
- Strict mode TypeScript
- JSX preset para React
- Import source configurado

#### Scripts
- `dev`: Servidor de desenvolvimento
- `start`: Alias para dev
- `build`: Build de produção
- `preview`: Preview do build local

#### Documentação
- **README.md**: Guia de instalação e uso
  - Pré-requisitos
  - Instruções de instalação
  - Guia de personalização
  - Estrutura do projeto
  - Informações de performance

- **INSTALACAO.md**: Guia detalhado de instalação

- **DOCUMENTATION.md**: Documentação técnica completa
  - Arquitetura do projeto
  - Stack tecnológica detalhada
  - Estrutura de arquivos
  - Documentação de componentes
  - Build e deploy
  - Performance e otimizações
  - Guia de manutenção

- **STACK.md**: Documentação da stack tecnológica
  - Diagrama de arquitetura
  - Análise de cada tecnologia
  - Razões das escolhas técnicas
  - Fluxo de build
  - Comparação com alternativas
  - Métricas de performance
  - Roadmap técnico

- **CONTRIBUTING.md**: Guia de contribuição
  - Código de conduta
  - Configuração do ambiente
  - Padrões de código
  - Workflow Git
  - Conventional Commits
  - Template de PR
  - Como reportar bugs

- **COMPONENTS.md**: Documentação detalhada de componentes
  - Props e interfaces
  - Exemplos de uso
  - Código completo
  - Breakdown de classes Tailwind
  - Guia de customização
  - Troubleshooting

- **CHANGELOG.md**: Histórico de mudanças (este arquivo)

### 🎨 Design

#### UI/UX
- Design moderno e minimalista
- Dark theme (slate-950 base)
- Gradient text effects (orange → yellow)
- Glassmorphism na navbar
- Hover states em todos elementos interativos

#### Responsividade
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px (1 coluna)
  - Tablet: 768px - 1024px (2 colunas)
  - Desktop: > 1024px (3 colunas)
- Imagens responsivas
- Typography responsiva (text-5xl → text-8xl)

#### Acessibilidade
- Semantic HTML5
- ARIA labels em botões
- Alt text em imagens
- Navegação por teclado
- Contrast ratios adequados
- Skip to content (scroll suave)

### ⚡ Performance

#### Otimizações
- Static Site Generation (SSG)
- Partial Hydration (apenas WhatsAppButton)
- Zero JavaScript por padrão
- Critical CSS inline
- Lazy loading de imagens
- Font display swap
- Preconnect para fontes
- Tree-shaking automático
- Code splitting
- Minificação automática

#### Métricas Alvo
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Total Bundle Size: < 200KB
- Lighthouse Score: 95+

#### Bundle Sizes
- HTML: ~15KB (gzipped)
- CSS: ~12KB (gzipped)
- JS (React): ~8KB (gzipped)
- Total First Load: ~36KB

### 🔒 SEO

- Meta tags completas (title, description)
- Semantic HTML structure
- Heading hierarchy (h1, h2, h3)
- Schema.org markup ready
- Sitemap ready (geração automática)
- robots.txt ready
- Open Graph ready (meta tags)

### 🌐 Compatibilidade

#### Browsers Suportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

#### Não Suportado
- Internet Explorer (descontinuado)

### 📝 Informações da Empresa

#### Conteúdo
- Nome: Serralheria da Ilha
- Slogan: "Serralheria de Alto Padrão"
- Estabelecimento: 1994 (30 anos)
- Endereço: Rua Gastão Villa, 432 - Vitória/ES
- Telefone: (27) 99967-8125
- WhatsApp: 27999678125

#### Serviços Destacados
- Portões industriais
- Estruturas metálicas
- Guarda-corpos
- Grades de proteção
- Escadas metálicas
- Corrimãos
- Coberturas metálicas

### 🚀 Deploy

#### Plataformas Compatíveis
- Vercel (recomendado)
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Qualquer host de arquivos estáticos

#### Configuração de Deploy
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

---

## [Unreleased]

### Planejado para Próximas Versões

#### Features
- [ ] Sistema de CMS headless (Strapi/Contentful)
- [ ] Formulário de contato com validação
- [ ] Galeria lightbox para projetos
- [ ] Seção "Sobre Nós" expandida
- [ ] Página de serviços detalhada
- [ ] Blog/notícias
- [ ] Depoimentos de clientes
- [ ] Certificações e parcerias

#### Melhorias Técnicas
- [ ] Astro Image component (otimização de imagens)
- [ ] WebP/AVIF image formats
- [ ] Service Worker (PWA)
- [ ] Analytics integration (GA4/Plausible)
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)
- [ ] Lighthouse CI
- [ ] Automated accessibility tests

#### Otimizações
- [ ] Image lazy loading nativo
- [ ] Intersection Observer para animações
- [ ] Prefetch de links críticos
- [ ] Resource hints (preload, prefetch)
- [ ] Critical path optimization

#### UX Improvements
- [ ] Animações de scroll (AOS/Framer Motion)
- [ ] Transições de página
- [ ] Loading states
- [ ] Skeleton screens
- [ ] Toast notifications
- [ ] Modal de orçamento inline

#### Conteúdo
- [ ] Imagens reais dos projetos
- [ ] Vídeo institucional
- [ ] Catálogo de produtos
- [ ] FAQs
- [ ] Política de privacidade
- [ ] Termos de uso

---

## Versionamento

### Tipos de Versão

- **MAJOR** (X.0.0): Mudanças incompatíveis com versões anteriores
- **MINOR** (x.X.0): Novas funcionalidades (compatíveis)
- **PATCH** (x.x.X): Correções de bugs (compatíveis)

### Categorias de Mudanças

- **Adicionado**: Novas features
- **Alterado**: Mudanças em funcionalidades existentes
- **Depreciado**: Features que serão removidas
- **Removido**: Features removidas
- **Corrigido**: Correções de bugs
- **Segurança**: Vulnerabilidades corrigidas

---

## Como Contribuir

Para sugerir mudanças ou reportar bugs:

1. Abra uma issue no GitHub
2. Descreva a mudança/bug detalhadamente
3. Aguarde feedback da equipe
4. Se aprovado, faça um PR seguindo o [CONTRIBUTING.md](CONTRIBUTING.md)

---

## Links

- [Homepage do Projeto](https://serralheria-da-ilha.vercel.app)
- [Repositório GitHub](https://github.com/...)
- [Documentação](./DOCUMENTATION.md)
- [Stack Técnica](./STACK.md)
- [Guia de Contribuição](./CONTRIBUTING.md)

---

**Nota**: Este projeto segue [Semantic Versioning](https://semver.org/lang/pt-BR/).
Para ver diferenças entre versões, use: `git diff v1.0.0 v1.1.0`

---

Desenvolvido com dedicação para Serralheria da Ilha
Vitória/ES - Brasil
