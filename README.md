# ForceGym - Landing Page

Landing page completa para uma academia fictícia chamada "ForceGym". Este é um projeto **Single Page Application (SPA)** construído com React, JavaScript e Vite.

## 🏋️ Sobre o Projeto

O ForceGym é uma landing page fictícia que demonstra um design moderno e escuro, com animações suaves e totalmente responsiva. O projeto foi criado sem backend — tudo é executado no lado do cliente.

## ✨ Funcionalidades

- **Design moderno**: Paleta de cores preto, vermelho vibrante (#E63946) e branco
- **Animações suaves**: Transições e efeitos visuais ao fazer scroll
- **100% responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação suave**: Scroll automático entre seções
- **Formulário interativo**: Com feedback visual de envio

## 📋 Seções

1. **Navbar** - Navegação responsiva com menu hambúrguer no mobile
2. **Hero** - Seção principal com chamada para ação impactante
3. **Diferenciais** - Cards com os benefícios da academia
4. **Planos** - Tabela de preços com 3 opções
5. **Sobre** - Informações institucionais e estatísticas
6. **Depoimentos** - Avaliações de alunos fictícios
7. **Contato** - Formulário de contato (sem backend)
8. **Footer** - Links e informações de contato

## 🛠️ Stack Tecnológica

- **React** - Biblioteca de UI
- **JavaScript** - Lógica da aplicação
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS Modules** - Estilos modularizados
- **React Scroll** - Navegação suave
- **AOS (Animate On Scroll)** - Biblioteca de animações
- **Google Fonts (Inter)** - Fonte personalizada

## 🚀 Como Rodar

### Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- npm ou yarn instalados

### Instalação

1. Navegue até a pasta do projeto:
   ```bash
   cd forcegym
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

Crie uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
forcegym/
├── src/
│   ├── components/
│   │   ├── About.jsx           # Componente Sobre
│   │   ├── Contact.jsx         # Componente Contato
│   │   ├── Features.jsx        # Componente Diferenciais
│   │   ├── Footer.jsx          # Componente Footer
│   │   ├── Hero.jsx            # Componente Hero
│   │   ├── Navbar.jsx          # Componente Navbar
│   │   └── Plans.jsx           # Componente Planos
│   ├── data/
│   │   ├── about.js            # Dados sobre
│   │   ├── features.js         # Dados diferenciais
│   │   ├── plans.js            # Dados planos
│   │   └── testimonials.js     # Dados depoimentos
│   ├── styles/                 # Todos os arquivos CSS
│   │   ├── About.css
│   │   ├── Contact.css
│   │   ├── Features.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Navbar.css
│   │   └── Plans.css
│   ├── App.jsx                 # Componente principal
│   ├── App.css
│   └── index.css               # Estilos globais
├── public/                     # Arquivos estáticos
├── index.html                 # HTML principal
├── package.json               # Dependências do projeto
├── vite.config.js             # Configuração do Vite
└── README.md                  # Este arquivo
```