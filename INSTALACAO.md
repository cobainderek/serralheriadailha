# 🚀 Guia Rápido de Instalação

## ⚠️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/
   - Verifique: `node --version`

2. **npm** (geralmente vem com Node.js)
   - Verifique: `npm --version`

---

## 📦 Passo 1: Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Isso irá instalar:
- Astro
- Tailwind CSS
- React
- Lucide Icons
- Todas as dependências necessárias

⏱️ Aguarde alguns minutos enquanto as dependências são baixadas.

---

## ⚙️ Passo 2: Configurar WhatsApp e Google Maps

### 2.1 Configurar Número do WhatsApp

Abra o arquivo `src/pages/index.astro` e na **linha 7** substitua:

```typescript
const whatsappNumber = '5548999999999'; // ← COLOQUE SEU NÚMERO AQUI
```

**Formato**: `DDI + DDD + Número` (sem espaços, traços ou parênteses)
**Exemplo**: `5511987654321` para São Paulo

### 2.2 Configurar Google Maps

Na **linha 8** do mesmo arquivo:

```typescript
const googleMapsLink = 'https://maps.google.com/?q=Sua+Localizacao'; // ← SEU LINK AQUI
```

Para obter o link:
1. Abra Google Maps
2. Encontre sua localização
3. Clique em "Compartilhar"
4. Copie o link

---

## 🖼️ Passo 3: Adicionar Suas Imagens

### 3.1 Adicionar Fotos dos Trabalhos

1. Coloque suas fotos na pasta: `public/images/`
2. Abra o arquivo `src/components/WorksGallery.astro`
3. Na **linha 9-17**, substitua o array `works`:

```typescript
const works: Work[] = [
  { 
    image: '/images/portao-industrial.jpg',  // Nome da sua imagem
    title: 'Portão Industrial', 
    category: 'Portões' 
  },
  { 
    image: '/images/estrutura-metalica.jpg', 
    title: 'Estrutura Metálica', 
    category: 'Estruturas' 
  },
  // ... adicione quantas imagens quiser
];
```

💡 **Dica**: Use imagens otimizadas (JPG/WebP) de até 500KB para melhor performance.

### 3.2 Incorporar Google Maps (Opcional)

Abra `src/pages/index.astro` e encontre a **linha ~165**:

```html
<div class="aspect-video bg-industrial-gray flex items-center justify-center">
  <!-- Substitua este div pelo iframe do Google Maps -->
  <iframe 
    src="SEU_LINK_EMBED_DO_GOOGLE_MAPS"
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
  </iframe>
</div>
```

Para obter o embed:
1. Google Maps → Sua localização
2. Compartilhar → "Incorporar um mapa"
3. Copiar HTML
4. Cole no lugar do comentário

---

## ▶️ Passo 4: Executar o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

✅ O site abrirá em: `http://localhost:4321`

Você verá algo como:
```
🚀 astro v4.0.0 started in 234ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

### Modo Produção (Build)

Quando estiver pronto para publicar:

```bash
npm run build
```

Os arquivos otimizados estarão em: `dist/`

Para testar o build:

```bash
npm run preview
```

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Número do WhatsApp configurado corretamente
- [ ] Link do Google Maps funcionando
- [ ] Imagens dos trabalhos adicionadas
- [ ] Testou todos os botões de WhatsApp
- [ ] Site visualizado em mobile e desktop
- [ ] Build de produção executado sem erros

---

## 🆘 Problemas Comuns

### "npx não é reconhecido"
- **Solução**: Instale o Node.js primeiro

### "npm install" falha
- **Solução**: Execute como administrador ou verifique conexão

### Imagens não aparecem
- **Solução**: Certifique-se de que estão em `public/images/` e o caminho começa com `/images/`

### WhatsApp não abre
- **Solução**: Verifique o formato do número (sem espaços ou caracteres especiais)

---

## 📞 Estrutura de Arquivos Importantes

```
📁 serralheria_da_ilha/
├── 📁 src/
│   ├── 📁 pages/
│   │   └── 📄 index.astro          ← Configure WhatsApp aqui (linha 7-8)
│   └── 📁 components/
│       └── 📄 WorksGallery.astro   ← Adicione imagens aqui (linha 9-17)
├── 📁 public/
│   └── 📁 images/                  ← Coloque suas fotos aqui
└── 📄 package.json
```

---

## 🎉 Pronto!

Seu site está configurado e rodando!

**Próximos passos**:
1. Personalize textos se necessário
2. Teste em diferentes dispositivos
3. Publique em um servidor (Netlify, Vercel, etc.)

**Dúvidas?** Consulte o [README.md](file:///c:/Users/Cobain/Documents/Dev/serralheria_da_ilha/README.md) ou [walkthrough.md](file:///C:/Users/Cobain/.gemini/antigravity/brain/026ad6eb-70b6-44f4-9e6f-8c658d347b1d/walkthrough.md)
