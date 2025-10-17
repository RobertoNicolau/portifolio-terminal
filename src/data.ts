import type { Experience, Education, Project, Contact, Skills } from './types';

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Datamais Sistemas',
    position: 'Desenvolvedor Full-Stack',
    period: 'Maio 2024 - Presente',
    description: [
      'Desenvolvimento de interfaces usando ReactJS (v18)',
      'Redesenho de layouts e aplicação do Styled Components',
      'Utilização do Git e GitLab (Code Review, CI/CD)',
      'Trabalho com bancos de dados MySQL e Paradox'
    ],
    technologies: ['ReactJS', 'Styled Components', 'Git', 'GitLab', 'MySQL', 'Paradox', 'CI/CD']
  },
  {
    id: 'exp2',
    company: 'Rissi Contabilidade Médica',
    position: 'Desenvolvedor Web',
    period: 'Novembro 2022 - Maio 2024',
    description: [
      'Desenvolvimento de interfaces usando ReactJS (v16) + TypeScript',
      'Redesenho de layouts e aplicação do Styled Components',
      'Criação, ajuste de rotas e migrations usando Laravel (PHP 8)',
      'Processos de ETL usando Pentaho Data Integration',
      'Elaboração de consultas em MySQL, SQL Server, Oracle e PostgreSQL',
      'Uso prático do GitHub em equipes (Pull Requests, Issues)',
      'Consumo de APIs (Google Maps, ViaCEP e APIs Internas)'
    ],
    technologies: ['ReactJS', 'TypeScript', 'JavaScript', 'Laravel', 'PHP 8', 'Styled Components', 'Pentaho', 'MySQL', 'SQL Server', 'Oracle', 'PostgreSQL', 'GitHub', 'Google Maps API', 'ViaCEP']
  },
  {
    id: 'exp3',
    company: 'Consumer Soluções em Tecnologia',
    position: 'Analista de Suporte Pleno',
    period: 'Agosto 2020 - Novembro 2022',
    description: [
      'Acesso Remoto TeamViewer e atendimento em Service Desk (N1 e N2)',
      'Implantação do Sistema fornecido pela Consumer',
      'Configurações Fiscais para Clientes de todo Brasil (NFC-e, NF-e, CF-e)',
      'Configurações de Rede (IP, DNS, Firewall)',
      'Verificações de Windows (.Net Framework) e configuração de sites locais no IIS',
      'Alterações via banco de dados (Firebird 2.0)',
      'Análise de Logs (Chrome Dev Tools, Event Viewer)',
      'Gerenciamento das Regras de ChatBot de atendimento (TakeBlip BOT)'
    ],
    technologies: ['TeamViewer', 'Service Desk', 'Firebird', 'IIS', '.NET Framework', 'Windows Server', 'TakeBlip', 'Chrome Dev Tools']
  },
  {
    id: 'exp4',
    company: 'Cast Informática S.A.',
    position: 'Analista de Suporte Junior',
    period: 'Janeiro 2019 - Fevereiro 2020',
    description: [
      'Suporte a sistemas fiscais da SEFAZ',
      'Configurações de impressora e Acesso Remoto via MSTSC',
      'Configurações de Firewall',
      'Gerenciamento de Active Directory',
      'Configuração de GPO (Group Policy)'
    ],
    technologies: ['SEFAZ', 'Windows Server', 'Active Directory', 'Group Policy', 'MSTSC', 'Firewall']
  },
  {
    id: 'exp5',
    company: 'Visual System Informática Ltda',
    position: 'Analista de Desenvolvimento de Sistemas',
    period: 'Março 2016 - Abril 2017',
    description: [
      'Monitoramento de ambientes com Zabbix',
      'Abertura de chamados para N2',
      'Acesso Remoto via Área de Trabalho do Windows (MSTSC)',
      'Verificações em Servidores Linux (CentOS)',
      'Conexões Telnet e SSH'
    ],
    technologies: ['Zabbix', 'Linux', 'CentOS', 'SSH', 'Telnet', 'MSTSC', 'Monitoramento']
  }
];

export const education: Education[] = [
  {
    id: 'edu1',
    institution: 'Rocketseat - EAD',
    degree: 'MBA Full-Stack (Em Andamento)',
    period: 'Abril 2024 - Abril 2025',
    description: 'Pós-graduação focada em desenvolvimento full-stack com tecnologias modernas'
  },
  {
    id: 'edu2',
    institution: 'FATEC Rio Preto',
    degree: 'Tecnólogo em Informática para Gestão de Negócios',
    period: 'Agosto 2019 - Junho 2023',
    description: 'Formação em tecnologia aplicada à gestão empresarial'
  }
];

export const projects: Project[] = [
  {
    id: 'prj1',
    name: 'Smart Contract Generator',
    description: 'Sistema de geração de contratos baseado em inputs do usuário, automatizando a criação de documentos jurídicos',
    technologies: ['JavaScript', 'docxtemplater', 'Node.js', 'HTML', 'CSS'],
    github: 'https://github.com/RobertoNicolau/smart-contract-generator'
  },
  {
    id: 'prj2',
    name: 'Audio Slicer',
    description: 'Ferramenta para editar, minimizar e cortar áudios diretamente no navegador, sem necessidade de software externo',
    technologies: ['JavaScript', 'FFMPeg', 'Web Audio API', 'HTML5', 'CSS3'],
    github: 'https://github.com/RobertoNicolau/audio-slicer'
  },
  {
    id: 'prj3',
    name: 'Upload AI Web',
    description: 'Ferramenta de transcrição de vídeo e geração de resumo usando API da OpenAI para processamento inteligente',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'FFMPeg', 'IA'],
    github: 'https://github.com/RobertoNicolau/upload-ai-web'
  },
  {
    id: 'prj4',
    name: 'Sistema de Gestão Empresarial',
    description: 'Sistema completo para gestão de empresas desenvolvido com React e Laravel, incluindo módulos financeiros e relatórios',
    technologies: ['React', 'TypeScript', 'Laravel', 'PHP', 'MySQL', 'Styled Components'],
    link: 'https://app.ceuti.org.br/'
  },
  {
    id: 'prj5',
    name: 'Plataforma de Contabilidade Médica',
    description: 'Sistema web para gestão contábil médica com integração de APIs externas e processamento ETL',
    technologies: ['React', 'TypeScript', 'Laravel', 'Pentaho', 'MySQL', 'PostgreSQL', 'Google Maps API'],
    link: 'https://app.baleroconsultoria.com.br'
  },
  {
    id: 'prj6',
    name: 'Portfolio Terminal Interativo',
    description: 'Site de portfólio que simula um terminal Linux para apresentar informações profissionais de forma interativa',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS3'],
    github: 'https://github.com/robertonicolau/portfolio-terminal'
  }
];

export const contact: Contact = {
  email: 'roberto.leonardo.2000@gmail.com',
  phone: '+55 17 99731-4524',
  linkedin: 'https://linkedin.com/in/roberto-nicolau',
  github: 'https://github.com/robertonicolau',
  location: 'São José do Rio Preto, SP - Brasil'
};

export const skills: Skills[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Styled Components', 'Vite']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Laravel', 'PHP 8', 'APIs REST']
  },
  {
    category: 'Bancos de Dados',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'Firebird']
  },
  {
    category: 'DevOps & Ferramentas',
    items: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Pentaho Data Integration']
  },
  {
    category: 'Hospedagem & Infraestrutura',
    items: ['Hospedagem auto gerenciada', 'cPanel', 'Gerenciamento de domínios', 'IIS', 'Windows Server', 'Linux/CentOS']
  },
  {
    category: 'Outras Tecnologias',
    items: ['FFMPeg', 'Web Audio API', 'OpenAI API', 'Google Maps API', 'ViaCEP', 'TakeBlip', 'Zabbix']
  }
];

export const asciiArt = `
    ██████╗  ██████╗ ██████╗ ███████╗██████╗ ████████╗ ██████╗ 
    ██╔══██╗██╔═══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔═══██╗
    ██████╔╝██║   ██║██████╔╝█████╗  ██████╔╝   ██║   ██║   ██║
    ██╔══██╗██║   ██║██╔══██╗██╔══╝  ██╔══██╗   ██║   ██║   ██║
    ██║  ██║╚██████╔╝██████╔╝███████╗██║  ██║   ██║   ╚██████╔╝
    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ 
                                                               
    ███╗   ██╗██╗ ██████╗ ██████╗ ██╗      █████╗ ██╗   ██╗    
    ████╗  ██║██║██╔════╝██╔═══██╗██║     ██╔══██╗██║   ██║    
    ██╔██╗ ██║██║██║     ██║   ██║██║     ███████║██║   ██║    
    ██║╚██╗██║██║██║     ██║   ██║██║     ██╔══██║██║   ██║    
    ██║ ╚████║██║╚██████╗╚██████╔╝███████╗██║  ██║╚██████╔╝    
    ╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝     

    🚀 Desenvolvedor Full-Stack

    Digite 'help' para começar
`;