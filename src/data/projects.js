/* ═══════════════════════════════════════════════════════════
   PROJECTS — fonte única de verdade
   - slug: usado nas rotas /projeto/:slug
   - videoUrl: opcional, preferido sobre cover quando presente
   - detail: conteúdo da página individual (Problema/Solução/etc)
   ═══════════════════════════════════════════════════════════ */

export const PROJECTS = [
  {
    id: 'lumina',
    slug: 'lumina',
    title: 'Lumina Analytics',
    tagline: 'Motor analítico que processa 3 anos de dados em menos de 2 segundos.',
    description:
      'Times comerciais tomam decisões com dados de ontem porque o BI atual demora demais — quando enfim carrega, ninguém mais lembra a pergunta. O Lumina inverte essa lógica: arquitetura desacoplada com pipeline GraphQL, frontend reativo blindado e PostgreSQL afinado para agregações pesadas. Você abre o dashboard, faz a pergunta, e a resposta chega antes do café esfriar. É a velocidade que separa planejar o trimestre de explicar o trimestre passado.',
    category: 'saas',
    featured: true, // entra no Sticky Stacking
    mainTags: ['React', 'Django', 'PostgreSQL'],
    allTags: ['React', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'GraphQL', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux / CLI'],
    badges: ['SaaS Completo', 'Arquitetura Escalável'],
    liveUrl: 'https://marketing-site-black-pi.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/Lumina-Booking-SaaS',
    cover: '/lumina-cover.png',
    videoUrl: '/videos/lumina.mp4',
    detail: {
      problem:
        'Times comerciais e financeiros vivem a mesma cena: dashboard travando ao cruzar 3 anos de histórico, planilha que ninguém audita, BI corporativo que cobra mais que o salário do analista que vai usar. Metabase exige DBA dedicado; alternativas baratas morrem quando o histórico passa de algumas centenas de milhares de linhas. O custo real não é a licença — é a decisão que ninguém toma porque o número demora demais pra aparecer na tela.',
      solution:
        'Construí o Lumina como motor analítico desacoplado: o backend Django expõe um schema GraphQL preciso, o frontend React + TypeScript pede exatamente o campo que vai renderizar (zero over-fetching), e as agregações pesadas rodam direto no Postgres com índices compostos sob medida. O resultado é tangível: 3 anos de assinaturas, filtros cruzados, cohort analysis — tudo respondendo em menos de 2 segundos. Sem cache obscuro, sem dado de ontem. Dashboard ao vivo, decisão hoje.',
      decisions: [
        {
          title: 'GraphQL no lugar de REST',
          body: 'Cada widget pede só os campos que renderiza, não a entidade inteira. Em dashboard com 20+ widgets, REST viraria N+1 disfarçado de "simplicidade". Resultado: ~70% menos tráfego, zero versionamento de endpoint, cache previsível no cliente.',
        },
        {
          title: 'SQL cru no Postgres, ORM no controle',
          body: 'Agregações pesadas rodam em SQL escrito à mão via Django raw, com índices compostos em (subscription_id, period). ORM é ótimo pra CRUD; pra GROUP BY analítico, ele esconde o plano de execução e cobra CPU. Cálculo no banco custa centavos — em Python custa request inteiro.',
        },
        {
          title: 'Docker desde o commit zero',
          body: 'Stack inteira (Django + Postgres + Nginx) em docker-compose. Onboarding de dev é um comando. CI no GitHub Actions reusa as mesmas imagens — o que passou no PR é exatamente o que sobe em produção. "Funciona na minha máquina" deixou de ser categoria de bug.',
        },
        {
          title: 'TypeScript estrito + GraphQL Codegen',
          body: 'Codegen lê o schema do backend e gera os tipos no frontend. Mudou um campo no Django? O TS quebra antes do PR existir. Refatoração de schema deixou de ser ato de coragem — virou operação previsível.',
        },
      ],
      learnings:
        'SaaS analítico sério não nasce do framework escolhido — nasce de pipeline pensado, índice composto certo e contrato tipado ponta a ponta desde o dia zero. Cada decisão arquitetural compra ou cobra seis meses de futuro. Saí com a régua que carrego em todo projeto desde então: "isso aqui sustenta com 10x os dados?" Se a resposta exige refatoração, a decisão precisa mudar agora — não depois.',
      stack: {
        frontend: ['React', 'TypeScript', 'GraphQL Client', 'Codegen', 'Apollo'],
        backend: ['Python', 'Django', 'Graphene-Django', 'PostgreSQL', 'SQL avançado'],
        infra: ['Docker', 'docker-compose', 'GitHub Actions · CI/CD', 'Linux · CLI', 'Nginx'],
      },
    },
  },
  {
    id: 'flowsnyker',
    slug: 'flowsnyker',
    title: 'FlowSnyker',
    tagline: 'Kanban com colaboração em tempo real e segurança de nível corporativo.',
    description:
      'Profissionais e equipes perdem energia preciosa tentando organizar o caos em ferramentas rígidas, lentas ou genéricas. O FlowSnyker resolve essa dor de outra forma: cada card responde no instante exato em que sua mão sai do mouse, o drag & drop é magnético e o quadro pode ser compartilhado com sua equipe em tempo real — com uma camada de autenticação blindada que valida cada acesso. Visual escuro de produto premium, micro-interações que parecem físicas e backend que aguenta milhares de tarefas sem suar. Não é mais um Kanban. É o Kanban que você queria desde que o Trello parou de te servir.',
    category: 'saas',
    featured: true,
    mainTags: ['React', 'TypeScript', 'MongoDB'],
    allTags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', '@dnd-kit', 'Zod', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Web Push API', 'Vercel'],
    badges: ['Kanban Full Stack', 'Drag & Drop'],
    liveUrl: 'https://flow-snyker.vercel.app/login',
    codeUrl: 'https://github.com/jeanderson-silva8/FlowSnyker',
    cover: '/flowsnyker-cover.png',
    videoUrl: '/videos/flowsnyker.mp4',
    detail: {
      problem:
        'Times pequenos vivem o mesmo dilema diário: Trello é genérico demais e morre com poucos quadros; Notion é poderoso mas pesado e lento pra rotina; ferramentas corporativas como Jira e Asana cobram caro e enterram o usuário em telas. Quem precisa de fluxo simples — arrastar, priorizar, terminar — acaba pagando com produtividade. E poucas alternativas pequenas levam autenticação e isolamento de dados a sério: ou você abre mão de segurança, ou abre mão de fluidez.',
      solution:
        'Construí o FlowSnyker do zero com obsessão por três coisas: fluidez, colaboração e blindagem. Em vez do sistema engessado dos concorrentes, você gerencia projetos com um drag & drop magnético que responde no ritmo da sua mente — cada card se move antes do clique terminar, cada coluna reflete a mudança em tempo real. A colaboração é de verdade: você convida pessoas para atuar no mesmo quadro ao vivo, e a sincronização acontece sem refresh, sem conflito, sem perda de contexto. Tudo sob uma arquitetura de compartilhamento blindada que valida cada acesso e protege dados sensíveis em camadas — autenticação JWT em cookie HttpOnly, rotação de refresh tokens e validação Zod em todo input, o tipo de proteção que normalmente só aparece em SaaS pago. Não é um Kanban bonito por fora — é um Kanban premium do banco até o pixel.',
      decisions: [
        {
          title: '@dnd-kit no lugar de react-dnd',
          body: 'react-dnd é o padrão histórico, mas tem touch quebrado e bundle 60% maior. @dnd-kit roda nativo em mobile, acessibilidade por teclado out-of-the-box e API moderna. Pra app que vive de arrastar, frame perdido é confiança perdida.',
        },
        {
          title: 'JWT em cookie HttpOnly + refresh rotativo',
          body: 'Access token expira em 15min; refresh é invalidado a cada uso. Token vazado derruba a sessão no próximo request — sem revogação manual, sem janela de exploração. Segurança de nível bancário com a complexidade de um middleware.',
        },
        {
          title: 'Zod no boundary, dos dois lados',
          body: 'O mesmo schema valida otimisticamente no front e defensivamente no back. Uma fonte de verdade, duas camadas de proteção. O bug clássico "front aceita, back rejeita" deixa de existir como categoria — não como ocorrência.',
        },
        {
          title: 'Índice composto (userId, boardId, columnId) no Mongo',
          body: 'Leitura em O(log n) mesmo com milhares de cards. Schema desnormalizado pra cortar joins que nem fariam sentido em Mongo direito. Banco rápido porque a estrutura foi pensada antes da primeira query — não depois do primeiro lag em produção.',
        },
      ],
      learnings:
        'Refiz o drag & drop três vezes até bater 60fps consistentes no celular. Aprendi na carne a regra que sênior repete: meça antes de otimizar. Nas duas primeiras tentativas o gargalo não estava onde meu instinto apontou — estava no re-render da coluna inteira, não na lib de drag. Consolidei também a disciplina de validação dupla com schema único: produto fluido não é polimento de UI, é decisão arquitetural tomada cedo.',
      stack: {
        frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', '@dnd-kit'],
        backend: ['Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'bcrypt', 'Zod'],
        infra: ['Vercel', 'GitHub Actions', 'Web Push API'],
      },
    },
  },
  {
    id: 'brieflyai',
    slug: 'brieflyai',
    title: 'BrieflyAI',
    tagline: 'Resumos de IA que aparecem palavra por palavra — em segundos, não em minutos.',
    description:
      'Reunião de uma hora vira parágrafo útil em segundos. O BrieflyAI processa áudio em streaming e devolve insights na tela letra por letra — sem loading screen, sem espera, sem aquela dúvida de "será que travou?". Por baixo, um pipeline afinado: Whisper transcreve, LLaMA 3 sintetiza via Groq LPU (a inferência mais rápida disponível hoje) e Server-Sent Events entregam o texto em tempo real. Por cima, uma interface glassmorphism que parece SaaS premium de US$ 99/mês. O efeito é desconcertante na primeira vez — e indispensável a partir da segunda.',
    category: 'saas',
    featured: true,
    mainTags: ['React', 'Node.js', 'Groq LPU'],
    allTags: ['React 19', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Groq API', 'Whisper', 'LLaMA 3', 'SSE (Streaming)', 'JWT Auth', 'Tailwind CSS', 'Framer Motion'],
    badges: ['IA em Tempo Real', 'Arquitetura Streaming'],
    liveUrl: 'https://briefly-ai-nine.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/BrieflyAI-',
    cover: '/brieflyai-cover.png',
    videoUrl: '/videos/brieflyai.mp4',
    detail: {
      problem:
        'Reuniões corporativas geram horas de áudio que ninguém vai rever. Resumir manualmente queima o dia; resumidores genéricos travam em loading screen, perdem contexto técnico e cobram caro por token — em times grandes, vira linha de orçamento. Pior: quase todos entregam o resumo como bloco morto no final. Você fica dois minutos esperando sem saber se algo bom virá ou se a API engasgou.',
      solution:
        'Reescrevi a equação inteira. O áudio entra, o Whisper transcreve em chunks, o LLaMA 3 (rodando em Groq LPU a 500+ tokens/segundo) sintetiza, e o frontend recebe via Server-Sent Events — palavra por palavra, no momento em que a IA gera. A percepção de latência cai pra perto de zero: o usuário lê enquanto a IA pensa, e a primeira frase aparece em menos de um segundo. É velocidade extrema (potencializada por Groq LPU) aliada a um UX 10x melhor (Glassmorphism) e segurança de dados de nível bancário.',
      decisions: [
        {
          title: 'Groq LPU no lugar de OpenAI',
          body: 'Groq roda LLaMA 3 a 500+ tok/s; reunião de 1h sai em ~8s. GPT-4 leva 40s+ no mesmo prompt. Pra UX de "IA digitando ao vivo", essa diferença é o que separa wow de "fechei a aba". Decisão de infra virou decisão de produto.',
        },
        {
          title: 'SSE no lugar de WebSocket',
          body: 'Streaming de IA é unidirecional (servidor → cliente). SSE roda em HTTP nativo, reconecta sozinho, atravessa proxy corporativo sem configuração. WebSocket aqui seria overengineering disfarçado de modernidade — mais código, mais infra, zero ganho real.',
        },
        {
          title: 'Multi-tenant via JWT scope + middleware',
          body: 'JWT carrega organization_id. Middleware injeta o filtro em toda query do Mongoose automaticamente — impossível esquecer e vazar dado entre tenants. Multi-tenancy de nível bancário sem o custo operacional de Postgres particionado por schema.',
        },
        {
          title: 'Glassmorphism + Framer Motion calibrados',
          body: 'Cliente B2B paga mais quando a interface parece cara. Blur layered, gradientes calculados, animações de entrada coreografadas. Design não decora — precifica. O mesmo produto sem polimento perderia uma faixa inteira de ticket.',
        },
      ],
      learnings:
        'Streaming muda a equação da latência: o que importa não é "quanto tempo a resposta inteira demora", é "quanto tempo a primeira palavra leva". Aprendi a arquitetar pipeline real de IA (chunk → ASR → LLM → stream) e a tomar decisão fria sobre provider — Groq vs OpenAI virou estudo de caso pessoal sobre quando trocar hype por evidência mensurada. Hoje quando alguém diz "a IA tá lenta", meu primeiro instinto é mapear onde está o ponto de espera — não trocar de modelo.',
      stack: {
        frontend: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'SSE Client', 'EventSource API'],
        backend: ['Node.js', 'Express.js', 'Groq API', 'OpenAI Whisper', 'LLaMA 3', 'MongoDB Atlas', 'JWT'],
        infra: ['Vercel Serverless', 'Edge Functions', 'GitHub Actions'],
      },
    },
  },
  {
    id: 'nexus',
    slug: 'nexus',
    title: 'Nexus Portal',
    tagline: 'Experiência 3D cinematográfica que roda a 60fps direto no navegador.',
    description:
      'Esqueça o conceito de site. O NEXUS é um universo navegável: cena 3D em tempo real, iluminação fluida, shaders escritos à mão e uma narrativa que se desenrola conforme você rola a página. Cada câmera, cada partícula, cada onda de luz responde ao seu scroll com precisão coreografada. Não é uma demo isolada — é prova viva de que dá pra construir experiências de cinema dentro do navegador sem matar o celular do usuário. É frontend levado ao limite do que ainda parece confortável.',
    category: 'landing-3d',
    featured: true,
    mainTags: ['React 19', 'Three.js', 'GLSL'],
    allTags: ['React 19', 'TypeScript', 'Three.js', 'React Three Fiber', 'GLSL Shaders', 'WebGL', 'Zustand', 'GSAP', 'Lenis', 'Post-Processing', 'Vite', 'Tailwind CSS'],
    badges: ['3D Interativo', 'WebGL'],
    liveUrl: 'https://nexus-portal-one.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/nexus-portal',
    cover: '/nexus-cover.png',
    videoUrl: '/videos/nexus.mp4',
    detail: {
      problem:
        'Landing pages corporativas viraram commodity: hero genérico, três bullets, CTA, footer. Todas iguais, todas esquecíveis. Para marcas que se vendem como inovadoras, "mais um site bonito" não convence ninguém — precisa provar competência técnica no próprio site. O problema é que a maioria das tentativas de 3D no navegador termina mal: trava no Safari, derrete o celular, carrega 10MB de bundle pra mostrar uma esfera girando.',
      solution:
        'Construí o NEXUS com obsessão por performance honesta. Three.js orquestrado via React Three Fiber, shaders GLSL escritos à mão, post-processing seletivo e otimização agressiva de geometria. A cena conta uma história em tempo real à medida que você rola — câmera, fog, luz e materiais respondem ao scroll por timelines GSAP precisas. O resultado roda a 60fps em desktop e mantém suavidade no celular, com bundle enxuto. É 3D que prova que dá pra ir longe sem trair o usuário.',
      decisions: [
        {
          title: 'React Three Fiber no lugar de Three.js puro',
          body: 'R3F traz a declaratividade do React pro 3D: cena vira árvore de componentes, materiais viram props, lifecycle de meshes fica com o reconciler. Código ~40% menor, mais testável, e refatoração não vira ritual. Three.js puro é poderoso — mas escalar projeto grande em imperativo é convite pra dor.',
        },
        {
          title: 'GLSL escrito à mão, não material pronto',
          body: 'Materiais nativos do Three resolvem o trivial — o cinematográfico nasce em vertex/fragment shader. Escrevi do zero pra iluminação volumétrica e dissolução. Foi a habilidade técnica que mais me transformou: passei a entender GPU como entendia CPU.',
        },
        {
          title: 'Zustand no state da cena, não Redux/Context',
          body: 'Re-render em cascata mata aplicação 3D. Zustand atualiza só os componentes que assinam o slice — câmera, partículas e UI rodam isolados. 60fps preservados mesmo em interação pesada. State certo é tão importante quanto shader certo.',
        },
        {
          title: 'Lenis + GSAP ScrollTrigger num único RAF',
          body: 'Coreografia da cena é dirigida pelo scroll. Lenis suaviza o input, ScrollTrigger transforma scroll em timeline, GSAP anima câmera/fog/luz/uniforms no mesmo loop. Sem dois RAFs disputando frame — cada rolagem do usuário é um keyframe da história.',
        },
      ],
      learnings:
        'Construir 3D performático no navegador não é "saber Three.js" — é entender draw calls, custo de fragment shader e, principalmente, quando NÃO usar post-processing. Aprendi GLSL na marra (vertex, fragment, uniforms, varyings) e descobri que a maior parte do impacto cinematográfico vem de iluminação e timing, não de modelo elaborado. Depois do Nexus, encaro WebGL como linguagem de produto: sei o que custa e o que entrega cada decisão técnica.',
      stack: {
        frontend: ['React 19', 'TypeScript', 'Three.js', 'React Three Fiber', 'Drei', 'Zustand', 'Vite'],
        graphics: ['GLSL Shaders (vertex + fragment)', 'WebGL', 'Post-Processing', 'Geometry Optimization'],
        animation: ['GSAP', 'GSAP ScrollTrigger', 'Lenis', 'Custom RAF timelines'],
      },
    },
  },
  {
    id: 'trendscope',
    slug: 'trendscope',
    title: 'TrendScope',
    tagline: 'Busca em tempo real que vasculha a web ao vivo — sem cache, sem espera.',
    description:
      'O Google demora pra indexar o que acabou de acontecer. Ferramentas de SEO entregam dados de horas atrás. O TrendScope foi pensado para um momento específico: quando você precisa saber o que está fervendo agora, neste minuto. Você digita, o motor varre a web ao vivo via Serper API, e os resultados aparecem em ~400ms. Sem login, sem subscription, sem cache obsoleto. Backend serverless em Hono + tRPC com tipagem ponta a ponta — leve no servidor, sólido no contrato. É o tipo de ferramenta que parece simples até você precisar dela.',
    category: 'saas',
    featured: true,
    mainTags: ['React', 'Hono', 'tRPC'],
    allTags: ['React', 'TypeScript', 'Hono', 'tRPC', 'Serper.dev API', 'Zod', 'Vercel Serverless', 'Tailwind CSS'],
    badges: ['Busca em Tempo Real', 'Serverless RPC'],
    liveUrl: 'https://trend-scope.vercel.app/?q=Hono+vs+tRPC',
    codeUrl: 'https://github.com/jeanderson-silva8/TrendScope',
    cover: '/content-search-cover.png',
    videoUrl: '/videos/trendscope.mp4',
    detail: {
      problem:
        'O ciclo de indexação do Google ainda é o gargalo da informação na internet. Quando uma notícia, um lançamento ou um meme aparece, dá pra esperar minutos (ou horas) até virar SERP. Para devs, marqueteiros e profissionais de pesquisa que precisam saber "o que está acontecendo AGORA" sobre um tema, falta uma ferramenta verdadeiramente ao vivo — sem bloat, sem login wall, sem dashboard de SaaS no caminho.',
      solution:
        'O TrendScope ataca o problema com cirurgia. Você digita, o backend serverless em Hono dispara uma chamada à Serper API, normaliza os resultados via tRPC com tipagem ponta a ponta, e o frontend renderiza em ~400ms. Sem cache, sem subscription, sem framework pesado no caminho. A simplicidade é o produto: cada query vasculha a web fresh, cada resposta é o estado atual da rede no momento exato do clique.',
      decisions: [
        {
          title: 'Hono no lugar de Express',
          body: 'Hono é ~10x mais leve, roda em qualquer runtime serverless (Vercel Edge, Cloudflare Workers, Bun) e tem TS nativo no router. Em serverless, cold start é dinheiro: Express ~800ms, Hono ~80ms. Pra produto "ao vivo" usado em pico imprevisível, isso decide a UX no primeiro clique.',
        },
        {
          title: 'tRPC no lugar de REST/GraphQL',
          body: 'Sem OpenAPI, sem geração externa de cliente, sem schema duplicado. Frontend importa o tipo do backend como função local — autocomplete em tudo, refactor sem medo, zero divergência. É o melhor que TypeScript pode oferecer entre dois processos.',
        },
        {
          title: 'Zod no contrato, sempre',
          body: 'tRPC valida input e output com Zod. Mesmo schema serve pra validação otimista no front e defensiva no back. Uma fonte de verdade. O bug "front manda, back recusa" deixa de existir como categoria — não como ocorrência.',
        },
        {
          title: 'Vercel Serverless + Edge',
          body: 'Sem servidor pra manter, scaling automático, pago por execução. Endpoint frio sobe em ~100ms; em pico escala em segundos sem intervenção. Pra produto com tráfego imprevisível, infra elástica e invisível é o que combina com o produto.',
        },
      ],
      learnings:
        'Tipagem ponta a ponta com tRPC mudou como penso em API: contrato deixou de ser YAML externo pra virar primitiva nativa do TypeScript — refactor de schema vira refactor de tipo, e o compilador acha o erro antes do PR. Aprendi também que serverless tem nuances reais: cold start, limite de execução, cold path. Escolher Hono em vez de Express não é capricho técnico — é decisão de produto quando latência aparece nos KPIs. Levei essa lente pra todo projeto serverless desde então.',
      stack: {
        frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'tRPC Client'],
        backend: ['Hono', 'tRPC', 'Zod', 'Serper.dev API'],
        infra: ['Vercel Serverless', 'Edge Functions', 'TypeScript ponta a ponta'],
      },
    },
  },
  {
    id: 'fuga-floresta',
    slug: 'fuga-floresta',
    title: 'Fuga na Floresta',
    tagline: 'Endless runner 2D com física customizada em Canvas + PWA.',
    description:
      'Aventura viciante construída do zero, sem motores de jogo. Cada salto, colisão e física programados em código puro. Leve, rápido, instalável no celular.',
    category: 'lab',
    featured: false,
    mainTags: ['HTML5 Canvas', 'Vanilla JS', 'PWA'],
    allTags: ['HTML5 Canvas API', 'JavaScript Vanilla (ES6+)', 'Game Loop Customizado', 'Detecção de Colisão', 'PWA', 'Service Workers', 'CSS3'],
    badges: ['Engine Própria', 'PWA Nativo'],
    liveUrl: 'https://fuga-na-floresta.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/fuga-na-floresta',
    cover: '/fuga-floresta-cover-highres.png',
    mobileCover: '/fuga-floresta-mobile-highres.png',
    videoUrl: null,
    detail: {
      problem:
        'Jogos web costumam vir em duas formas ruins: bundles gigantes carregados de motor (Phaser, PixiJS, Unity WebGL) que travam celular fraco, ou demos vanilla mal feitas que perdem frame, têm colisão furada e morrem em portrait. Não havia meio-termo: endless runner leve, suave e que funcionasse offline no navegador do ônibus.',
      solution:
        'Construí o Fuga na Floresta do zero em Canvas puro — sem Phaser, sem PixiJS, sem nada. Game loop próprio rodando em requestAnimationFrame com delta time fixo, detecção de colisão AABB customizada, parallax em camadas, sprite animation por frame index. Empacotado como PWA: instala no celular, roda offline, ocupa menos de 200KB. Prova que dá pra fazer jogo web sério sem motor — desde que você entenda o loop.',
      decisions: [
        {
          title: 'Canvas puro no lugar de Phaser',
          body: 'Phaser traz tudo, mas custa 1MB+ de bundle e abstrações que escondem o frame. Para endless runner com 4 tipos de obstáculo, escrevi o loop do zero — controle total sobre cada draw call. Bundle final cabe em um único request HTTP.',
        },
        {
          title: 'Delta time fixo no game loop',
          body: 'Sem delta time, jogo roda mais rápido em monitor 144Hz e mais devagar em celular fraco. Travei o passo de simulação e interpolei o render — física determinística, comportamento idêntico em qualquer dispositivo.',
        },
        {
          title: 'PWA desde o início',
          body: 'Service Worker cacheia assets na primeira visita; depois disso o jogo abre offline em menos de 1s. Manifesto + ícone permitem "instalar" no home screen do celular. Distribuição zero-fricção, sem app store.',
        },
        {
          title: 'AABB no lugar de pixel-perfect collision',
          body: 'Colisão por bounding box é O(1) e suficiente para o gênero. Pixel-perfect custaria 10x mais e seria imperceptível. Otimização certa: economizar onde o usuário não vê.',
        },
      ],
      learnings:
        'Construir engine própria me ensinou o que motor pronto esconde: ordem de update vs render, problema do frame variável, custo real de cada draw call. Saí entendendo por que jogos AAA tratam game loop como religião — frame perdido é confiança perdida. Levo isso pra qualquer interface que precise responder em tempo real, não só jogos.',
      stack: {
        frontend: ['HTML5 Canvas API', 'JavaScript Vanilla (ES6+)', 'CSS3'],
        engine: ['Game Loop Customizado', 'Delta Time Fixo', 'AABB Collision', 'Sprite Animation'],
        infra: ['PWA', 'Service Workers', 'Manifest', 'Vercel'],
      },
    },
  },
  {
    id: 'dashboard',
    slug: 'organiza-dashboard',
    title: 'Dashboard Organiza',
    tagline: 'Dashboard full stack com auth JWT e dados em tempo real.',
    description:
      'Dashboard profissional de gerenciamento de tarefas com autenticação JWT, banco em tempo real e design premium em dark mode.',
    category: 'saas',
    featured: false,
    mainTags: ['React 19', 'Node.js', 'MongoDB'],
    allTags: ['React v19', 'Vite', 'Node.js', 'Express.js v5', 'MongoDB Atlas', 'JWT', 'Axios', 'Lucide React', 'Vercel Serverless'],
    badges: ['Full Stack', 'JWT Auth'],
    liveUrl: 'https://organiza-dashboard-full.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/organiza-dashboard-full',
    cover: '/organiza-dia-highres.png',
    mobileCover: '/organiza-mobile-highres.png',
    videoUrl: null,
    detail: {
      problem:
        'Maioria dos dashboards de tarefas no mercado é uma de duas coisas: SPA bonita sem backend (perde tudo no F5) ou ferramenta corporativa caríssima para resolver "anotar o que fazer hoje". Falta o meio: full stack honesto, com autenticação real, dados persistidos em banco e interface premium — sem assinatura mensal.',
      solution:
        'Dashboard Organiza é full stack do começo ao fim. Backend Node.js + Express v5 conversa com MongoDB Atlas, autenticação JWT com middleware próprio, frontend React 19 + Vite com dark mode premium. Cada ação (criar, editar, completar tarefa) bate no banco em tempo real via Axios. Sem localStorage, sem mock — produção desde o primeiro commit.',
      decisions: [
        {
          title: 'Express v5 no backend',
          body: 'Express 5 trouxe async/await nativo nos handlers — sem mais wrapper de try/catch em cada rota. Código 30% menor, error handling centralizado. Vale a versão recente quando ela paga em ergonomia.',
        },
        {
          title: 'JWT em vez de sessão',
          body: 'Stateless: nenhum estado no servidor, escala horizontal sem Redis no caminho. Token vai no header, middleware valida, request segue. Para SaaS pequeno em serverless, essa é a arquitetura certa — sessão precisaria de infra que o projeto não justifica.',
        },
        {
          title: 'MongoDB Atlas no lugar de Postgres',
          body: 'Modelo de dados é simples (user → tasks). Mongo entrega isso sem migração, sem schema rígido, free tier generoso para projeto demo. Postgres seria certo para relações complexas — aqui seria overengineering.',
        },
        {
          title: 'Vercel Serverless full stack',
          body: 'Front e API no mesmo deploy, mesma URL, mesmo CI. Push na main = produção atualizada em 30s. Stack inteira pago em zero até começar a escalar — modelo certo para validar produto.',
        },
      ],
      learnings:
        'Dashboard "simples" me ensinou que autenticação não é checkbox — é design de fluxo: token expirado, refresh silencioso, logout em todas as abas, proteção de rota no front E no back. Aprendi também que UX premium em dark mode é mais sobre contraste calculado e hierarquia tipográfica do que sobre cor — princípio que carrego em todo projeto desde então.',
      stack: {
        frontend: ['React 19', 'Vite', 'Axios', 'Lucide React'],
        backend: ['Node.js', 'Express.js v5', 'MongoDB Atlas', 'JWT', 'bcrypt'],
        infra: ['Vercel Serverless', 'GitHub Actions'],
      },
    },
  },
  {
    id: 'nord-nails',
    slug: 'nord-nails',
    title: 'Nord Nails Studio',
    tagline: 'Landing de alta conversão com estética minimalista.',
    description:
      'Landing page premium para estúdio de unhas e beleza. Foco em estética minimalista, alta conversão e agendamento prático.',
    category: 'landing-3d',
    featured: false,
    mainTags: ['React', 'Tailwind', 'Vite'],
    allTags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    badges: ['Landing Page', 'Alta Conversão'],
    liveUrl: 'https://nord-nails.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/nord-nails',
    cover: '/nordnails-cover-highres.png',
    mobileCover: '/nordnails-mobile-highres.png',
    videoUrl: null,
    detail: {
      problem:
        'Estúdios de beleza dependem de Instagram para captar clientes — mas Instagram não converte: não tem agendamento, não fala de preço, não constrói autoridade. Sites prontos (Wix, sites de salão) são genéricos, lentos e empurram a marca pro mesmo molde de mil concorrentes. Quem quer ticket alto precisa parecer ticket alto.',
      solution:
        'Landing minimalista pensada como ferramenta de conversão, não como portfólio. Hero direto, prova social em destaque, CTA de agendamento visível em todos os scrolls, performance Lighthouse 100. Estética nórdica (paleta crua, tipografia editorial, espaços generosos) que posiciona o estúdio acima do varejo. React + Tailwind compilados para bundle mínimo — abre antes do cliente perder o impulso.',
      decisions: [
        {
          title: 'TypeScript em landing de uma página',
          body: 'Parece exagero — não é. Quando o site cresce (FAQ, depoimentos, blog), TS já está pago. E mesmo numa única página, autocomplete dos props do componente economiza minutos por sessão. Custo zero, retorno imediato.',
        },
        {
          title: 'Tailwind no lugar de CSS módulos',
          body: 'Landing tem 4 telas; CSS modular criaria 20 arquivos para 40 estilos. Tailwind condensa decisão de design no JSX — refatoração visual sem caçar arquivo. Para projeto pequeno e estático, é a ferramenta certa.',
        },
        {
          title: 'Sem framework de animação pesado',
          body: 'Animações com CSS transitions puras + transform. Framer Motion seria 50KB para o que CSS faz nativamente. Em landing, cada KB conta na primeira impressão.',
        },
        {
          title: 'Imagens em formato moderno + lazy',
          body: 'WebP + loading="lazy" em tudo abaixo do fold. Resultado: 90+ no PageSpeed mobile, primeiro paint em menos de 1s no 4G. Conversão começa na espera que não acontece.',
        },
      ],
      learnings:
        'Landing premium não é sobre adicionar — é sobre subtrair. Cada elemento que não converte é elemento que distrai. Aprendi a discutir hierarquia visual com cliente: o que o olho vê primeiro precisa ser o que o negócio quer que clique. Princípio universal de produto: foco precede polimento.',
      stack: {
        frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        performance: ['Image Optimization', 'Lazy Loading', 'CSS Transitions Nativas'],
        infra: ['Vercel', 'GitHub'],
      },
    },
  },
  {
    id: 'la-maison',
    slug: 'la-maison',
    title: 'Restaurante La Maison',
    tagline: 'Site de alta gastronomia com animações cinematográficas.',
    description:
      'Site de restaurante de alta gastronomia com design cinematográfico premium. Experiência fluida e interativa com animações avançadas.',
    category: 'landing-3d',
    featured: false,
    mainTags: ['React', 'GSAP', 'Framer Motion'],
    allTags: ['React', 'TypeScript', 'Vite', 'GSAP', 'Framer Motion', 'Zustand', 'Tailwind CSS'],
    badges: ['Design Premium', 'Animações'],
    liveUrl: 'https://sitemd-sooty.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/la-maison-restaurant-site',
    cover: '/lamaison-cover-highres.png',
    mobileCover: '/lamaison-mobile-highres.png',
    videoUrl: null,
    detail: {
      problem:
        'Alta gastronomia se vende pela experiência — e quase nenhum site de restaurante fino transmite isso. Templates iguais, fotos estáticas, cardápio em PDF. O cliente que paga R$ 400 num jantar não decide pelo mesmo site que escolhe pizza no iFood. Falta tradução digital do que torna o restaurante especial.',
      solution:
        'La Maison foi pensado como filme curto: cada scroll revela uma cena, cada transição obedece a ritmo coreografado. GSAP ScrollTrigger comanda as timelines, Framer Motion polishes os micro-momentos, Lenis suaviza o input. Hero com vídeo de fundo silencioso, parallax sutil em pratos, reserva integrada — experiência que justifica o ticket antes do cliente entrar na porta.',
      decisions: [
        {
          title: 'GSAP ScrollTrigger no comando',
          body: 'Framer Motion é ótimo para componentes; GSAP é insuperável para timelines longas dirigidas por scroll. Combinei os dois: GSAP para coreografia macro, Framer para hover e tap. Cada um na sua força.',
        },
        {
          title: 'Lenis para smooth scroll',
          body: 'Scroll nativo no Chrome é abrupto demais para vídeo cinematográfico. Lenis interpola o input com inércia controlada — o site "respira" entre seções. Investimento de 5KB que muda a percepção de marca inteira.',
        },
        {
          title: 'Zustand para estado global mínimo',
          body: 'Reserva aberta, idioma, menu mobile. Redux seria canhão para mosca. Zustand resolve em 200 bytes de boilerplate e zero context tree. Estado certo quando o problema é pequeno.',
        },
        {
          title: 'Vídeo de fundo otimizado por device',
          body: 'Desktop carrega MP4 1080p; mobile pega versão 540p comprimida. Detecção via matchMedia + source tags. Cinema sem queimar dados do cliente — princípio que separa polimento de descaso.',
        },
      ],
      learnings:
        'Animação cinematográfica não é "adicionar GSAP" — é direção. Aprendi a storyboarding: que cena revela o quê, em que ordem, com que ritmo. O código vem depois. Princípio: animação que não conta história é animação que distrai. Carrego isso pra todo projeto onde a marca importa mais que a função.',
      stack: {
        frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand'],
        animation: ['GSAP', 'GSAP ScrollTrigger', 'Framer Motion', 'Lenis'],
        infra: ['Vercel', 'Video Optimization'],
      },
    },
  },
  {
    id: 'thumbnail-forge',
    slug: 'thumbnail-forge',
    title: 'Miniatura Forja AI',
    tagline: 'Gerador de thumbnails com IA para alavancar CTR.',
    description:
      'Criador de miniaturas virais com IA para alavancar taxa de cliques. Backend integrado para geração rápida e design responsivo.',
    category: 'saas',
    featured: false,
    mainTags: ['React 19', 'Node.js', 'IA'],
    allTags: ['React v19', 'Vite', 'Node.js', 'Express v5', '@fal-ai/client', 'Lucide-React', 'Vercel'],
    badges: ['IA Integrada', 'Node Backend'],
    liveUrl: 'https://thumbnail-forge-one.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/thumbnail-forge',
    cover: '/thumbnail-cover-highres.png',
    mobileCover: '/thumbnail-mobile-highres.png',
    videoUrl: null,
    detail: {
      problem:
        'Criadores de conteúdo no YouTube/TikTok perdem horas em Photoshop testando variações de thumbnail — e a maioria não tem skill de design para acertar. Ferramentas existentes ou geram arte genérica de banco de imagem, ou cobram US$ 30/mês por algo que o criador usa 3 vezes por semana. Falta gerador que entenda a linguagem de CTR.',
      solution:
        'Miniatura Forja AI é um SaaS leve com um foco: gerar thumbnail viral em 1 prompt. Backend Node.js + Express conversa com fal.ai (modelos de imagem otimizados para velocidade), frontend React 19 entrega preview em segundos com opções de variação. Sem subscription mensal — pay-per-use que combina com o uso real do criador.',
      decisions: [
        {
          title: 'fal.ai no lugar de OpenAI/Stability direto',
          body: 'fal.ai entrega Flux/SDXL em ~2s contra 8s+ na API original. Para UX de "geração ao vivo", isso é o que separa wow de abandono. Decisão de infra virou decisão de produto — mesma lente que apliquei no Brieflyai.',
        },
        {
          title: 'Express v5 com async nativo',
          body: 'Handlers async/await sem wrapper, error middleware centralizado. Código limpo, debug previsível. Versão recente vale quando paga em ergonomia.',
        },
        {
          title: 'Backend separado do frontend',
          body: 'API isolada permite trocar provedor de IA sem tocar no front. Em mercado de IA que muda toda semana, abstração no boundary é seguro essencial.',
        },
        {
          title: 'Lucide React em vez de SVGs inline',
          body: 'Ícones tree-shakeable, importa só o que usa. Bundle final fica enxuto mesmo com 30+ ícones disponíveis. Detalhe pequeno, impacto cumulativo em performance.',
        },
      ],
      learnings:
        'Produto de IA exige obsessão por latência percebida: 2 segundos de espera com preview animado parecem instantâneos; 8 segundos em branco parecem quebrado. Aprendi a desenhar estados de espera como parte do UX, não como afterthought. Princípio: o que o usuário sente vale mais que o tempo no relógio.',
      stack: {
        frontend: ['React 19', 'Vite', 'Lucide React'],
        backend: ['Node.js', 'Express v5', '@fal-ai/client'],
        infra: ['Vercel Serverless'],
      },
    },
  },
  {
    id: 'mario',
    slug: 'mario-bros',
    title: 'Mario Bros',
    tagline: 'Estudo de animações CSS e DOM inspirado no clássico.',
    description:
      'Recriação interativa inspirada no Super Mario Bros, focando em animações, responsividade e engajamento visual.',
    category: 'lab',
    featured: false,
    mainTags: ['HTML5', 'CSS3', 'JavaScript'],
    allTags: ['HTML5', 'CSS3 Web Animation', 'JavaScript Vanilla', 'DOM Manipulation'],
    badges: ['Estudo Frontend'],
    liveUrl: 'https://mario-bros-seven.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/mario-bros',
    cover: '/mario-cover-highres.png',
    mobileCover: '/mario-mobile-highres.png',
    videoUrl: null,
    detail: {
      problem:
        'Tutoriais de animação CSS na internet ensinam o trivial: hover muda cor, botão pulsa. Quase nenhum mostra coreografia real — sequência de keyframes orquestrada, timing function calibrada, fluxo de cena. Para entender animação web de verdade, faltava exercício com escopo maior que um botão.',
      solution:
        'Recriação interativa do Super Mario Bros em HTML5 + CSS3 + JS Vanilla. Cenário com parallax, personagem animado por sprite sheet, blocos quebráveis, sons. Tudo em DOM puro — zero biblioteca. Estudo deliberado de timing, easing e composição de transições. Resultado: jogo navegável que prova domínio do que CSS pode fazer sem JavaScript pesado.',
      decisions: [
        {
          title: 'Vanilla JS sem framework',
          body: 'Objetivo era estudo, não produto. Framework esconderia o que eu queria aprender: event loop, DOM manipulation direta, requestAnimationFrame. Aprende-se mais escrevendo do que importando.',
        },
        {
          title: 'CSS Animation no lugar de JS',
          body: 'Sprite animation por @keyframes + steps() — GPU acelera, JS fica livre para lógica. Performance superior à manipulação imperativa de transform. CSS faz o que CSS faz melhor.',
        },
        {
          title: 'DOM em vez de Canvas',
          body: 'Canvas seria o caminho técnico "certo", mas o ponto era explorar limites do DOM. Resultado: prova que DOM aguenta dezenas de elementos animados a 60fps quando você respeita layout/paint/composite.',
        },
        {
          title: 'Sem build, sem dependência',
          body: 'index.html + style.css + script.js. Abre direto no navegador, edita e refresh. Para estudo, fricção zero é virtude.',
        },
      ],
      learnings:
        'Esse projeto consolidou intuição sobre o que custa caro no browser: layout > paint > composite. Aprendi a diferença entre animar `top` (caro) e `transform: translateY` (barato), entre `box-shadow` em animação (lento) e em transform (rápido). Princípio que carrego: entender a plataforma antes de buscar abstração.',
      stack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript Vanilla'],
        techniques: ['Sprite Animation', 'CSS Keyframes', 'DOM Manipulation', 'requestAnimationFrame'],
        infra: ['Vercel'],
      },
    },
  },
  {
    id: 'tradutor',
    slug: 'tradutor',
    title: 'Tradutor Online',
    tagline: 'Tradutor multi-idiomas com tema dual e detecção automática.',
    description:
      'Tradutor inteligente com suporte a múltiplos idiomas, detecção automática e histórico. Interface elegante com tema claro e escuro.',
    category: 'lab',
    featured: false,
    mainTags: ['JavaScript', 'APIs', 'CSS3'],
    allTags: ['HTML5', 'CSS3', 'JavaScript Avançado (Vanilla JS - ES6+)', 'CSS Variables', 'APIs'],
    badges: ['Estudo JS'],
    liveUrl: 'https://pj-tradutor.vercel.app',
    codeUrl: 'https://github.com/jeanderson-silva8/pj-tradutor',
    cover: '/tradutor-dia-highres.png',
    mobileCover: '/tradutor-mobile-highres.png',
    videoUrl: null,
    detail: {
      problem:
        'Google Tradutor é poderoso mas pesado, cheio de tracking, e força login para histórico. Para tradução rápida e privada — colar texto, escolher idioma, copiar resultado — não havia versão minimalista decente. Boa parte das alternativas é landing de afiliado disfarçada de tradutor.',
      solution:
        'Tradutor enxuto em JS Vanilla com detecção automática de idioma, histórico em localStorage, tema claro/escuro e atalho de teclado para tradução instantânea. Consome API pública de tradução, renderiza resultado em real-time, sem cadastro, sem cookie, sem analytics. Interface respeita prefers-color-scheme e usa CSS Variables para tema dinâmico.',
      decisions: [
        {
          title: 'localStorage no lugar de backend',
          body: 'Histórico é pessoal e local — backend só adicionaria latência, custo e responsabilidade legal (LGPD). localStorage resolve em uma linha e mantém dados onde eles pertencem: no dispositivo do usuário.',
        },
        {
          title: 'CSS Variables para tema',
          body: 'Troca de tema em uma linha (data-theme attribute no html). Sem JS recriando estilos, sem flash de tema errado no carregamento. Plataforma resolve quando você usa direito.',
        },
        {
          title: 'Debounce em vez de botão "Traduzir"',
          body: 'Usuário digita, espera 400ms, traduz automaticamente. Cancela request anterior se digitar de novo. UX fluida que economiza clique sem desperdiçar API.',
        },
        {
          title: 'Vanilla JS deliberadamente',
          body: 'React seria overkill para 3 inputs e 1 output. Vanilla carrega em 50ms, abre em conexão fraca. Ferramenta certa para o tamanho do problema.',
        },
      ],
      learnings:
        'Tradutor "simples" me forçou a pensar em estados de erro reais: API offline, idioma não suportado, texto muito longo, rate limit. Aprendi a desenhar feedback claro para cada caso — princípio que carrego pra qualquer interface que dependa de rede externa.',
      stack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript Vanilla (ES6+)'],
        techniques: ['CSS Variables', 'localStorage', 'Debounce', 'Fetch API'],
        infra: ['Vercel'],
      },
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SECONDARY_PROJECTS = PROJECTS.filter((p) => !p.featured);

export const FILTER_CATEGORIES = [
  { key: 'all',        label: 'Todos' },
  { key: 'saas',       label: 'SaaS / Full Stack' },
  { key: 'landing-3d', label: 'Landing / 3D' },
  { key: 'lab',        label: 'Lab / Estudos' },
];

export const PROFILE = {
  name: 'Jeanderson Silva',
  role: 'Full Stack Developer',
  tagline: 'Construo plataformas SaaS que rodam em produção.',
  email: 'silvajeanderson165@gmail.com',
  whatsapp: 'https://wa.me/5575997067931',
  linkedin: 'https://www.linkedin.com/in/jeanderson-silva-rodrigues821',
  github: 'https://github.com/jeanderson-silva8',
  photo: '/profile.jpeg',
  location: 'Brasil · Luís Eduardo Magalhães',
  stats: {
    projects: 12,
    inProduction: 12,
    yearsCoding: 3,
  },
};
