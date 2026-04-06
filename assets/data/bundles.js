/* ============================================================
   HORIZON PRIME — Bundle Data
   ============================================================ */

export const bundles = [
  {
    id: 'starter',
    name: 'Horizon Starter Suite',
    tagline: 'Para PMEs que querem começar a transformação digital',
    products: ['HorizonCRM', 'HorizonFlow', 'HorizonSign'],
    productIds: ['crm', 'flow', 'sign'],
    partnerPrice: 397,
    clientPrice: 797,
    savings: 30,
    featured: false,
    color: 'biz',
    features: [
      'CRM com WhatsApp integrado',
      'Gestão de processos no-code',
      'Assinatura eletrônica legal',
      'Até 10 usuários',
      'Suporte e-mail e chat'
    ],
    ideal: 'Pequenas empresas, autônomos e MEIs que querem digitalizar vendas e documentos'
  },
  {
    id: 'tech',
    name: 'Horizon Tech Suite',
    tagline: 'Para empresas de TI e MSPs que querem receita recorrente',
    products: ['HorizonTracker Pro', 'HorizonShield', 'HorizonAudit', 'HorizonSync'],
    productIds: ['tracker', 'shield', 'audit', 'sync'],
    partnerPrice: 997,
    clientPrice: 1997,
    savings: 40,
    featured: false,
    color: 'tech',
    features: [
      'Monitoramento com IA multi-cliente',
      'Cibersegurança gerenciada LGPD',
      'Auditoria e produtividade',
      'Integração de sistemas',
      'Dashboard unificado parceiro'
    ],
    ideal: 'MSPs e revendas de TI que querem oferecer managed services ao cliente'
  },
  {
    id: 'business',
    name: 'Horizon Business Suite',
    tagline: 'Para empresas que querem gestão completa em uma plataforma',
    products: ['HorizonERP', 'HorizonCRM', 'HorizonPeople', 'HorizonSign', 'HorizonInsight'],
    productIds: ['erp', 'crm', 'people', 'sign', 'insight'],
    partnerPrice: 1497,
    clientPrice: 2797,
    savings: 35,
    featured: true,
    color: 'primary',
    features: [
      'ERP modular com fiscal completo',
      'CRM + WhatsApp para times de vendas',
      'RH digital com ponto e treinamentos',
      'Contratos com assinatura eletrônica',
      'BI com dashboards executivos',
      'Até 30 usuários incluídos'
    ],
    ideal: 'Médias empresas que querem substituir múltiplos sistemas por uma suíte integrada'
  },
  {
    id: 'prime',
    name: 'Horizon Prime Suite',
    tagline: 'A plataforma completa. 10 produtos. Um único parceiro.',
    products: ['Todos os 10 produtos Horizon Prime'],
    productIds: ['tracker', 'shield', 'audit', 'sync', 'insight', 'crm', 'erp', 'flow', 'people', 'sign'],
    partnerPrice: 2497,
    clientPrice: 4997,
    savings: 45,
    featured: false,
    color: 'gradient',
    features: [
      'Todos os 10 produtos incluídos',
      'Usuários ilimitados',
      'Onboarding dedicado',
      'Gerente de conta exclusivo',
      'SLA 99.9% garantido',
      'Treinamento da equipe incluso',
      'White-label disponível'
    ],
    ideal: 'Grandes empresas e parceiros Platinum que precisam de cobertura total'
  }
];
