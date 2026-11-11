import type {LucideIcon} from 'lucide-react';
import {
  ArrowRightLeft,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cable,
  CheckCircle2,
  Cpu,
  Database,
  FileCog,
  Fingerprint,
  Gauge,
  Layers3,
  MessagesSquare,
  Network,
  Target,
  Workflow
} from 'lucide-react';

export const whatsappNumber = '5531997768394';
export const whatsappDisplay = '(31) 99776-8394';
export const defaultWhatsAppMessage =
  'Olá! Vim pelo site da Horizon Prime e gostaria de mais informações.';

export function createWhatsAppLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type NavigationItem = {
  label: string;
  href: '/' | '/softwares' | '/sob-demanda' | '/contato';
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Software = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  benefits: string[];
  partnerPrice: number;
  clientPrice: number;
  icon: SoftwareIconKey;
};

export type SoftwareIconKey =
  | 'radar'
  | 'shield'
  | 'cloud'
  | 'analytics'
  | 'sync'
  | 'crm'
  | 'finance'
  | 'erp'
  | 'people'
  | 'ai';

type SoftwareGroup = {
  id: 'technology' | 'business';
  label: string;
  accent: string;
  description: string;
  softwares: Software[];
};

type PageContent = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{label: string; value: string; detail: string}>;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: FeatureItem[];
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    steps: FeatureItem[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  softwarePreview: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  customFactory: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  differentials: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  contactPreview: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  softwaresPage: {
    eyebrow: string;
    title: string;
    description: string;
    noteTitle: string;
    note: string;
  };
  customPage: {
    eyebrow: string;
    title: string;
    description: string;
    pillarsTitle: string;
    processTitle: string;
    casesTitle: string;
    pillars: FeatureItem[];
    process: FeatureItem[];
    cases: string[];
    ctaTitle: string;
    ctaDescription: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
      label: string;
      message: string;
      icon: LucideIcon;
    }>;
    whatsappTitle: string;
    whatsappDescription: string;
    whatsappButton: string;
    humanNote: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    contactTitle: string;
  };
};

const softwareGroups: SoftwareGroup[] = [
  {
    id: 'technology',
    label: 'Softwares de Tecnologia',
    accent: 'from-cyan-400/35 via-sky-400/15 to-transparent',
    description:
      'Soluções para infraestrutura, segurança, dados, integração e visibilidade operacional.',
    softwares: [
      {
        id: 'tracker',
        name: 'HorizonTracker',
        tagline: 'Monitoramento e rastreabilidade com visão operacional em tempo real.',
        description:
          'Centraliza eventos, ativos, usuários e serviços para transformar rotina técnica em gestão orientada por dados.',
        problem:
          'Resolve a falta de visibilidade sobre desempenho, uso de recursos e histórico operacional.',
        benefits: [
          'Painel unificado para leitura operacional em tempo real.',
          'Rastreabilidade mais clara para incidentes e gargalos.',
          'Mais previsibilidade para times técnicos e gestão.'
        ],
        partnerPrice: 297,
        clientPrice: 697,
        icon: 'radar'
      },
      {
        id: 'shield',
        name: 'HorizonShield',
        tagline: 'Segurança gerenciada com foco em risco, conformidade e continuidade.',
        description:
          'Organiza eventos de segurança, acessos sensíveis e sinais de ameaça em um painel claro para tomada de decisão.',
        problem:
          'Resolve a dificuldade de identificar riscos, acessos indevidos e pontos de fragilidade antes que virem incidente.',
        benefits: [
          'Visibilidade de risco com leitura mais executiva.',
          'Monitoramento mais estruturado de acessos e eventos.',
          'Apoio à conformidade e continuidade operacional.'
        ],
        partnerPrice: 197,
        clientPrice: 597,
        icon: 'shield'
      },
      {
        id: 'cloud',
        name: 'HorizonCloud',
        tagline: 'Governança de nuvem, disponibilidade e controle de custos em uma única camada.',
        description:
          'Consolida monitoramento de ambientes cloud, consumo, backups e políticas de operação para dar previsibilidade técnica e financeira.',
        problem:
          'Resolve ambientes em nuvem desorganizados, com pouca governança e baixa previsibilidade de custo.',
        benefits: [
          'Mais controle sobre disponibilidade, backup e consumo.',
          'Governança de nuvem com menos improviso.',
          'Redução de surpresas técnicas e financeiras.'
        ],
        partnerPrice: 347,
        clientPrice: 797,
        icon: 'cloud'
      },
      {
        id: 'analytics',
        name: 'HorizonAnalytics',
        tagline: 'Dashboards executivos para transformar dados dispersos em decisões práticas.',
        description:
          'Conecta fontes de dados, organiza indicadores e entrega leitura executiva para gestão, operação e performance.',
        problem:
          'Resolve a dependência de planilhas, relatórios manuais e baixa confiança nos números do negócio.',
        benefits: [
          'Indicadores organizados para decisão mais rápida.',
          'Menos dependência de planilhas e consolidações manuais.',
          'Leitura clara para operação, liderança e diretoria.'
        ],
        partnerPrice: 297,
        clientPrice: 697,
        icon: 'analytics'
      },
      {
        id: 'sync',
        name: 'HorizonSync',
        tagline: 'Integra sistemas, APIs e bases legadas sem criar mais retrabalho.',
        description:
          'Padroniza trocas entre plataformas, automatiza fluxos de dados e reduz falhas causadas por operações desconectadas.',
        problem:
          'Resolve retrabalho operacional causado por sistemas que não se conversam e integrações frágeis.',
        benefits: [
          'Menos retrabalho entre áreas e sistemas.',
          'Fluxos de dados mais consistentes e rastreáveis.',
          'Integrações pensadas para reduzir ruptura operacional.'
        ],
        partnerPrice: 247,
        clientPrice: 597,
        icon: 'sync'
      }
    ]
  },
  {
    id: 'business',
    label: 'Softwares Convencionais',
    accent: 'from-emerald-400/30 via-teal-400/10 to-transparent',
    description:
      'Soluções para comercial, financeiro, operação, pessoas e IA aplicada ao dia a dia.',
    softwares: [
      {
        id: 'crm',
        name: 'HorizonCRM',
        tagline: 'Gestão comercial mais clara, previsível e conectada aos canais de atendimento.',
        description:
          'Organiza funil, propostas, follow-up e relacionamento para dar escala ao processo comercial.',
        problem:
          'Resolve perda de oportunidades, follow-up inconsistente e baixa visibilidade do time de vendas.',
        benefits: [
          'Funil mais claro para gestão e equipe comercial.',
          'Melhor acompanhamento de oportunidades e propostas.',
          'Mais consistência no processo de venda.'
        ],
        partnerPrice: 147,
        clientPrice: 397,
        icon: 'crm'
      },
      {
        id: 'finance',
        name: 'HorizonFinance',
        tagline: 'Controle financeiro com mais previsibilidade, disciplina e menos planilhas.',
        description:
          'Concentra fluxo de caixa, cobranças, conciliações e aprovações em uma rotina financeira mais enxuta.',
        problem:
          'Resolve retrabalho financeiro, baixa previsibilidade de caixa e controles distribuídos em múltiplas planilhas.',
        benefits: [
          'Mais previsibilidade para caixa e rotina financeira.',
          'Menos dependência de planilhas paralelas.',
          'Processos financeiros mais organizados e auditáveis.'
        ],
        partnerPrice: 197,
        clientPrice: 447,
        icon: 'finance'
      },
      {
        id: 'erp',
        name: 'HorizonERP',
        tagline: 'Gestão integrada para empresas que precisam operar com mais consistência.',
        description:
          'Unifica financeiro, estoque, compras, fiscal e operação para reduzir gargalos entre áreas.',
        problem:
          'Resolve processos fragmentados, retrabalho entre departamentos e dificuldade de escalar a gestão.',
        benefits: [
          'Integração real entre áreas críticas do negócio.',
          'Menos retrabalho entre operação, fiscal e financeiro.',
          'Base mais sólida para escalar a gestão.'
        ],
        partnerPrice: 397,
        clientPrice: 797,
        icon: 'erp'
      },
      {
        id: 'people',
        name: 'HorizonPeople',
        tagline: 'Pessoas, rotinas e conformidade trabalhista organizadas em uma mesma plataforma.',
        description:
          'Estrutura ponto, férias, documentos, onboarding e rotinas de RH com mais controle e menos esforço operacional.',
        problem:
          'Resolve processos de RH dispersos, excesso de tarefas manuais e baixa rastreabilidade documental.',
        benefits: [
          'Rotinas de RH mais enxutas e centralizadas.',
          'Mais controle sobre documentos e jornadas.',
          'Melhor experiência operacional para equipe e gestão.'
        ],
        partnerPrice: 247,
        clientPrice: 597,
        icon: 'people'
      },
      {
        id: 'ai',
        name: 'HorizonAI',
        tagline: 'IA aplicada ao negócio para acelerar atendimento, análise e execução.',
        description:
          'Apoia equipes com automações inteligentes, triagem, respostas assistidas e apoio à decisão em processos críticos.',
        problem:
          'Resolve tempo perdido com tarefas repetitivas, consultas manuais e decisões operacionais lentas.',
        benefits: [
          'Acelera análise e execução em processos recorrentes.',
          'Apoia atendimento e operação com mais velocidade.',
          'Cria ganhos práticos sem inflar a complexidade do time.'
        ],
        partnerPrice: 247,
        clientPrice: 597,
        icon: 'ai'
      }
    ]
  }
];

const sharedContent: PageContent = {
  metadata: {
    title: 'Horizon Prime | Software, consultoria e SaaS para operações mais inteligentes',
    description:
      'A Horizon Prime une software sob demanda, consultoria estratégica e catálogo SaaS para reduzir custos, aumentar produtividade e centralizar dados com inteligência.'
  },
  navigation: [
    {label: 'Home', href: '/'},
    {label: 'Softwares', href: '/softwares'},
    {label: 'Sob Demanda', href: '/sob-demanda'},
    {label: 'Contato', href: '/contato'}
  ],
  hero: {
    eyebrow: 'Software, consultoria estratégica e catálogo SaaS',
    title: 'Tecnologia pensada para reduzir custos, centralizar dados e dar mais clareza para o negócio.',
    description:
      'A Horizon Prime atua onde a operação trava: sistemas desconectados, baixa visibilidade, retrabalho e decisões sem base consolidada. Estruturamos software, integração e inteligência para transformar tecnologia em operação mais eficiente.',
    primaryCta: 'Falar no WhatsApp',
    secondaryCta: 'Conhecer os softwares',
    stats: [
      {
        label: 'Experiência',
        value: '8 anos',
        detail: 'Atuação contínua no mercado de tecnologia com visão prática.'
      },
      {
        label: 'Frentes de atuação',
        value: '3 pilares',
        detail: 'Consultoria estratégica, softwares próprios e fábrica sob demanda.'
      },
      {
        label: 'Objetivo',
        value: 'Mais inteligência',
        detail: 'Redução de custo, produtividade e centralização de dados.'
      }
    ]
  },
  overview: {
    eyebrow: 'O que a Horizon Prime faz',
    title: 'Estrutura tecnologia como ferramenta de gestão, eficiência e crescimento sustentável.',
    description:
      'A Horizon Prime combina 8 anos de experiência no mercado de tecnologia com uma visão moderna de inovação, desenvolvendo soluções que reduzem custos, aumentam a produtividade e apoiam decisões com mais inteligência.',
    pillars: [
      {
        title: 'Consultoria estratégica',
        description:
          'Mapeamos gargalos, riscos e oportunidades para definir uma direção prática de tecnologia para o negócio.',
        icon: BriefcaseBusiness
      },
      {
        title: 'Catálogo SaaS',
        description:
          'Oferecemos softwares próprios para áreas críticas como monitoramento, segurança, integração, comercial, financeiro e gestão.',
        icon: Layers3
      },
      {
        title: 'Fábrica de software',
        description:
          'Desenvolvemos soluções sob medida quando o desafio do cliente exige automação, integração ou produto personalizado.',
        icon: Workflow
      }
    ]
  },
  problem: {
    eyebrow: 'Problema do mercado',
    title: 'Muitas empresas ainda crescem com tecnologia fragmentada e pouca leitura real da operação.',
    description:
      'A tecnologia evolui rapidamente, mas muitas empresas ainda operam com processos manuais, sistemas desconectados e pouca visibilidade dos dados.',
    items: [
      {
        title: 'Processos manuais demais',
        description:
          'Rotinas críticas continuam dependendo de planilhas, retrabalho e validações dispersas.',
        icon: FileCog
      },
      {
        title: 'Sistemas que não se conversam',
        description:
          'Informações importantes ficam espalhadas entre ERP, CRM, financeiro, nuvem e ferramentas operacionais.',
        icon: Cable
      },
      {
        title: 'Dados sem leitura executiva',
        description:
          'Mesmo com volume de informação disponível, a gestão não consegue decidir com rapidez e segurança.',
        icon: Database
      },
      {
        title: 'Custo operacional escondido',
        description:
          'Falhas de processo, retrabalho e decisões tardias aumentam custo sem que a empresa perceba de imediato.',
        icon: Gauge
      }
    ]
  },
  solution: {
    eyebrow: 'Como resolvemos',
    title: 'Combinamos visão estratégica, execução técnica e software próprio para encurtar o caminho entre problema e resultado.',
    description:
      'Em vez de empilhar ferramentas, estruturamos uma arquitetura mais clara para a operação: o que automatizar, o que integrar, o que comprar pronto e o que desenvolver sob medida.',
    steps: [
      {
        title: 'Diagnóstico do cenário atual',
        description:
          'Entendemos fluxos, sistemas, dependências e pontos de perda operacional.',
        icon: Target
      },
      {
        title: 'Definição da melhor abordagem',
        description:
          'Indicamos quando vale usar SaaS próprio, integração, automação ou desenvolvimento personalizado.',
        icon: BrainCircuit
      },
      {
        title: 'Implementação com visão prática',
        description:
          'Executamos com foco em adoção, clareza operacional e impacto real no negócio.',
        icon: Cpu
      },
      {
        title: 'Evolução orientada por dados',
        description:
          'A solução não para na entrega. Ajustamos, conectamos e expandimos conforme a operação amadurece.',
        icon: CheckCircle2
      }
    ]
  },
  solutions: {
    eyebrow: 'Soluções Horizon Prime',
    title: 'Três formas de atacar o mesmo problema: ineficiência operacional e baixa inteligência de negócio.',
    description:
      'A Horizon Prime organiza sua atuação para atender empresas em diferentes estágios de maturidade tecnológica, sem forçar uma solução única para todos os cenários.',
    items: [
      {
        title: 'Consultoria estratégica',
        description:
          'Para empresas que precisam clarear prioridades, arquitetura e próximos passos antes de investir em tecnologia.',
        icon: BriefcaseBusiness
      },
      {
        title: 'Softwares próprios',
        description:
          'Para empresas que precisam acelerar implantação com soluções SaaS já estruturadas e prontas para evolução.',
        icon: Layers3
      },
      {
        title: 'Fábrica de software sob demanda',
        description:
          'Para cenários que exigem automações, integrações, IA aplicada ou desenvolvimento totalmente personalizado.',
        icon: Workflow
      }
    ]
  },
  softwarePreview: {
    eyebrow: 'Softwares Horizon Prime',
    title: 'Um catálogo SaaS pensado para resolver problemas reais de tecnologia, operação e gestão.',
    description:
      'Organizamos o portfólio em duas frentes complementares para facilitar entendimento comercial: softwares de tecnologia e softwares convencionais.',
    ctaLabel: 'Ver catálogo completo'
  },
  customFactory: {
    eyebrow: 'Fábrica de software sob demanda',
    title: 'Quando o desafio não cabe em uma ferramenta pronta, a Horizon Prime desenvolve a solução certa.',
    description:
      'A frente sob demanda existe para empresas que precisam sair de controles improvisados e construir tecnologia aderente ao processo real.',
    items: [
      {
        title: 'Desenvolvimento personalizado',
        description:
          'Plataformas internas, portais, módulos específicos e sistemas que acompanham a operação do cliente.',
        icon: Workflow
      },
      {
        title: 'Automações de rotina',
        description:
          'Redução de tarefas repetitivas, menor dependência manual e ganho direto de produtividade.',
        icon: Cpu
      },
      {
        title: 'Integrações entre sistemas',
        description:
          'Conectamos plataformas existentes para reduzir retrabalho e centralizar informação.',
        icon: Network
      },
      {
        title: 'IA aplicada ao negócio',
        description:
          'Casos práticos de atendimento, apoio à decisão, triagem e inteligência operacional.',
        icon: Bot
      }
    ]
  },
  differentials: {
    eyebrow: 'Diferenciais',
    title: 'Posicionamento mais estratégico, execução mais prática e foco claro em valor operacional.',
    description:
      'A Horizon Prime foi desenhada para não parecer apenas uma software house nem apenas uma consultoria. A proposta é unir visão, produto e execução.',
    items: [
      {
        title: 'Visão de negócio',
        description:
          'Cada solução é apresentada pelo problema que resolve, não apenas pela tecnologia envolvida.',
        icon: Target
      },
      {
        title: 'Arquitetura comercial clara',
        description:
          'O catálogo separa portfólio SaaS, consultoria e sob demanda com muito mais clareza para decisão.',
        icon: MessagesSquare
      },
      {
        title: 'Integração como prioridade',
        description:
          'A proposta parte da realidade das empresas: quase sempre o desafio está na conexão entre áreas e sistemas.',
        icon: ArrowRightLeft
      },
      {
        title: 'Inovação com uso prático',
        description:
          'IA, automação e dados entram para gerar eficiência e leitura executiva, não para virar discurso vazio.',
        icon: Fingerprint
      }
    ]
  },
  contactPreview: {
    eyebrow: 'Contato',
    title: 'Se você precisa entender qual caminho faz mais sentido, o primeiro passo é uma conversa direta.',
    description:
      'A Horizon Prime atende empresas que buscam mais clareza para decidir entre software pronto, desenvolvimento sob medida e integração do que já existe.',
    bullets: [
      'Atendimento comercial com contexto de negócio.',
      'Mensagem pronta no WhatsApp para agilizar o contato.',
      'Conversa orientada para entender cenário, prioridade e próxima etapa.'
    ],
    primaryCta: 'Conversar no WhatsApp',
    secondaryCta: 'Ir para contato'
  },
  finalCta: {
    title: 'Tecnologia faz mais sentido quando deixa a operação mais simples, mais conectada e mais inteligente.',
    description:
      'Se a sua empresa convive com retrabalho, dados dispersos e pouca visibilidade, a Horizon Prime pode ajudar a estruturar a próxima etapa.',
    primaryCta: 'Falar agora no WhatsApp',
    secondaryCta: 'Conhecer a fábrica sob demanda'
  },
  softwaresPage: {
    eyebrow: 'Catálogo SaaS',
    title: 'Softwares Horizon Prime organizados para facilitar entendimento comercial e acelerar decisão.',
    description:
      'Cada produto foi descrito com foco em clareza: o que faz, qual problema resolve, faixa comercial para parceiro TI e valor sugerido para cliente final.',
    noteTitle: 'Estrutura comercial',
    note:
      'Os valores abaixo foram organizados como preço inicial para parceiro TI e valor inicial sugerido para comercialização ao cliente final.'
  },
  customPage: {
    eyebrow: 'Fábrica de software Horizon Prime',
    title: 'Projetos sob medida para empresas que precisam automatizar, integrar e evoluir com mais inteligência.',
    description:
      'A frente sob demanda da Horizon Prime existe para transformar operação travada em fluxo mais previsível, conectado e escalável.',
    pillarsTitle: 'Frentes de atuação',
    processTitle: 'Como conduzimos os projetos',
    casesTitle: 'Tipos de demanda que fazem sentido nessa frente',
    pillars: [
      {
        title: 'Desenvolvimento personalizado',
        description:
          'Construção de sistemas, módulos e portais aderentes ao processo do cliente.',
        icon: Workflow
      },
      {
        title: 'Automações',
        description:
          'Eliminação de tarefas manuais, aprovações repetitivas e fluxos operacionais travados.',
        icon: Cpu
      },
      {
        title: 'Integrações',
        description:
          'Conexão entre ERPs, CRMs, bancos de dados, APIs, sistemas legados e plataformas de terceiros.',
        icon: Network
      },
      {
        title: 'IA aplicada ao negócio',
        description:
          'Assistentes internos, triagem inteligente, apoio à decisão e automações orientadas por IA.',
        icon: Bot
      }
    ],
    process: [
      {
        title: 'Entendimento do processo',
        description:
          'Começamos pelo fluxo real da operação, não pela tecnologia isolada.',
        icon: BriefcaseBusiness
      },
      {
        title: 'Definição de arquitetura',
        description:
          'Escolhemos a estrutura mais adequada para entrega, manutenção e evolução.',
        icon: Layers3
      },
      {
        title: 'Implementação orientada à adoção',
        description:
          'Entregamos pensando em uso real, integração e clareza para a equipe.',
        icon: CheckCircle2
      },
      {
        title: 'Evolução contínua',
        description:
          'Projetos podem crescer em ciclos, acompanhando maturidade e prioridades do cliente.',
        icon: BrainCircuit
      }
    ],
    cases: [
      'Portais e plataformas internas para operação ou atendimento.',
      'Integração entre sistemas que hoje funcionam de forma isolada.',
      'Automação de fluxos comerciais, financeiros, operacionais ou de RH.',
      'Módulos específicos que não fazem sentido dentro de um ERP genérico.',
      'Iniciativas com IA aplicada para acelerar análise e execução.'
    ],
    ctaTitle: 'Nem todo problema de negócio deve ser empurrado para um sistema genérico.',
    ctaDescription:
      'Quando a operação pede aderência real, a frente sob demanda da Horizon Prime organiza tecnologia em torno do processo.'
  },
  contactPage: {
    eyebrow: 'Contato Horizon Prime',
    title: 'Fale com a Horizon Prime pelo WhatsApp e explique seu cenário com simplicidade.',
    description:
      'A conversa começa com contexto, não com pressão. Você pode chegar com uma necessidade aberta e a equipe ajuda a direcionar se o melhor caminho é software pronto, consultoria ou projeto sob medida.',
    cards: [
      {
        title: 'Quero entender o catálogo SaaS',
        description:
          'Ideal para quem quer conhecer os softwares da Horizon Prime e entender qual faz sentido para a operação.',
        label: 'Falar sobre softwares',
        message:
          'Olá! Vim pelo site da Horizon Prime e gostaria de mais informações sobre os softwares.',
        icon: Layers3
      },
      {
        title: 'Preciso de algo sob medida',
        description:
          'Para empresas que precisam desenvolver uma solução, automatizar processos ou integrar sistemas.',
        label: 'Falar sobre sob demanda',
        message:
          'Olá! Vim pelo site da Horizon Prime e gostaria de falar sobre um projeto sob demanda.',
        icon: Workflow
      },
      {
        title: 'Quero conversar sobre estratégia',
        description:
          'Para cenários em que a empresa precisa organizar melhor a direção tecnológica antes da implementação.',
        label: 'Falar sobre estratégia',
        message:
          'Olá! Vim pelo site da Horizon Prime e gostaria de conversar sobre uma avaliação estratégica.',
        icon: BriefcaseBusiness
      }
    ],
    whatsappTitle: 'WhatsApp direto',
    whatsappDescription:
      'Use o botão abaixo com a mensagem pronta para iniciar o contato com a Horizon Prime.',
    whatsappButton: 'Abrir WhatsApp com mensagem pronta',
    humanNote:
      'Mensagem padrão: "Olá! Vim pelo site da Horizon Prime e gostaria de mais informações."'
  },
  footer: {
    description:
      'Software sob demanda, consultoria estratégica e catálogo SaaS para empresas que precisam operar com mais clareza, produtividade e inteligência.',
    quickLinksTitle: 'Navegação',
    contactTitle: 'Fale com a Horizon Prime'
  }
};

export const siteContent = sharedContent;
export const siteSoftwareGroups = softwareGroups;
