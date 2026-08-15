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
    role: 'Engenheiro de Sistemas & DevOps',
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
    footerRole: 'Engenheiro de Sistemas & DevOps — Nuvem · DevOps · Infraestrutura de Plataforma de ML',
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
    profSummary: 'Engenheiro de Sistemas e DevOps com mais de 5 anos de experiência no design de infraestrutura corporativa nativa de nuvem e ambientes acelerados por GPU para aviação e serviços financeiros. Orquestra programas de infraestrutura multimilionários (mais de US$ 30 milhões) para companhias aéreas globais (Delta, United) e aeroportos. Altamente qualificado em orquestração de Kubernetes, migrações de nuvem híbrida, inferência de IA/ML de alta eficiência, segurança de confiança zero e automação de infraestrutura como código. Preparado para autonomia remota e liderança multifuncional.',
    skillsTitle: 'Habilidades Técnicas',
    skills: {
      cloud: 'Nuvem & Plataforma', cloudDesc: 'AWS (EKS, VPC, Route 53, Transit Gateway, Direct Connect), Azure (VM, VNet, NSG, Entra ID), Google Cloud (GCP), VMware, Terraform, Ansible, FinOps',
      containers: 'Contêineres, OS & Virt', containersDesc: 'Kubernetes (EKS, AKS, Helm, kubectl, k9s, Lens IDE, Traefik, NGINX Ingress, MetalLB), Podman, Docker, Proxmox VE, LXC, Linux (RHEL, Ubuntu), Systemd, ZFS, PCIe GPU Passthrough',
      cicd: 'CI/CD & Ferramentas', cicdDesc: 'Git, GitHub Actions, GitLab CI, Jenkins, Azure DevOps, ArgoCD, Trivy, Open Policy Agent (OPA), Terraform, Ansible',
      os: 'Sistemas Operacionais', osDesc: 'Linux (RHEL, Ubuntu), Systemd, ZFS, PCIe GPU Passthrough, Windows Server',
      net: 'Redes & Segurança', netDesc: 'Keycloak, SAML/LDAP/AD, IAM (RBAC, Least Privilege), SSSD / Kerberos, TLS, Cloudflare Zero-Trust (Tunnels, mTLS), Secrets Management (AWS/Azure/GitHub Secrets, HashiCorp Vault), UniFi, Technitium DNS, Apache Guacamole, Nginx Proxy Manager, segmentação de rede',
      mon: 'Monitoramento & Observabilidade', monDesc: 'Prometheus, Grafana, Loki, Zabbix, AWS CloudWatch',
      db: 'Linguagens, Bancos de Dados & APIs', dbDesc: 'Python, Java, JavaScript, React, HTML/CSS, PowerShell, Bash, SQL, MySQL, PostgreSQL, Redis, Amazon Aurora, MQTT, Design & Integração de APIs',
      prog: 'Programação', progDesc: 'Python, Java, JavaScript, React, HTML/CSS, Bash, PowerShell, SQL',
      tools: 'Colaboração & Ferramentas', toolsDesc: 'Git, Jira, Confluence, ServiceNow, Agile/Scrum'
    },
    expTitle: 'Experiência Profissional',
    jobs: [
      {
        title: 'Engenheiro de Sistemas', company: 'ADB Safegate', location: 'Columbus, OH', date: 'Abril de 2023 – Presente',
        bullets: [
          'Dirigiu a execução técnica de um programa de infraestrutura de mais de US$ 30 milhões da United Airlines, projetando soluções resilientes em tempo real para operações de voo e otimização de turnaround em hubs internacionais.',
          'Liderou migrações de sistemas locais para a AWS usando Terraform; projetou topologias VPC personalizadas, Transit Gateway, roteamento Route 53 e conectividade híbrida (Direct Connect) aplicando princípios de privilégio mínimo/RBAC e funções IAM para garantir conformidade, alta disponibilidade e alocação de custos FinOps.',
          'Projetou e empacotou um ambiente de teste conteinerizado baseado em Kubernetes (WSL, Podman, Ansible) para permitir implantações locais padronizadas para equipes de clientes distribuídas, reduzindo o desvio de configuração.',
          'Projetou a camada de identidade do Keycloak com protocolos SAML/LDAP e integração SSSD/Kerberos para conectar instâncias do Active Directory, garantindo single sign-on (SSO) corporativo.',
          'Entregou treinamento técnico avançado e passagens de sistema para operadores de aeroportos e equipes de controle de tráfego aéreo para sistemas automatizados de estacionamento SmartDock.',
          'Treinou e mentoreou equipes internas de engenharia em administração de Kubernetes, pilhas de observabilidade profunda (Prometheus, Grafana, Loki) e guias de resposta a incidentes.',
          'Projetou e implantou uma solução robusta de monitoramento remoto 5G em Nice Airport usando mini-PCs e proxies reversos Tailscale, alcançando 99,9% de tempo de atividade em um piloto de 12 meses.',
          'Automatizou o provisionamento de infraestrutura virtual do Azure via GitHub Actions e PowerShell, implementando rotinas de exclusão programada e práticas de FinOps que reduziram os gastos em nuvem não produtivos em 30%.',
          'Construiu frameworks automatizados de teste de integração (Postman/Newman) para feeds em tempo real do Banco de Dados Operacional do Aeroporto (AODB), validando integrações críticas para Delta e United.'
        ]
      },
      {
        title: 'Especialista em Suporte a Produtos', company: 'LPL Financial', location: 'San Diego, CA', date: 'Agosto de 2021 – Abril de 2023',
        bullets: [
          'Prestou suporte a plataformas de negociação financeira de alta disponibilidade sob rígidos SLAs e requisitos de conformidade regulatória.',
          'Atuou em parceria com equipes de engenharia para resolver incidentes de produção complexos; implementou medidas preventivas e fluxos de causa raiz, reduzindo incidentes recorrentes em 25%.'
        ]
      },
      {
        title: 'Especialista em Suporte Técnico II (Contrato)', company: 'Express Hospitality', location: 'San Diego, CA', date: 'Outubro de 2020 – Julho de 2021',
        bullets: [
          'Provisionou e manteve hardware/software de TI corporativo; simplificou fluxos de trabalho de integração para reduzir o tempo de configuração em 30%.'
        ]
      },
      {
        title: 'Especialista em Suporte Técnico', company: 'The Wood Group SD', location: 'San Diego, CA', date: 'Maio de 2020 – Outubro de 2020',
        bullets: [
          'Liderou reformas abrangentes de infraestrutura de TI durante paralisações operacionais, instalando redes de câmeras de segurança e ambientes de impressão remota.'
        ]
      },
      {
        title: 'Especialista em Suporte Técnico', company: 'Express Hospitality', location: 'San Diego, CA', date: 'Julho de 2018 – Março de 2020',
        bullets: [
          'Configurou estações de trabalho e gerenciou a integridade da rede LAN/WAN para apoiar a produtividade remota e local de mais de 200 usuários.'
        ]
      }
    ],
    eduTitle: 'Educação',
    edu: [
      { degree: 'Mestrado em Engenharia de Software e DevOps', school: 'Western Governors University', date: 'Formado em Junho de 2026' },
      { degree: 'Bacharelado em Ciência da Computação', school: 'University of the People', date: 'Formado em Agosto de 2024' },
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
      about: 'Sobre', education: 'Educação', skills: 'Habilidades', projects: 'Projetos', resume: 'Currículo'
    },
    projectsTitle: 'Projetos em Destaque',
    projectsDesc: 'Uma seleção de projetos que demonstram experiência em automação de infraestrutura, implantação em nuvem e engenharia de sistemas',
    about: {
      profMode: 'Profissional', persMode: 'Pessoal',
      profTitle: 'Engenheiro de Sistemas & DevOps',
      profDesc1: 'Engenheiro de Sistemas e DevOps com forte experiência no design, implantação e operação de infraestrutura nativa de nuvem para sistemas intensivos de dados e orientados a eventos. Recentemente focado em habilitar cargas de trabalho de IA e ML por meio de plataformas de inferência auto-hospedadas, aceleração de GPU, observabilidade e otimização de desempenho.',
      profDesc2: 'Sou apaixonado por soluções auto-hospedadas e por construir uma infraestrutura eficiente em casa – praticando o que prego. Quando não estou trabalhando em sistemas corporativos, estou experimentando LLMs locais e otimizando meu laboratório doméstico.',
      cloudNative: 'Nativo de Nuvem & Orientado a Eventos',
      cloudNativeDesc: 'Projetando, implantando e operando infraestrutura escalável para sistemas com uso intensivo de dados.',
      aiMl: 'Habilitação de IA & ML',
      aiMlDesc: 'Plataformas de inferência auto-hospedadas, aceleração de GPU, observabilidade e otimização de desempenho.',
      persTitle: 'Além do Terminal',
      persDesc1: 'Sou originalmente da cidade mais bonita do mundo: Rio de Janeiro, Brasil - terra do churrasco, do samba e da maior nação de futebol da terra.',
      persDesc2: "Minha trajetória para a tecnologia foi tudo menos tradicional. Joguei futebol competitivo até os 21 anos, mas quando meu corpo começou a parecer que tinha 80, soube que era hora de mudar. Naturalmente, me juntei ao Corpo de Fuzileiros Navais do Brasil por três anos. Mesmo assim, não conseguia esconder meu nerd interior - meu esquadrão me apelidou de \"Bill Gates\". Depois do exército, entrei na indústria de petróleo e gás como Inspetor de Qualidade.",
      persDesc3: 'Ainda não satisfeito, mudei-me para os EUA para perseguir meu sonho real: dominar a língua inglesa e lançar minha carreira na tecnologia.',
      hobbiesTitle: 'Hobbies Offline',
      hobbies: [ 'Futebol (Flamengo)', 'Academia', 'Home Labbing', 'Churrasco', 'Astronomia' ]
    },
    skills: {
      devopsDesc: 'devops.service - Sistemas de contêiner e orquestração totalmente operacionais.',
      cloudDesc: 'cloud-platforms.service - Conexão multi-nuvem ativa.',
      progDesc: 'programming.service - Processos de compilação de Python ativados.',
      monDesc: 'monitoring.service - Raspagem de métricas de telemetria pelo Prometheus.',
      running: 'em execução'
    },
    projects: {
      live: 'Live', repo: 'Repo', viewRepo: 'Ver Repo',
      viewMore: 'Ver mais projetos no GitHub',
      stargazerDesc: 'Dashboard astronômico com mapa planetário de visão noturna ao vivo, rastreamento de ISS e previsão meteorológica por IA.',
      aiStackTitle: 'Infr. de IA Privada',
      aiStackDesc: 'Para revisar arquiteturas de sistema, implantações de Proxmox VE & LXC (pools de armazenamento ZFS, passthrough de GPU PCIe), módulos do Terraform e configurações de plataforma de aprendizado de máquina (vLLM, LiteLLM, Redis e Open Policy Agent), visite: github.com/nicolasnkGH',
      proxmoxTitle: 'Automação Proxmox',
      proxmoxDesc: 'Scripts de implantação e manutenção automatizados para ambientes Proxmox VE com provisionamento de cluster.',
      labNetTitle: 'Rede do Laboratório',
      labNetDesc: 'Roteamento personalizado, segregação de VLAN, políticas de firewall pfSense e infraestrutura de monitoramento.'
    }
  },
  contact: {
    title: 'Contate-me',
    desc: 'Entre em contato por e-mail ou conecte-se em plataformas sociais.',
    email: 'careers@nick-t.net',
    copy: 'Copiar',
    copied: 'Copiado!',
    emailLabel: 'E-mail',
    hire: 'Disponível para contratação | Resposta em até 24 horas',
    sendMsg: 'Enviar Mensagem',
    name: 'Nome',
    namePlaceholder: 'João Silva',
    emailAddr: 'Endereço de E-mail',
    emailPlaceholder: 'joao@exemplo.com',
    message: 'Message',
    msgPlaceholder: 'Olá Nicolas...',
    sendBtn: 'Enviar via Formspree'
  },
  diagnostics: {
    skillsDist: 'Distribuição de Habilidades',
    systemTelemetry: 'Telemetria do Sistema',
    cpu: 'Uso de CPU (Orchestração/IaC)',
    mem: 'Alocação de Memória (Programação/Bancos de Dados)',
    net: 'Carga de Rede (Nuvem/Segurança)',
    services: 'Serviços',
    loadAvg: 'Média de Carga',
    failures: 'Falhas',
    serviceLogs: {
      devops: '● devops.service - Sistemas de contêiner e orquestração totalmente operacionais.',
      cloud: '● cloud-platforms.service - Conexão multi-nuvem ativa.',
      prog: '● programming.service - Processos de compilação de Python ativados.',
      mon: '● monitoring.service - Raspagem de métricas de telemetria pelo Prometheus.',
      sec: '● security.service - Regras de firewall e políticas SSO aplicadas.',
      ml: '● mlops-ai.service - Drivers de GPU carregados, camadas de inferência prontas.'
    }
  },
  terminal: {
    welcome: "Bem-vindo ao terminal interativo do Nicolas. Digite 'help' para começar.",
    help: {
      desc: 'Comandos disponíveis:',
      help: 'Mostrar esta mensagem de ajuda', about: 'Exibir informações sobre mim',
      skills: 'Listar habilidades técnicas', projects: 'Listar projetos em destaque',
      contact: 'Mostrar informações de contato', clear: 'Limpar a tela do terminal',
      gui: 'Abrir a interface gráfica do portfólio', sudo: 'Executar comando com privilégios de root'
    },
    about: 'Engenheiro de Sistemas e DevOps com forte experiência em infraestrutura nativa de nuvem, automação DevOps e sistemas corporativos. Formado em Mestrado (M.S.) em Engenharia de Software & DevOps na WGU.',
    skills: 'Habilidades Técnicas:',
    skillsLists: {
      cloud: 'Nuvem & Infraestrutura', containers: 'Contêineres & Orquestração',
      cicd: 'CI/CD & Automação', db: 'Bancos de Dados & Ferramentas', prog: 'Programação'
    },
    projects: 'Projetos em Destaque:',
    contactTitle: 'Informações de Contato:',
    contactFields: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', loc: 'Localização' },
    guiOpen: 'Abrindo Navegador do Portfólio...',
    sudoMsg: 'Boa tentativa! Este incidente será reportado.',
    commandNotFound: 'comando não encontrado'
  }
};
export default pt;
