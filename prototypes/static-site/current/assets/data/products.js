/* ============================================================
   HORIZON PRIME — Product Data (Single Source of Truth)
   ============================================================ */

export const products = [
  {
    id: 'tracker',
    name: 'HorizonTracker Pro',
    slug: 'horizon-tracker-pro',
    pillar: 'TECH',
    category: 'Monitoramento',
    colorVar: 'color-accent-cyan',
    icon: 'assets/images/products/tracker.svg',
    emoji: '📡',
    tagline: 'Monitoramento inteligente com IA para sua infraestrutura',
    description: 'Plataforma de monitoramento 24/7 com alertas preditivos por IA, dashboard unificado multi-ambiente e relatórios automáticos de SLA. Visualize dispositivos, serviços e usuários em tempo real numa interface única.',
    features: [
      'Monitoramento 24/7 com alertas em tempo real',
      'IA preditiva para antecipar falhas antes que ocorram',
      'Dashboard unificado multi-cliente e multi-ambiente',
      'Integração com Slack, Teams, WhatsApp e e-mail',
      'Relatórios automáticos de SLA e disponibilidade',
      'Compatível com Zabbix, Grafana, AWS, Azure e on-premise',
      'App mobile para alertas e consultas em campo'
    ],
    useCases: [
      'MSPs monitorando múltiplos clientes numa plataforma',
      'Indústrias com parque de máquinas e equipamentos distribuídos',
      'Data centers e empresas com infraestrutura crítica'
    ],
    pricing: {
      partner_start: 297,
      partner_end: 697,
      tiers: [
        {
          name: 'Essentials',
          price: 297,
          featured: false,
          features: ['Até 50 ativos', 'Alertas por e-mail e WhatsApp', 'Dashboard básico', 'Histórico 30 dias']
        },
        {
          name: 'Business',
          price: 697,
          featured: true,
          features: ['Até 200 ativos', 'IA preditiva', 'Multi-cliente', 'Histórico 1 ano', 'API integração']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ativos ilimitados', 'SLA dedicado', 'White-label', 'Integrações custom']
        }
      ]
    }
  },
  {
    id: 'shield',
    name: 'HorizonShield',
    slug: 'horizon-shield',
    pillar: 'TECH',
    category: 'Segurança',
    colorVar: 'color-accent-cyan',
    icon: 'assets/images/products/shield.svg',
    emoji: '🛡️',
    tagline: 'Cibersegurança gerenciada para proteger seu negócio',
    description: 'Plataforma SIEM simplificada com monitoramento de ameaças 24/7, análise comportamental de usuários (UEBA), controle de acesso e relatórios automáticos de conformidade LGPD e ISO 27001.',
    features: [
      'SIEM simplificado para PMEs — sem precisar de analista',
      'Score de risco por usuário e dispositivo em tempo real',
      'Relatório automático de conformidade LGPD',
      'Integração nativa com Active Directory e Microsoft 365',
      'Alertas de comportamento anômalo e tentativas de acesso',
      'Dashboard executivo de postura de segurança',
      'Bloqueio automático de ameaças detectadas'
    ],
    useCases: [
      'Escritórios contábeis e jurídicos com dados sensíveis',
      'Clínicas e planos de saúde sob regulação LGPD',
      'PMEs sem equipe de segurança dedicada'
    ],
    pricing: {
      partner_start: 197,
      partner_end: 597,
      tiers: [
        {
          name: 'Starter',
          price: 197,
          featured: false,
          features: ['Até 20 usuários', 'SIEM básico', 'Relatório LGPD mensal', 'Alertas por e-mail']
        },
        {
          name: 'Business',
          price: 597,
          featured: true,
          features: ['Até 100 usuários', 'UEBA + IA', 'ISO 27001 report', 'Bloqueio automático']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Usuários ilimitados', 'SOC gerenciado', 'Resposta a incidentes', 'SLA 4h']
        }
      ]
    }
  },
  {
    id: 'audit',
    name: 'HorizonAudit',
    slug: 'horizon-audit',
    pillar: 'TECH',
    category: 'Produtividade',
    colorVar: 'color-accent-cyan',
    icon: 'assets/images/products/audit.svg',
    emoji: '🔍',
    tagline: 'Auditoria e produtividade com transparência total',
    description: 'Sistema de auditoria corporativa com registro de atividades, análise de produtividade por IA, gestão de tempo e relatórios de compliance. Monitore equipes presenciais e remotas com ética e transparência.',
    features: [
      'Registro de atividades e uso de aplicativos',
      'Capturas de tela inteligentes e configuráveis',
      'Análise de produtividade por IA — qualidade, não só tempo',
      'Alertas de comportamento anômalo e vazamento de dados',
      'Dashboard gerencial em tempo real por equipe',
      'Modo transparente (colaborador sabe que é monitorado)',
      'Exportação de relatórios para compliance e auditoria'
    ],
    useCases: [
      'BPOs e call centers com equipes remotas',
      'Empresas que precisam provar produtividade para clientes',
      'RH gerenciando equipes distribuídas'
    ],
    pricing: {
      partner_start: 147,
      partner_end: 397,
      tiers: [
        {
          name: 'Starter',
          price: 147,
          featured: false,
          features: ['Até 10 usuários', 'Registro de atividades', 'Relatório semanal', 'App desktop']
        },
        {
          name: 'Business',
          price: 397,
          featured: true,
          features: ['Até 50 usuários', 'IA de produtividade', 'Capturas de tela', 'API + integrações']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Usuários ilimitados', 'White-label', 'Relatórios custom', 'SLA dedicado']
        }
      ]
    }
  },
  {
    id: 'sync',
    name: 'HorizonSync',
    slug: 'horizon-sync',
    pillar: 'TECH',
    category: 'Integração',
    colorVar: 'color-accent-cyan',
    icon: 'assets/images/products/sync.svg',
    emoji: '🔄',
    tagline: 'Integração inteligente entre todos os seus sistemas',
    description: 'Plataforma iPaaS com +80 conectores prontos para sincronizar ERPs, CRMs, e-commerces, marketplaces e APIs. Interface drag-and-drop sem código, monitoramento de falhas em tempo real e logs completos.',
    features: [
      '+80 conectores nativos: Omie, Bling, Tiny, Shopify, VTEX',
      'Integração com Mercado Livre, Amazon, Magazine Luiza',
      'Mapeamento visual drag-and-drop sem necessidade de código',
      'Monitoramento de falhas de sincronização em tempo real',
      'Logs de auditoria completos por transação',
      'Webhooks e triggers automáticos configuráveis',
      'Suporte a XML, JSON, CSV e EDI'
    ],
    useCases: [
      'E-commerces sincronizando estoque entre marketplaces',
      'Distribuidoras integrando ERP com transportadoras',
      'Empresas usando múltiplos SaaS que precisam conversar'
    ],
    pricing: {
      partner_start: 247,
      partner_end: 597,
      tiers: [
        {
          name: 'Starter',
          price: 247,
          featured: false,
          features: ['5 integrações ativas', '50k transações/mês', 'Conectores básicos', 'Suporte e-mail']
        },
        {
          name: 'Business',
          price: 597,
          featured: true,
          features: ['25 integrações', '500k transações/mês', 'Todos os conectores', 'Webhooks + API']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ilimitado', 'Conectores custom', 'SLA 99.9%', 'Gerente dedicado']
        }
      ]
    }
  },
  {
    id: 'insight',
    name: 'HorizonInsight',
    slug: 'horizon-insight',
    pillar: 'TECH',
    category: 'Analytics',
    colorVar: 'color-accent-cyan',
    icon: 'assets/images/products/insight.svg',
    emoji: '📊',
    tagline: 'Business Intelligence que transforma dados em decisões',
    description: 'Plataforma de BI com dashboards executivos, ETL automatizado, data warehouse gerenciado e alertas inteligentes por KPI. Conecte +50 fontes de dados e tome decisões baseadas em informação real.',
    features: [
      'Conexão com +50 fontes: planilhas, ERPs, bancos, APIs',
      'Templates prontos por segmento: varejo, indústria, serviços',
      'ETL automatizado — dados sempre atualizados',
      'Alertas automáticos quando KPI sai da faixa esperada',
      'Data warehouse gerenciado, sem infraestrutura',
      'Exportação para PowerPoint e PDF com 1 clique',
      'Compartilhamento de dashboards com acesso controlado'
    ],
    useCases: [
      'Diretores financeiros precisando de visão consolidada',
      'Gerentes comerciais acompanhando metas em tempo real',
      'Controladoria centralizando dados de múltiplas filiais'
    ],
    pricing: {
      partner_start: 297,
      partner_end: 697,
      tiers: [
        {
          name: 'Starter',
          price: 297,
          featured: false,
          features: ['3 dashboards', '5 fontes de dados', 'Atualização diária', '3 usuários']
        },
        {
          name: 'Business',
          price: 697,
          featured: true,
          features: ['15 dashboards', '20 fontes', 'Tempo real', 'Alertas IA', '15 usuários']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ilimitado', 'Data warehouse', 'Data science', 'SLA dedicado']
        }
      ]
    }
  },
  {
    id: 'crm',
    name: 'HorizonCRM',
    slug: 'horizon-crm',
    pillar: 'BIZ',
    category: 'Vendas',
    colorVar: 'color-accent-biz',
    icon: 'assets/images/products/crm.svg',
    emoji: '🤝',
    tagline: 'CRM comercial integrado com WhatsApp para vender mais',
    description: 'CRM com funil de vendas visual, automação de follow-up, gestão de propostas e integração nativa com WhatsApp Business. Dê ao seu time comercial a visibilidade e as ferramentas para converter mais.',
    features: [
      'Funil de vendas visual com arrastar e soltar',
      'WhatsApp Business integrado nativamente no CRM',
      'Automação de cadências de contato (e-mail + WhatsApp)',
      'Proposta comercial com assinatura digital embutida',
      'Gestão de leads com score automático por IA',
      'Relatórios de performance por vendedor e produto',
      'Integração nativa com HorizonERP'
    ],
    useCases: [
      'Times comerciais de empresas de serviços e tecnologia',
      'Distribuidoras com múltiplos representantes',
      'Revendas e parceiros com carteira de clientes'
    ],
    pricing: {
      partner_start: 147,
      partner_end: 397,
      tiers: [
        {
          name: 'Starter',
          price: 147,
          featured: false,
          features: ['3 usuários', 'Funil básico', 'E-mail automação', '1.000 contatos']
        },
        {
          name: 'Business',
          price: 397,
          featured: true,
          features: ['10 usuários', 'WhatsApp integrado', 'IA score leads', 'Propostas digitais']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ilimitado', 'Multi-pipeline', 'API completa', 'Gerente dedicado']
        }
      ]
    }
  },
  {
    id: 'erp',
    name: 'HorizonERP',
    slug: 'horizon-erp',
    pillar: 'BIZ',
    category: 'Gestão',
    colorVar: 'color-accent-biz',
    icon: 'assets/images/products/erp.svg',
    emoji: '🏢',
    tagline: 'ERP completo do pedido ao balanço, sem complicação',
    description: 'Sistema ERP modular com financeiro, estoque, compras, vendas, fiscal completo (NF-e, NFS-e, MDF-e) e conciliação bancária automática. Gestão empresarial de verdade para empresas que querem escalar.',
    features: [
      'Emissão fiscal completa: NF-e, NFS-e, MDF-e, CT-e',
      'Conciliação bancária automática por OFX e OpenFinance',
      'Multi-empresa e multi-filial na mesma licença',
      'App mobile para aprovações e consultas',
      'Gestão de estoque com múltiplos almoxarifados',
      'Integração bancária com +20 bancos',
      'Módulo de compras com workflow de aprovação'
    ],
    useCases: [
      'Indústrias e distribuidoras com operação complexa',
      'Comércio varejista com múltiplas filiais',
      'Empresas de serviços com contrato recorrente'
    ],
    pricing: {
      partner_start: 397,
      partner_end: 797,
      tiers: [
        {
          name: 'Starter',
          price: 397,
          featured: false,
          features: ['1 empresa', 'Fiscal + Financeiro', 'Estoque básico', '3 usuários']
        },
        {
          name: 'Business',
          price: 797,
          featured: true,
          features: ['Multi-empresa', 'Módulos completos', 'Conciliação auto', '15 usuários']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ilimitado', 'Integração ERP legado', 'BI nativo', 'SLA dedicado']
        }
      ]
    }
  },
  {
    id: 'flow',
    name: 'HorizonFlow',
    slug: 'horizon-flow',
    pillar: 'BIZ',
    category: 'Processos',
    colorVar: 'color-accent-biz',
    icon: 'assets/images/products/flow.svg',
    emoji: '⚡',
    tagline: 'Automatize processos e projetos sem escrever código',
    description: 'Plataforma no-code para gestão de processos e projetos com kanban visual, workflows automáticos, formulários inteligentes e aprovações. Do RH ao operacional, tudo fluindo com eficiência.',
    features: [
      'Workflows visuais drag-and-drop sem código',
      'Kanban e Gantt para projetos e tarefas',
      'Formulários inteligentes com lógica condicional',
      'Aprovações e notificações por WhatsApp e e-mail',
      'SLA automático com alertas de prazo',
      'Relatório de gargalos e produtividade por processo',
      'Integração com HorizonERP e HorizonCRM'
    ],
    useCases: [
      'RH digitalizando processos de admissão e férias',
      'Financeiro com workflow de aprovação de pagamentos',
      'Operações com checklist e controle de qualidade'
    ],
    pricing: {
      partner_start: 197,
      partner_end: 447,
      tiers: [
        {
          name: 'Starter',
          price: 197,
          featured: false,
          features: ['5 usuários', '3 fluxos ativos', 'Formulários básicos', 'E-mail notificação']
        },
        {
          name: 'Business',
          price: 447,
          featured: true,
          features: ['20 usuários', 'Fluxos ilimitados', 'WhatsApp + aprovações', 'Relatórios SLA']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ilimitado', 'Integrações API', 'White-label', 'Fluxos complexos']
        }
      ]
    }
  },
  {
    id: 'people',
    name: 'HorizonPeople',
    slug: 'horizon-people',
    pillar: 'BIZ',
    category: 'RH',
    colorVar: 'color-accent-biz',
    icon: 'assets/images/products/people.svg',
    emoji: '👥',
    tagline: 'Gestão de pessoas do ponto ao treinamento sem planilhas',
    description: 'Plataforma completa de RH com controle de ponto eletrônico (Portaria 671), férias, holerite digital, onboarding automatizado e LMS de treinamentos. Digitalize o RH e libere tempo para o que importa.',
    features: [
      'Ponto eletrônico conforme Portaria 671 do MTE',
      'App mobile para colaborador: ponto, férias, documentos',
      'Onboarding 100% digital com assinatura eletrônica',
      'LMS embutido para treinamentos: NRs, compliance, integração',
      'Holerite digital e comprovantes de pagamento',
      'Gestão de férias com calendário e aprovação automática',
      'Integração com folhas: Domínio, ADP, Senior, Questor'
    ],
    useCases: [
      'Empresas com +10 colaboradores querendo digitalizar o RH',
      'Empresas com equipes em campo precisando de ponto móvel',
      'RH que precisa provar conformidade trabalhista'
    ],
    pricing: {
      partner_start: 247,
      partner_end: 597,
      tiers: [
        {
          name: 'Starter',
          price: 247,
          featured: false,
          features: ['Até 20 funcionários', 'Ponto eletrônico', 'Férias digital', 'Holerite online']
        },
        {
          name: 'Business',
          price: 597,
          featured: true,
          features: ['Até 100 funcionários', 'LMS treinamentos', 'Onboarding auto', 'App mobile']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ilimitado', 'Integrações folha', 'BI de RH', 'SLA dedicado']
        }
      ]
    }
  },
  {
    id: 'sign',
    name: 'HorizonSign',
    slug: 'horizon-sign',
    pillar: 'BIZ',
    category: 'Documentos',
    colorVar: 'color-accent-biz',
    icon: 'assets/images/products/sign.svg',
    emoji: '✍️',
    tagline: 'Assinatura eletrônica com validade jurídica e gestão completa',
    description: 'Plataforma de assinatura digital com validade jurídica (MP 2.200-2 e Lei 14.063/2020), gestão de documentos, templates de contratos e trilha de auditoria completa. Elimine papel e agilize seus contratos.',
    features: [
      'Validade jurídica conforme MP 2.200-2 e Lei 14.063/2020',
      'Assinatura por WhatsApp, e-mail, SMS ou link',
      'Templates editáveis de contratos por segmento',
      'Trilha de auditoria com hash e carimbo de tempo',
      'Integração nativa com HorizonCRM e HorizonPeople',
      'Gestão de documentos com pastas e permissões',
      'Alertas de vencimento e renovação automática'
    ],
    useCases: [
      'RH assinando contratos de trabalho e aditivos',
      'Vendas fechando propostas comerciais digitalmente',
      'Financeiro com contratos de prestação de serviço'
    ],
    pricing: {
      partner_start: 97,
      partner_end: 247,
      tiers: [
        {
          name: 'Starter',
          price: 97,
          featured: false,
          features: ['50 documentos/mês', 'E-mail + link', 'Templates básicos', 'Trilha auditoria']
        },
        {
          name: 'Business',
          price: 247,
          featured: true,
          features: ['250 documentos/mês', 'WhatsApp + SMS', 'Templates ilimitados', 'API + integrações']
        },
        {
          name: 'Enterprise',
          price: 0,
          featured: false,
          features: ['Ilimitado', 'White-label', 'Assinatura avançada ICP-Brasil', 'SLA dedicado']
        }
      ]
    }
  }
];
