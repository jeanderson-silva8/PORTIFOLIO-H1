/* ═══════════════════════════════════════════════════════════
   PROCESS — Como trabalho, do problema ao deploy
   4 etapas conectadas por linha animada
   ═══════════════════════════════════════════════════════════ */

import { Lightbulb, Compass, Hammer, LineChart } from 'lucide-react';

export const PROCESS_STEPS = [
  {
    index: '01',
    icon: Lightbulb,
    title: 'Pensar',
    short: 'Entender antes de executar.',
    body: 'Todo projeto nasce de perguntas certas, não de código. Qual o problema real? Quem são os usuários? Questões críticas definem a direção. Antes de escrever uma linha, o problema precisa caber em uma frase clara.',
  },
  {
    index: '02',
    icon: Compass,
    title: 'Arquitetar',
    short: 'Decisões conscientes, não acidentes.',
    body: 'Escolhas técnicas — stack, arquitetura, padrões, autenticação — são decisões estratégicas documentadas. Penso em escalabilidade, segurança e manutenibilidade desde o início. Refatoração é planejamento, não improviso.',
  },
  {
    index: '03',
    icon: Hammer,
    title: 'Construir',
    short: 'Iteração rápida, código sustentável.',
    body: 'Implementação incremental: PRs pequenos, feedback constante, deploys frequentes. Tipagem forte, validação em camadas, observabilidade desde o primeiro commit. Código que funciona hoje e se mantém amanhã.',
  },
  {
    index: '04',
    icon: LineChart,
    title: 'Iterar',
    short: 'Melhoria contínua, sem ego.',
    body: 'Métricas reais, feedback de usuários, refatoração baseada em dados. Deploy é começo, não fim. Ouço, meço, ajusto. Produto vivo exige atenção constante, não heroísmo pontual.',
  },
];
