# Marque Marcenaria — Site Institucional

Site institucional premium desenvolvido para a **Marque Marcenaria**, empresa especializada em marcenaria fina e móveis planejados sob medida em Fortaleza, CE.

---

## Estrutura de Arquivos

```
MARQUE MARCENARIA/
│
├── index.html          ← Página principal (landing page completa)
├── robots.txt          ← Diretivas para crawlers de busca
├── sitemap.xml         ← Mapa do site para SEO
│
└── assets/
    ├── css/
    │   └── style.css   ← Todos os estilos (sem dependências externas)
    │
    ├── js/
    │   └── main.js     ← Interações: menu, reveal, galeria, lightbox
    │
    ├── images/
    │   ├── hero/       ← Imagens da seção principal (hero panorâmico)
    │   ├── projects/   ← Fotos do portfólio
    │   ├── services/   ← Imagens dos ambientes/serviços
    │   ├── brand/      ← Logo, favicon e assets da marca
    │   └── icons/      ← Ícones SVG individuais, se necessário
    │
    └── fonts/          ← Fontes locais (se hospedagem offline)
```

---

## Como Abrir Localmente

**Opção 1 — Abrir direto no navegador (mais simples):**
1. Navegue até a pasta `MARQUE MARCENARIA`
2. Dê duplo clique em `index.html`
3. O site abrirá no seu navegador padrão

> ⚠️ Algumas funcionalidades (fontes do Google, imagens via CDN) requerem conexão com a internet para carregar corretamente.

**Opção 2 — Servidor local (recomendado para desenvolvimento):**

Se tiver Python instalado:
```bash
# No Windows (PowerShell), dentro da pasta do projeto:
python -m http.server 8000
# Acesse: http://localhost:8000
```

Se tiver Node.js / npx:
```bash
npx serve .
# Acesse o endereço exibido no terminal
```

---

## Identidade Visual

| Elemento       | Valor                             |
|---------------|-----------------------------------|
| **Cor primária** | `#1C1A18` (Carvão escuro)       |
| **Cor de acento** | `#8B6B4A` (Carvalho dourado)  |
| **Cor de fundo** | `#FAF8F5` (Off-white quente)   |
| **Cor warm**  | `#C9B99F` (Bege amadeirado)       |
| **Tipografia display** | Cormorant Garamond (serif) |
| **Tipografia corpo** | Inter (sans-serif)        |

---

## Seções do Site

| # | Seção            | Descrição                                        |
|---|-----------------|--------------------------------------------------|
| 1 | **Hero**        | Imagem panorâmica full-height + headline + CTA   |
| 2 | **Sobre**       | Apresentação da marca com imagens e valores      |
| 3 | **Ambientes**   | Grid de 4 categorias de serviços                 |
| 4 | **Projetos**    | Galeria masonry com filtros + lightbox           |
| 5 | **Diferenciais**| 4 cards de benefícios em fundo escuro            |
| 6 | **Processo**    | 5 etapas do atendimento + imagem lateral         |
| 7 | **Contato/CTA** | Chamada final com background + botões de contato |
| 8 | **Footer**      | Dados completos, links e redes sociais           |

---

## Funcionalidades

- ✅ Header transparente com transição ao rolar
- ✅ Menu mobile drawer com animação
- ✅ Smooth scroll para âncoras
- ✅ Reveal animations com IntersectionObserver
- ✅ Parallax sutil no hero (desktop only)
- ✅ Filtros de categoria na galeria
- ✅ Lightbox com navegação por teclado e gestos
- ✅ Botão flutuante de WhatsApp
- ✅ Links WhatsApp com mensagem contextualizada
- ✅ SEO completo: title, meta, OG, JSON-LD LocalBusiness
- ✅ Responsivo: desktop, tablet, smartphone
- ✅ Acessibilidade: ARIA labels, foco visível, contraste
- ✅ Respeita `prefers-reduced-motion`

---

## WhatsApp

**Número:** +55 85 98467-5101  
**Link base:** `https://wa.me/5585984675101`

Diferentes mensagens pré-preenchidas são usadas dependendo da seção de origem do clique, tornando o primeiro contato mais contextualizado.

---

## SEO

- **Title:** `Marque Marcenaria | Móveis Planejados e Marcenaria Sob Medida em Fortaleza`
- **Meta description:** Otimizada com palavras-chave locais
- **JSON-LD:** `LocalBusiness` com endereço, telefone, horários e área de atendimento
- **Open Graph:** Configurado para compartilhamento em redes sociais
- **robots.txt** e **sitemap.xml** incluídos
- **Palavras-chave-alvo:** marcenaria sob medida Fortaleza, móveis planejados Fortaleza, cozinha planejada Fortaleza, marcenaria fina Ceará

---

## Pendências / Próximos Passos

1. **Imagens reais:** Substituir as imagens de placeholder do Unsplash por fotografias reais da Marque Marcenaria (disponíveis no Instagram @marque_marcenaria).
2. **Logo oficial:** Adicionar o arquivo do logotipo em `assets/images/brand/` e atualizar a referência no HTML.
3. **Domínio:** Após hospedar o site, atualizar a URL canônica, o JSON-LD e as metas OG com o domínio real.
4. **Fontes offline:** Se desejar independência de CDN, baixar e hospedar os arquivos de Cormorant Garamond e Inter localmente em `assets/fonts/`.
5. **Favicon PNG:** Gerar um `favicon.ico` ou `apple-touch-icon.png` a partir do SVG para suporte máximo entre navegadores.

---

## Tecnologias Utilizadas

- **HTML5** semântico
- **CSS3** com Custom Properties (sem framework)
- **JavaScript** vanilla (sem dependências)
- **Google Fonts:** Cormorant Garamond + Inter (via CDN)
- **Unsplash** (imagens de placeholder para desenvolvimento)

---

*Desenvolvido com atenção a qualidade visual, SEO local e conversão via WhatsApp.*
