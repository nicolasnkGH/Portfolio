const pt = {
  welcome: {
    boot: [
      '[    0.000000] nicolas-os: Iniciando kernel v2026.06-devops...',
      '[    0.012844] CPU: 6 núcleos inicializados (Cloud/DevOps/AI/Security/Monitoring/Automation)',
      '[    0.025100] Memory: 8192MB disponíveis para cargas de infraestrutura',
      '[    0.041200] ACPI: Carregando módulos de aceleração de GPU...',
      '[    0.058300] systemd[1]: Iniciando nicolas-portfolio.service...',
      '[    0.072100] systemd[1]: Montando /dev/experience...',
      '[    0.089400] systemd[1]: Montando /dev/skills...',
      '[    0.103200] systemd[1]: Montando /dev/projects...',
      '[    0.121000] net: Estabelecendo conexão com nick-t.net...',
      '[    0.145600] systemd[1]: nicolas-portfolio.service iniciado.',
      '',
      '  Bem-vindo ao NicolasOS 2026.06 LTS (GNU/Linux 6.1.0-devops amd64)',
      '',
      '  * Documentação: https://nick-t.net',
      '  * Portfólio:    Ambiente de Desktop Interativo Ubuntu',
      '',
      '  Carga do sistema: 0.45    Processos: 6 em execução',
      '  Uso de memória:   78%     Serviços:  Todos operacionais',
      '',
      'guest@nick-t.net:~$ startx'
    ],
    bootComplete: '[  OK  ] Carregando ambiente de desktop...',
    role: 'Engenheiro de Sistemas & Plataformas',
    howToNavigate: '🖥️ Como Navegar Neste Portfólio',
    navDock: 'Navegação',
    navDockDesc: 'Abra os apps usando os ícones do desktop, menu Atividades ou a barra lateral responsiva',
    navWindows: 'Janelas',
    navWindowsDesc: 'Arraste a barra de título para mover, redimensione pelas bordas ou clique duplo para maximizar',
    navGames: 'Jogos',
    navGamesDesc: 'Jogue jogos clássicos de navegador diretamente nas janelas através da pasta Jogos',
    navSpotify: 'Música',
    navSpotifyDesc: 'Ouça minha playlist do Spotify incorporada diretamente no sistema',
    navTerminal: 'Terminal',
    navTerminalDesc: 'Digite comandos como help, python, hire, ou hack',
    navSecrets: 'Segredos',
    navSecretsDesc: 'Tente digitar o Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) no desktop, ou execute sudo su no terminal!',
    enterDesktop: 'Entrar no Desktop →'
  },
  topbar: { activities: 'Atividades' },
  desktop: {
    footerRole: 'Engenheiro de Sistemas & Plataformas — Cloud · DevOps · Infraestrutura de IA',
    about: 'Sobre', experience: 'Experiência', skills: 'Habilidades', terminal: 'Terminal', contact: 'Contato',
    copyright: '© 2026 Nicolas Teixeira — nick-t.net',
    tooltipLink: 'Clique para abrir · Arraste para mover', tooltipApp: 'Clique para iniciar · Arraste para mover'
  },
  apps: {
    terminal: 'Terminal', terminalTooltip: 'Terminal Interativo',
    browser: 'Navegador do Portfólio', browserTooltip: 'Sobre · Experiência · Projetos · Educação',
    diagnostics: 'Diagnósticos do Sistema', diagnosticsTooltip: 'Habilidades & Telemetria do Sistema',
    resume: 'Currículo', contact: 'Contate-me', contactTooltip: 'Entre em Contato',
    python: 'IDE Python', pythonTooltip: 'Ambiente Python Interativo',
    settings: 'Configurações', settingsTooltip: 'Configuração do Sistema',
    trash: 'Lixeira', trashTooltip: 'Itens excluídos',
    games: 'Jogos', gamesTooltip: 'Jogue jogos clássicos de navegador',
    spotify: 'Spotify', spotifyTooltip: 'Reprodutor de Música'
  },
  activities: { search: 'Digite para pesquisar...', showApplications: 'Mostrar Aplicativos' },
  resume: {
    print: '🖨️ Imprimir / Salvar como PDF',
    profSummaryTitle: 'Resumo Profissional',
    profSummary: 'Engenheiro de Sistemas e Plataformas com mais de 8 anos de experiência em infraestrutura de nuvem, automação DevOps e administração de sistemas corporativos. Histórico comprovado no design de infraestrutura escalável para ambientes de missão crítica, gerenciamento de projetos de mais de US$ 30 milhões e liderança de migrações para a nuvem da AWS. Especialista no desenvolvimento de pipelines CI/CD, orquestração de Kubernetes, infraestrutura como código (IaC) e liderança de equipes multifuncionais. Habilidoso em conectar as áreas de desenvolvimento e operações para entregar soluções confiáveis, seguras e econômicas.',
    skillsTitle: 'Habilidades Técnicas',
    skills: {
      cloud: 'Nuvem & Infraestrutura', cloudDesc: 'AWS (EC2, S3, IAM, CloudFormation), Azure, Proxmox VE, VMware, Hyper-V',
      containers: 'Contêineres & Orquestração', containersDesc: 'Docker, Kubernetes, Helm, Gerenciamento de Registry de Contêineres',
      cicd: 'CI/CD & Automação', cicdDesc: 'Azure DevOps, GitHub Actions, Jenkins, Terraform, Ansible, PowerShell, Bash',
      os: 'Sistemas Operacionais', osDesc: 'Linux (RHEL, Ubuntu, Debian), Windows Server 2016–2022',
      net: 'Redes & Segurança', netDesc: 'DNS, DHCP, VPN, SSL/TLS, IAM, SSO, Configuração de Firewall, TCP/IP',
      mon: 'Monitoramento & Observabilidade', monDesc: 'Grafana, Prometheus, Stack ELK, Nagios',
      db: 'Bancos de Dados', dbDesc: 'PostgreSQL, MySQL, MongoDB, SQL Server, Clusterização de Alta Disponibilidade',
      prog: 'Programação', progDesc: 'Python, JavaScript/TypeScript, React, Node.js, Go, Java, C',
      tools: 'Colaboração & Ferramentas', toolsDesc: 'Git, Jira, Confluence, ServiceNow, Agile/Scrum'
    },
    expTitle: 'Experiência Profissional',
    jobs: [
      {
        title: 'Engenheiro de Sistemas', company: 'ADB Safegate', location: 'Columbus, OH', date: 'Abril de 2023 – Presente',
        bullets: [
          'Projetou e implantou infraestrutura segura e escalável para sistemas de operações aeroportuárias de missão crítica em vários aeroportos internacionais',
          'Criou e gerenciou pipelines CI/CD com Azure DevOps, simplificando a cadência de implantação e reduzindo o tempo do ciclo de lançamento em 40%',
          'Configurou clusters de alta disponibilidade para bancos de dados e sistemas de gerenciamento de identidade (IAM, SSO, SSL), alcançando 99,9% de tempo de atividade',
          'Liderou a migração para a nuvem da AWS da Delta Airlines, garantindo a transição sem tempo de inatividade de um sistema local crítico para a infraestrutura em nuvem',
          'Dirigiu um projeto de infraestrutura de US$ 30 milhões da United Airlines, gerenciando equipes de engenharia multifuncionais em todo o ciclo de vida do projeto',
          'Implantou e manteve ambientes Windows Server, Linux e Kubernetes em plataformas bare-metal, VM e nuvem',
          'Desenvolveu uma nova arquitetura de sistema sem fio, economizando 1 hora/dia em tempo de configuração em campo e permitindo recursos de diagnóstico remoto'
        ]
      },
      {
        title: 'Especialista em Suporte a Produtos', company: 'LPL Financial', location: 'San Diego, CA', date: 'Agosto de 2021 – Abril de 2023',
        bullets: [
          'Forneceu suporte Nível 2/3 para 4 plataformas proprietárias de negociação financeira, mantendo alta confiabilidade para mais de 500 consultores financeiros',
          'Atuou em parceria com equipes de engenharia para resolver incidentes de alta prioridade sob rígidos prazos de SLA (mais de 95% de adesão aos SLAs)',
          'Manteve registros de serviço abrangentes para conformidade regulatória, preparação para auditorias e documentação da base de conhecimento',
          'Reduziu problemas de suporte recorrentes em 25% por meio de iniciativas de refinamento de processos e fluxos de análise de causa raiz'
        ]
      },
      {
        title: 'Especialista em Suporte Técnico II', company: 'Express Hospitality Inc.', location: 'San Diego, CA', date: 'Julho de 2018 – Julho de 2021',
        bullets: [
          'Gerenciou provisionamento, instalação e manutenção de sistemas corporativos de hardware e software em diversas localidades',
          'Configurou estações de trabalho e simplificou o processo de integração de TI, reduzindo o tempo de configuração de novas contratações em 30%',
          'Garantiu o tempo de atividade da infraestrutura por meio do monitoramento proativo de sistemas, manutenção de LAN/WAN e rotinas de manutenção preventiva',
          'Forneceu solução de problemas no local e remotamente para mais de 200 usuários, reduzindo o tempo médio de resolução de tickets em 20%'
        ]
      }
    ],
    eduTitle: 'Educação',
    edu: [
      { degree: 'Mestrado em Engenharia de Software e DevOps', school: 'Western Governors University', date: 'Previsão de Conclusão: Junho de 2026' },
      { degree: 'Bacharelado em Ciência da Computação', school: 'University of the People', date: 'Formado em 2024' },
      { degree: 'CS50: Introdução à Ciência da Computação', school: 'Harvard University (Online)', date: '2022' }
    ],
    projTitle: 'Principais Projetos',
    proj: [
      { name: 'StarGazer', desc: 'Sistema de alerta de observação de estrelas full-stack usando GPS, APIs meteorológicas e arquitetura PWA para notificações das condições do céu em tempo real' },
      { name: 'Kubernetes Home Lab', desc: 'Cluster K8s auto-hospedado em Proxmox VE executando fluxos de trabalho GitOps, pilhas de monitoramento (Grafana/Prometheus) e serviços em contêiner' },
      { name: 'Portfólio de Infraestrutura', desc: 'Portfólio interativo temático do Ubuntu construído com React, apresentando emulação de terminal e experiência de desktop Linux' }
    ]
  },
  browser: {
    tabs: {
      about: 'Sobre Mim', education: 'Educação', skills: 'Habilidades', projects: 'Projetos', resume: 'Currículo'
    },
    projectsTitle: 'Projetos em Destaque',
    projectsDesc: 'Uma seleção de projetos demonstrando expertise em automação de infraestrutura, implantação em nuvem e engenharia de sistemas',
    about: {
      profMode: 'Profissional', persMode: 'Pessoal',
      profTitle: 'Engenheiro de Sistemas & Plataformas',
      profDesc1: 'Engenheiro de Sistemas e Plataformas com forte experiência em projetar, implantar e operar infraestrutura nativa em nuvem para sistemas com uso intenso de dados e orientados a eventos. Recentemente focado em habilitar cargas de trabalho de IA e ML por meio de plataformas de inferência auto-hospedadas, aceleração de GPU, observabilidade e otimização de desempenho.',
      profDesc2: 'Sou apaixonado por soluções auto-hospedadas e por construir infraestrutura eficiente em casa – praticando o que prego. Quando não estou trabalhando em sistemas corporativos, estou experimentando LLMs locais e otimizando meu home lab.',
      cloudNative: 'Nativo em Nuvem & Orientado a Eventos',
      cloudNativeDesc: 'Projetando, implantando e operando infraestrutura escalável para sistemas com uso intenso de dados.',
      aiMl: 'Habilitação de IA & ML',
      aiMlDesc: 'Plataformas de inferência auto-hospedadas, aceleração de GPU, observabilidade e otimização de desempenho.',
      persTitle: 'Além do Terminal',
      persDesc1: 'Sou originalmente da cidade mais linda do mundo: Rio de Janeiro, Brasil - terra do churrasco, do samba e da maior nação de futebol da terra.',
      persDesc2: 'Meu caminho para a tecnologia foi tudo menos tradicional. Joguei futebol profissionalmente até os 21 anos, mas quando meu corpo começou a parecer ter 80 anos, percebi que era hora de mudar. Naturalmente, me juntei ao Corpo de Fuzileiros Navais do Brasil por três anos. Mesmo lá, eu não conseguia esconder meu lado nerd - meu esquadrão me chamava de "Bill Gates". Depois do serviço militar, pulei para a indústria de óleo e gás como Inspetor de Qualidade.',
      persDesc3: 'Ainda não satisfeito, me mudei para os EUA para buscar meu verdadeiro sonho: dominar a língua inglesa e lançar minha carreira em tecnologia.',
      hobbiesTitle: 'Hobbies Offline',
      hobbies: [ 'Futebol (Flamengo)', 'Academia', 'Home Labbing', 'Churrasco', 'Astronomia' ]
    },
    skills: {
      devopsDesc: 'devops.service - Sistemas de contêineres e orquestração totalmente operacionais.',
      cloudDesc: 'cloud-platforms.service - Conexão multi-nuvem ativa.',
      progDesc: 'programming.service - Processos de compilação Python ativados.',
      monDesc: 'monitoring.service - Prometheus coletando métricas de telemetria.',
      running: 'em execução'
    },
    projects: {
      live: 'Ao Vivo', repo: 'Repositório', viewRepo: 'Ver Repositório',
      viewMore: 'Ver Mais Projetos no GitHub',
      stargazerDesc: 'Painel astronômico com mapa do planetário de visão noturna ao vivo, rastreamento da ISS e uma previsão orientada por IA.',
      aiStackTitle: 'Stack Privada de IA',
      aiStackDesc: 'Plataforma de inferência de IA auto-hospedada com aceleração de GPU, LLMs locais e acesso remoto seguro.',
      proxmoxTitle: 'Automação Proxmox',
      proxmoxDesc: 'Scripts de implantação e manutenção automatizados para ambientes Proxmox VE com provisionamento de cluster.',
      labNetTitle: 'Redes de Laboratório',
      labNetDesc: 'Roteamento personalizado, segregação de VLAN, políticas de firewall pfSense e infraestrutura de monitoramento.'
    }
  },
  contact: {
    title: 'Contate-me',
    desc: 'Entre em contato por e-mail ou conecte-se nas plataformas sociais.',
    email: 'careers@nick-t.net',
    copy: 'Copiar',
    copied: 'Copiado!',
    emailLabel: 'Email',
    hire: 'Disponível para contratação | Responsivo em até 24 horas',
    sendMsg: 'Enviar uma Mensagem',
    name: 'Nome',
    namePlaceholder: 'João Silva',
    emailAddr: 'Endereço de Email',
    emailPlaceholder: 'joao@exemplo.com',
    message: 'Mensagem',
    msgPlaceholder: 'Olá Nicolas...',
    sendBtn: 'Enviar via Formspree'
  },
  diagnostics: {
    skillsDist: 'Distribuição de Habilidades',
    systemTelemetry: 'Telemetria do Sistema',
    cpu: 'Uso da CPU (Orquestração/IaC)',
    mem: 'Alocação de Memória (Programação/Bancos de Dados)',
    net: 'Carga de Rede (Nuvem/Segurança)',
    services: 'Serviços',
    loadAvg: 'Média de Carga',
    failures: 'Falhas',
    serviceLogs: {
      devops: '● devops.service - Sistemas de contêineres e orquestração operacionais.',
      cloud: '● cloud-platforms.service - Conexão multi-nuvem ativa.',
      prog: '● programming.service - Processos de compilação Python ativados.',
      mon: '● monitoring.service - Prometheus coletando métricas de telemetria.',
      sec: '● security.service - Firewalls e políticas de SSO aplicadas.',
      ml: '● mlops-ai.service - Drivers de GPU carregados, camadas de inferência prontas.'
    }
  },
  terminal: {
    welcome: 'Bem-vindo ao terminal interativo de Nicolas. Digite \'help\' para começar.',
    help: {
      desc: 'Comandos disponíveis:',
      help: 'Mostrar esta mensagem de ajuda', about: 'Exibir informações sobre mim',
      skills: 'Listar habilidades técnicas', projects: 'Listar projetos em destaque',
      contact: 'Mostrar informações de contato', clear: 'Limpar a tela do terminal',
      gui: 'Abrir a interface gráfica do portfólio', sudo: 'Executar comando com privilégios de root'
    },
    about: 'Engenheiro de Sistemas e Plataformas com forte experiência em infraestrutura nativa da nuvem, automação de DevOps e sistemas corporativos. Atualmente cursando um mestrado em Engenharia de Software e DevOps na WGU.',
    skills: 'Habilidades Técnicas:',
    skillsLists: {
      cloud: 'Nuvem e Infraestrutura', containers: 'Contêineres e Orquestração',
      cicd: 'CI/CD e Automação', db: 'Bancos de Dados e Ferramentas', prog: 'Programação'
    },
    projects: 'Projetos em Destaque:',
    contactTitle: 'Informações de Contato:',
    contactFields: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', loc: 'Localização' },
    guiOpen: 'Abrindo o Navegador do Portfólio...',
    sudoMsg: 'Boa tentativa! Este incidente será relatado.',
    commandNotFound: 'comando não encontrado'
  }
};
export default pt;
