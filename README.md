# NexoUP Blog

> Blog institucional e landing page do sistema **NexoUP — CRM de Atendimento WhatsApp**

---

## Visão Geral

Site estático desenvolvido com HTML, CSS e JavaScript puro, sem dependência de frameworks ou bundlers. Apresenta:

- Blog com artigos sobre **Kanban**, **boas práticas de atendimento** e **gestão de clientes**
- Landing page do sistema NexoUP CRM
- Seção de planos de assinatura com toggle mensal/anual
- Formulário de newsletter
- Design responsivo com identidade visual da marca

## Estrutura de Arquivos

```
nexoup-blog/
├── index.html                  # Página principal
├── src/
│   ├── styles/
│   │   └── main.css            # Estilos globais
│   └── components/
│       └── main.js             # Scripts (toggle, newsletter, menu mobile)
├── public/                     # Assets estáticos (imagens, favicon, etc.)
├── .gitignore
└── README.md
```

## Como Rodar Localmente

Não é necessário instalar nada. Basta abrir o arquivo diretamente no navegador:

```bash
# Opção 1 — abrir direto
open index.html

# Opção 2 — servidor local com Python
python3 -m http.server 8080
# Acesse: http://localhost:8080

# Opção 3 — servidor local com Node.js (npx)
npx serve .
# Acesse: http://localhost:3000
```

## Deploy

Este projeto é compatível com qualquer hosting de arquivos estáticos:

### GitHub Pages

1. Vá em **Settings → Pages** no repositório
2. Em **Source**, selecione a branch `main` e pasta `/` (root)
3. Salve — o site ficará disponível em `https://seu-usuario.github.io/nexoup-blog`

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

Arraste a pasta do projeto para [app.netlify.com/drop](https://app.netlify.com/drop) — deploy instantâneo.

## Personalização

### Cores (CSS Variables em `src/styles/main.css`)

```css
:root {
  --green:  #2ECC71;   /* Verde NexoUP */
  --navy:   #1B2E3C;   /* Azul-escuro NexoUP */
}
```

### Preços dos Planos (`src/components/main.js`)

```js
const PRICES = {
  starter: 97,   // R$/mês no plano mensal
  pro:     247,  // R$/mês no plano mensal
};
// Desconto anual aplicado automaticamente (-20%)
```

### Links de Contratação (`index.html`)

Substitua os `href="mailto:contato@nexoup.com.br?subject=..."` nos botões de plano pelo link do seu checkout ou formulário.

### Newsletter

Integre o formulário com sua plataforma de e-mail marketing (Mailchimp, RD Station, etc.) substituindo a função `handleNewsletter` em `main.js`:

```js
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('nlEmail').value;
  // Adicione aqui a chamada para sua API de e-mail
}
```

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura e acessibilidade |
| CSS3 (sem framework) | Layout, responsividade, animações |
| JavaScript puro (ES6+) | Interatividade — toggle, menu, toast |
| Google Fonts (Syne + DM Sans) | Tipografia |

## Sistema NexoUP

O blog promove o **sistema NexoUP** — CRM de atendimento WhatsApp desenvolvido em Next.js 15. Para mais informações sobre o sistema, consulte o [PROJECT_DOCUMENTATION.md](../PROJECT_DOCUMENTATION.md).

**Recursos do sistema:**
- Múltiplos gateways: Z-API, Meta Cloud API, Twilio, webhook customizado
- Tickets, setores e roteamento automático
- Sincronização com PostgreSQL / Supabase
- Upload de anexos para Google Drive
- Painel de diagnóstico e configuração

## Licença

© 2026 NexoUP. Todos os direitos reservados.
