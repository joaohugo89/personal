/* ============================================================
   CONTEÚDO DO CLIENTE — EDITE AQUI
   ------------------------------------------------------------
   Todo o texto, preços, links e imagens da landing page.
   Nenhum componente precisa ser aberto para trocar o conteúdo.
   IMAGENS: substitua as URLs por arquivos do cliente
   (coloque em /public/img/... e use '/img/arquivo.jpg').
   ============================================================ */

/* ------------------------------------------------------------
   AVISO DE MODELO DEMONSTRATIVO
   Mostra a barra no topo enquanto o site estiver em vitrine.
   Ao vender/entregar para o cliente final: enabled: false.
   ------------------------------------------------------------ */
export const demoNotice = {
  enabled: true,
  label: 'Modelo demonstrativo:',
  text:
    'projeto de demonstração — nome, números, depoimentos e resultados são ' +
    'fictícios e servem apenas para ilustrar o layout para fins de venda do template.',
};

export const brand = {
  initials: 'SP',
  name: 'SILVA',
  surname: 'PERSONAL',
  /* WhatsApp: formato internacional, só números. Troque pelo do cliente. */
  whatsapp: '5511999999999',
  whatsappMessage: 'Olá! Vim pelo site e quero agendar minha consulta gratuita.',
  email: 'contato@silvapersonal.com.br',
  city: 'São Paulo — SP',
  instagram: 'https://instagram.com/',
};

/* Link de WhatsApp já montado — use em qualquer CTA. */
export const whatsappLink =
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

/* Ordem dos painéis = ordem da navegação horizontal e do menu. */
export const sections = [
  { id: 'hero', label: 'Início', theme: 'light' },
  { id: 'filosofia', label: 'Filosofia', theme: 'light' },
  { id: 'programas', label: 'Programas', theme: 'light' },
  { id: 'depoimentos', label: 'Depoimentos', theme: 'light' },
  { id: 'agendar', label: 'Agendar', theme: 'dark' },
];

export const hero = {
  eyebrow: 'Ciência · Disciplina',
  badge: 'Treinamento personalizado',
  titleLines: ['Corpo forte.', 'Mente', 'imparável.'],
  highlightLine: 2, // índice da linha que recebe o verde-limão
  text:
    'Com métodos pensados para cada objetivo, acompanho você de perto na ' +
    'periodização de treinos, nutrição estratégica e consistência de longo prazo.',
  ctaPrimary: 'Transformar minha vida',
  ctaSecondary: 'Conhecer programas',
  /* IMAGEM DO PERSONAL — troque pela foto do cliente (vertical, ~900x1200) */
  image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80',
  imageAlt: 'Personal trainer orientando treino funcional',
  imageTag: 'Treino de alta performance',
  stats: [
    { value: '+450', label: 'Transformações' },
    { value: '12', label: 'Anos de experiência' },
    { value: '98%', label: 'Taxa de adesão' },
  ],
};

export const philosophy = {
  eyebrow: 'Nossa abordagem',
  title: ['Filosofia: equilíbrio', 'e saúde sustentável'],
  text:
    'Forma e consistência antes de carga. O plano é construído sobre três pilares ' +
    'que se sustentam: movimento bem executado, nutrição realista e presença diária. ' +
    'Sem dietas impossíveis, sem treino genérico.',
  pillars: [
    {
      n: '01',
      icon: 'activity',
      title: 'Movimento inteligente',
      text:
        'Periodização com progressão de carga monitorada. Cada exercício tem função ' +
        'dentro do ciclo e é ajustado à sua biomecânica.',
      link: 'Ver protocolo de avaliação',
    },
    {
      n: '02',
      icon: 'leaf',
      title: 'Nutrição funcional e real',
      text:
        'Estratégia alimentar que cabe na sua rotina, no seu orçamento e no seu ' +
        'paladar — com metas claras de proteína, energia e hidratação.',
      link: 'Ver exemplo de cardápio',
    },
    {
      n: '03',
      icon: 'pulse',
      title: 'Consistência diária',
      text:
        'Check-ins semanais, ajustes rápidos e acompanhamento de métricas para que ' +
        'o hábito sobreviva às semanas difíceis.',
      link: 'Como faço o acompanhamento',
    },
  ],
};

export const programs = {
  eyebrow: 'Planos e investimento',
  title: 'Programas de treino',
  text:
    'Três formatos, o mesmo padrão de acompanhamento. Escolha o que se encaixa na ' +
    'sua rotina — a migração entre planos é livre a qualquer momento.',
  plans: [
    {
      id: 'presencial',
      tag: 'Formato presencial',
      name: 'Treino presencial (1-on-1)',
      summary: 'Atendimento individual no estúdio, com correção de execução em tempo real.',
      price: '1.490',
      period: '/mês',
      currency: 'R$',
      features: [
        'Avaliação física e postural completa',
        '3 sessões semanais de 60 min',
        'Periodização impressa e revisada',
        'Relatório mensal de evolução',
      ],
      cta: 'Falar sobre este plano',
      featured: false,
    },
    {
      id: 'online',
      tag: 'Mais escolhido',
      name: 'Consultoria online elite',
      summary: 'Programa completo à distância com suporte direto e ajustes quinzenais.',
      price: '380',
      period: '/mês',
      currency: 'R$',
      features: [
        'App exclusivo com vídeos de execução',
        'Ajustes quinzenais de treino e dieta',
        'Suporte no WhatsApp em dias úteis',
        'Check-in semanal por vídeo',
      ],
      cta: 'Começar agora',
      featured: true,
    },
    {
      id: 'grupo',
      tag: 'Formato em grupo',
      name: 'Treino em grupo funcional',
      summary: 'Turmas pequenas (até 6 alunos) com energia de time e custo dividido.',
      price: '520',
      period: '/mês',
      currency: 'R$',
      features: [
        'Turmas reduzidas com nível equivalente',
        '2 sessões semanais de 50 min',
        'Planilha de progressão compartilhada',
        'Desafios mensais em equipe',
      ],
      cta: 'Ver horários das turmas',
      featured: false,
    },
  ],
};

export const stories = {
  eyebrow: 'Resultados reais',
  title: 'Histórias de transformação',
  text: 'Alunos acompanhados de ponta a ponta. Fotos e números divulgados com autorização.',
  /* ANTES/DEPOIS — troque pelas fotos reais do cliente (mesma proporção) */
  cases: [
    {
      name: 'Camila Fontes',
      meta: '34 anos · 11 meses de acompanhamento',
      before: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
      after: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=700&q=80',
      beforeLabel: 'Antes (2023)',
      afterLabel: 'Depois (2024)',
      quote:
        'Perdi 14 kg de gordura e ganhei massa muscular mantendo a rotina de trabalho. ' +
        'O método do Silva mudou completamente minha relação com a disciplina e com o meu corpo.',
      metrics: [
        { value: '−18 kg', label: 'Gordura' },
        { value: '+3,9 kg', label: 'Massa magra' },
        { value: '34', label: 'Semanas' },
        { value: '100%', label: 'Adesão' },
      ],
    },
  ],
  testimonials: [
    {
      quote:
        'Cheguei com dor lombar crônica e saí do ciclo com amplitude total de movimento. ' +
        'A diferença é ter alguém que acompanha cada detalhe da execução.',
      name: 'Raquel Vendrini',
      role: 'Advogada · aluna há 2 anos',
      rating: 5,
    },
    {
      quote:
        'A consultoria online cabe no meu fuso e na minha viagem. Nunca tive tanta ' +
        'constância — e os ajustes quinzenais fazem toda a diferença.',
      name: 'Juliana Cartilho',
      role: 'Gerente comercial · aluna há 14 meses',
      rating: 5,
    },
  ],
};

export const booking = {
  eyebrow: 'Primeiro passo',
  title: 'Agende sua consulta gratuita',
  text:
    'Uma conversa de 30 minutos para entender seu histórico, seus objetivos e definir ' +
    'qual programa faz sentido. Sem compromisso e sem venda forçada.',
  perks: [
    'Avaliação inicial de histórico e lesões',
    'Definição de metas realistas por ciclo',
    'Sugestão de plano ideal para sua rotina',
  ],
  submit: 'Transformar minha vida',
  disclaimer: 'Retornamos em até 1 dia útil pelo WhatsApp informado.',
  goals: [
    'Emagrecimento',
    'Hipertrofia',
    'Condicionamento e saúde',
    'Reabilitação / pós-lesão',
    'Performance esportiva',
  ],
  periods: ['Manhã', 'Tarde', 'Noite', 'Fim de semana'],
};

export const footer = {
  tagline: 'Treinamento personalizado, presencial e online, com acompanhamento de verdade.',
  note: 'Template comercial — troque textos, imagens e links no arquivo src/data/site.js.',
  legal: `© ${new Date().getFullYear()} ${brand.name} ${brand.surname}. Todos os direitos reservados.`,
};
