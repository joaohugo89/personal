# Silva Personal — Template de landing page com navegação horizontal

Template comercial para personal trainers e consultorias fitness.
React + Vite + GSAP, **sem backend**: os CTAs e o formulário abrem o WhatsApp do cliente.

```bash
npm install
npm run dev      # http://localhost:4173
npm run build    # gera /dist
```

---

## 1. Como funciona a navegação horizontal

A página tem 5 painéis de `100vw × 100vh` dentro de um trilho flex:

```
.viewport (fixed, overflow hidden)
└── .track (display:flex)       ← o GSAP anima o xPercent deste elemento
    ├── .panel  Hero
    ├── .panel  Filosofia
    ├── .panel  Programas
    ├── .panel  Depoimentos
    └── .panel  Agendar + Footer
```

Trocar de seção = animar `xPercent` do trilho em múltiplos de `-100`
(`xPercent: -100 * índice`). Toda a lógica está em
[`src/hooks/useHorizontalNav.js`](src/hooks/useHorizontalNav.js).

**Entradas aceitas (todas chamam o mesmo `goTo(i)`):**

| Entrada | Implementação |
|---|---|
| Scroll do mouse / trackpad | `GSAP Observer` (`type: 'wheel,touch'`) — qualquer direção vira um passo lateral |
| Swipe lateral (touch) | mesmo Observer |
| Menu do header | `onNavigate(i)` em `Header.jsx` |
| Setas Anterior / Próximo | `NavArrows.jsx` |
| Pontos de paginação | `Progress.jsx` |
| Teclado | `←` `→` `PageUp` `PageDown` `Home` `End` |

Pontos importantes do motor:

- **Trava de animação** (`animating.current`): um gesto longo não acumula vários
  painéis de uma vez; cada gesto avança exatamente uma seção.
- **`pointer` ficou fora do Observer** de propósito — com ele, um clique com
  micro-arrasto em um botão virava troca de seção.
- **`data-scroll-free`**: qualquer elemento com esse atributo (o formulário, por
  exemplo) não deixa o scroll interno virar navegação.

### Animação de entrada (stagger)

Cada elemento marcado com `data-anim` no JSX começa invisível
(`.panel [data-anim] { opacity: 0 }`). Quando o painel vira o ativo, o efeito em
[`src/App.jsx`](src/App.jsx) roda um `gsap.fromTo` com `stagger: 0.07`, entrando
pela direita ou pela esquerda conforme a direção da navegação.

Para animar um elemento novo, basta adicionar `data-anim` nele.

### Mobile / touch

Abaixo de `900px` (ou em qualquer aparelho com ponteiro grosso) o CSS neutraliza
o trilho e os painéis viram uma **pilha vertical com scroll nativo** — a opção
mais fluida em celular. O mesmo hook troca de motor: `scrollIntoView` no menu e
`IntersectionObserver` para marcar a seção ativa. Nada no markup muda.

Além disso, os blocos de cards (pilares, planos e depoimentos) viram
**carrosséis deslizáveis** no mobile — ver
[`src/components/Carousel.jsx`](src/components/Carousel.jsx). O componente é um
passa-através no desktop (mantém o grid da seção e esconde os indicadores); no
mobile o CSS transforma a mesma lista em uma faixa com `scroll-snap` nativo,
com sangria até a borda da tela e pontos clicáveis abaixo. Para transformar
outro bloco em carrossel, basta envolvê-lo:

```jsx
<Carousel className="minha-grid" label="Itens">{cards}</Carousel>
```

O breakpoint está em `MOBILE_QUERY` (hook) e nas media queries de
`src/styles/layout.css` / `sections.css` — mantenha os dois iguais ao alterar.

---

## 2. Como personalizar

### Conteúdo, preços, links e imagens — `src/data/site.js`

Arquivo único com **todo** o conteúdo: marca, WhatsApp, e-mail, seções,
manchete, métricas, pilares, planos, depoimentos, fotos antes/depois e textos do
formulário. Em 99% das vendas, só esse arquivo precisa ser editado.

- **WhatsApp:** `brand.whatsapp` (formato internacional, só números — `5511999999999`).
  O link pronto é exportado como `whatsappLink` e já é usado em todos os CTAs.
- **Imagens:** substitua as URLs do Unsplash pelos arquivos do cliente. Coloque-os
  em `public/img/` e use o caminho `/img/arquivo.jpg`.
  - `hero.image` — foto vertical do personal (~900×1200)
  - `stories.cases[].before` / `.after` — mesma proporção e enquadramento
- **Ordem das seções:** o array `sections` define menu, paginação e ordem dos
  painéis. Ao mexer nele, ajuste também o array `PANELS` em `src/App.jsx`.

### Cores, fontes e espaçamentos — `src/styles/theme.css`

Todas as variáveis globais ficam lá. Reskin típico:

```css
--c-accent:  #ff4d00;   /* cor de destaque da marca */
--c-ink:     #101014;   /* preto das seções escuras */
--c-paper:   #f7f6f2;   /* off-white das seções claras */
--f-display: 'Bebas Neue', sans-serif;
--t-slide:   .8s;       /* duração da transição entre seções */
```

Ao trocar a fonte, atualize também o `<link>` do Google Fonts em `index.html`.

### Aviso de modelo demonstrativo

Enquanto o template estiver em vitrine, uma barra no topo avisa que nome,
números e depoimentos são fictícios. **Ao vender/entregar ao cliente final**,
desligue em `src/data/site.js`:

```js
export const demoNotice = { enabled: false, /* ... */ };
```

O espaço reservado no topo dos painéis é zerado automaticamente.

### SEO e favicon

Título, descrição e `theme-color` em `index.html`; favicon em `public/favicon.svg`.

### Estrutura dos arquivos

```
src/
├── data/site.js              ← CONTEÚDO DO CLIENTE
├── styles/theme.css          ← CORES / FONTES / TEMPOS
├── styles/layout.css         ← trilho horizontal, header, controles, mobile
├── styles/sections.css       ← estilos das 5 seções
├── hooks/useHorizontalNav.js ← motor da navegação
├── App.jsx                   ← ordem dos painéis + stagger
└── components/
    ├── Header.jsx  NavArrows.jsx  Progress.jsx  SwipeHint.jsx  Icon.jsx
    └── sections/   Hero  Philosophy  Programs  Stories  Booking
```

---

## 3. Formulário

`Booking.jsx` monta a mensagem e abre o WhatsApp — não há servidor. Para integrar
com e-mail, Formspree ou CRM, troque apenas o corpo de `handleSubmit`.

## 4. Deploy

**Demo online:** https://joaohugo89.github.io/forcegym/

`vite.config.js` usa `base: './'` (caminhos relativos), então o mesmo build
funciona em domínio próprio, em subpasta e no GitHub Pages — inclusive se o
repositório for renomeado — sem precisar alterar a configuração.

O workflow `.github/workflows/deploy.yml` publica `/dist` no GitHub Pages a cada
push na `main`. No repositório, deixe **Settings → Pages → Source = GitHub Actions**.

## 5. Acessibilidade

Navegação por teclado, `aria-label` nos controles, foco visível e
`prefers-reduced-motion` respeitado (as transições viram instantâneas).
