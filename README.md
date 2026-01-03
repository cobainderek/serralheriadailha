# Serralheria da Ilha - Landing Page

Landing page de alta performance para serralheria industrial e artística.

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🚀 Instalação

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🎨 Personalização

### 1. Configurar WhatsApp e Google Maps

Edite o arquivo `src/pages/index.astro`:

```typescript
// Linha 7-8: Configure seu número do WhatsApp (formato: 5511999999999)
const whatsappNumber = '5548999999999'; // SUBSTITUA pelo seu número
const googleMapsLink = 'https://maps.google.com/?q=Sua+Localizacao'; // SUBSTITUA pelo seu link
```

### 2. Adicionar Imagens dos Trabalhos

No arquivo `src/components/WorksGallery.astro`, substitua o array `works`:

```typescript
const works: Work[] = [
  { image: '/images/portao-industrial.jpg', title: 'Portão Industrial', category: 'Portões' },
  { image: '/images/estrutura-metalica.jpg', title: 'Estrutura Metálica', category: 'Estruturas' },
  // ... adicione seus projetos
];
```

Coloque as imagens na pasta `public/images/`

### 3. Incorporar Google Maps

No arquivo `src/pages/index.astro`, encontre a seção do Google Maps (linha ~180) e substitua:

```html
<div class="aspect-video bg-industrial-gray flex items-center justify-center">
  <iframe 
    src="SEU_LINK_DE_EMBED_DO_GOOGLE_MAPS"
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
  </iframe>
</div>
```

## 🎨 Paleta de Cores

- **Cinza Chumbo**: `#3A3A3C`
- **Charcoal**: `#2C2C2E`
- **Azul Petróleo**: `#1C4E5A`
- **Laranja Segurança**: `#FF6B35`
- **Dourado**: `#D4AF37`
- **Aço**: `#71797E`

## 📁 Estrutura do Projeto

```
serralheria_da_ilha/
├── src/
│   ├── components/
│   │   ├── WhatsAppButton.tsx      # Botão flutuante do WhatsApp
│   │   └── WorksGallery.astro      # Galeria de trabalhos (Masonry Grid)
│   ├── layouts/
│   │   └── Layout.astro            # Layout principal
│   └── pages/
│       └── index.astro             # Página principal
├── public/
│   └── images/                     # Coloque suas imagens aqui
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Tecnologias

- **Astro** - Framework estático ultrarrápido
- **Tailwind CSS** - Estilização utility-first
- **React** - Para componentes interativos
- **Lucide React** - Ícones modernos
- **TypeScript** - Type safety

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## ⚡ Performance

- Otimizado para Core Web Vitals
- Lazy loading de imagens
- CSS inline automático
- Build estático (SSG)

## 📞 Suporte

Para dúvidas sobre personalização, consulte a [documentação do Astro](https://docs.astro.build).
