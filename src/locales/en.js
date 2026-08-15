const en = {
  welcome: {
    boot: [
      '[    0.000000] nicolas-os: Booting kernel v2026.06-devops...',
      '[    0.012844] CPU: 6 cores initialized (Cloud/DevOps/AI/Security/Monitoring/Automation)',
      '[    0.025100] Memory: 8192MB available for infrastructure workloads',
      '[    0.041200] ACPI: Loading GPU acceleration modules...',
      '[    0.058300] systemd[1]: Starting nicolas-portfolio.service...',
      '[    0.072100] systemd[1]: Mounting /dev/experience...',
      '[    0.089400] systemd[1]: Mounting /dev/skills...',
      '[    0.103200] systemd[1]: Mounting /dev/projects...',
      '[    0.121000] net: Establishing connection to nick-t.net...',
      '[    0.145600] systemd[1]: Started nicolas-portfolio.service.',
      '',
      '  Welcome to NicolasOS 2026.06 LTS (GNU/Linux 6.1.0-devops amd64)',
      '',
      '  * Documentation: https://nick-t.net',
      '  * Portfolio:     Interactive Ubuntu Desktop Environment',
      '',
      '  System load:  0.45    Processes: 6 running',
      '  Memory usage: 78%     Services:  All operational',
      '',
      'guest@nick-t.net:~$ startx'
    ],
    bootComplete: '[  OK  ] Loading desktop environment...',
    role: 'Systems & DevOps Engineer',
    howToNavigate: '🖥️ How to Navigate This Portfolio',
    navDock: 'Navigation',
    navDockDesc: 'Launch apps via desktop icons, top-left Activities menu, or the responsive side dock',
    navWindows: 'Windows',
    navWindowsDesc: 'Drag title bars to move, resize edges, double-click to maximize, or minimize',
    navGames: 'Games',
    navGamesDesc: 'Play classic browser games in desktop windows via the Games folder',
    navSpotify: 'Music',
    navSpotifyDesc: 'Listen to my Spotify playlist embedded directly into the OS',
    navTerminal: 'Terminal',
    navTerminalDesc: 'Type commands like help, python, hire, or hack',
    navSecrets: 'Secrets',
    navSecretsDesc: 'Try typing the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) on the desktop, or run sudo su in terminal!',
    enterDesktop: 'Enter Desktop →'
  },
  topbar: { activities: 'Activities' },
  desktop: {
    footerRole: 'Systems & DevOps Engineer — Cloud · DevOps · ML Platform Infrastructure',
    about: 'About', experience: 'Experience', skills: 'Skills', terminal: 'Terminal', contact: 'Contact',
    copyright: '© 2026 Nicolas Teixeira — nick-t.net',
    tooltipLink: 'Click to open · Drag to move', tooltipApp: 'Click to launch · Drag to move'
  },
  apps: {
    terminal: 'Terminal', terminalTooltip: 'Interactive Terminal',
    browser: 'Portfolio Browser', browserTooltip: 'About · Experience · Projects · Education',
    diagnostics: 'System Diagnostics', diagnosticsTooltip: 'Skills & System Telemetry',
    resume: 'Resume', contact: 'Contact Me', contactTooltip: 'Get in Touch',
    python: 'Python IDE', pythonTooltip: 'Interactive Python Environment',
    settings: 'Settings', settingsTooltip: 'System Configuration',
    trash: 'Trash', trashTooltip: 'Deleted items',
    games: 'Games', gamesTooltip: 'Play classic browser games',
    spotify: 'Spotify', spotifyTooltip: 'Music Player'
  },
  activities: { search: 'Type to Search...', showApplications: 'Show Applications' },
  resume: {
    print: '🖨️ Print / Save as PDF',
    profSummaryTitle: 'Professional Summary',
    profSummary: 'Systems & DevOps Engineer with 5+ years designing enterprise-grade, cloud-native infrastructure and GPU-accelerated environments for aviation and financial services. Orchestrates multi-million dollar infrastructure programs ($30M+) supporting global airlines (Delta, United) and airports. Highly skilled in Kubernetes orchestration, hybrid cloud migrations, high-efficiency AI/ML inference serving, zero-trust security, and infrastructure-as-code automation. Built for remote autonomy and cross-functional leadership.',
    skillsTitle: 'Technical Skills',
    skills: {
      cloud: 'Cloud & Platform', cloudDesc: 'AWS (EKS, VPC, Route 53, Transit Gateway, Direct Connect), Azure (VM, VNet, NSG, Entra ID), Google Cloud (GCP), VMware, Terraform, Ansible, FinOps',
      containers: 'Containers, OS & Virt', containersDesc: 'Kubernetes (EKS, AKS, Helm, kubectl, k9s, Lens IDE, Traefik, NGINX Ingress, MetalLB), Podman, Docker, Proxmox VE, LXC, Linux (RHEL, Ubuntu), Systemd, ZFS, PCIe GPU Passthrough',
      cicd: 'CI/CD & Tools', cicdDesc: 'Git, GitHub Actions, GitLab CI, Jenkins, Azure DevOps, ArgoCD, Trivy, Open Policy Agent (OPA), Terraform, Ansible',
      os: 'Operating Systems', osDesc: 'Linux (RHEL, Ubuntu), Systemd, ZFS, PCIe GPU Passthrough, Windows Server',
      net: 'Security & Net', netDesc: 'Keycloak, SAML/LDAP/AD, IAM (RBAC, Least Privilege), SSSD / Kerberos, TLS, Cloudflare Zero-Trust (Tunnels, mTLS), Secrets Management (AWS/Azure/GitHub Secrets, HashiCorp Vault), UniFi, Technitium DNS, Apache Guacamole, Nginx Proxy Manager, network segmentation',
      mon: 'Observability & Monitoring', monDesc: 'Prometheus, Grafana, Loki, Zabbix, AWS CloudWatch',
      db: 'Languages, DBs & APIs', dbDesc: 'Python, Java, JavaScript, React, HTML/CSS, PowerShell, Bash, SQL, MySQL, PostgreSQL, Redis, Amazon Aurora, MQTT, API Design & Integration',
      prog: 'Programming & Logic', progDesc: 'Python, Java, JavaScript, React, HTML/CSS, Bash, PowerShell, SQL',
      tools: 'Collaboration & Tools', toolsDesc: 'Git, Jira, Confluence, ServiceNow, Agile/Scrum'
    },
    expTitle: 'Professional Experience',
    jobs: [
      {
        title: 'System Engineer', company: 'ADB Safegate', location: 'Columbus, OH', date: 'April 2023 – Present',
        bullets: [
          'Directed technical execution of a $30M+ infrastructure program for United Airlines, architecting resilient real-time solutions supporting flight operations and turnaround optimization across major international hubs.',
          'Led migrations from on-premises systems to AWS using Terraform; architected custom VPC topologies, Transit Gateway, Route 53 routing, and hybrid connectivity (Direct Connect) applying Least Privilege/RBAC access principles and IAM roles to ensure compliance, high availability, and FinOps cost allocation.',
          'Architected and packaged a containerized Kubernetes-based testing environment (WSL, Podman, Ansible) to enable standardized local deployments for distributed customer teams, reducing configuration drift.',
          'Designed Keycloak identity layer with SAML/LDAP protocols and SSSD/Kerberos integration to connect Active Directory instances, securing enterprise single sign-on (SSO).',
          'Delivered advanced technical training and system handovers to airport operators and air traffic control staff for SmartDock automated parking systems.',
          'Mentored and trained internal engineering teams on Kubernetes administration, deep observability stacks (Prometheus, Grafana, Loki), and structured incident response playbooks.',
          'Architected and deployed a ruggedized, edge-computing 5G remote monitoring solution at Nice Airport, utilizing mini-PCs and Tailscale reverse proxies to achieve 99.9% uptime over a 12-month pilot.',
          'Automated Azure virtual infrastructure provisioning via GitHub Actions and PowerShell, implementing schedule-based teardowns and FinOps practices that reduced non-production cloud spend by 30%.',
          'Built automated integration testing frameworks (using Postman/Newman) for real-time Airport Operational Database (AODB) feeds, validating mission-critical integrations (FAT/SAT) for Delta and United.'
        ]
      },
      {
        title: 'Product Support Specialist & Senior Tech Support Representative', company: 'LPL Financial', location: 'San Diego, CA', date: 'August 2021 – April 2023',
        bullets: [
          'Supported high-availability financial trading platforms under strict SLA and regulatory compliance requirements.',
          'Partnered with engineering teams to resolve complex production incidents; implemented preventive measures and root-cause workflows reducing recurring issues by 25%.'
        ]
      },
      {
        title: 'Technical Support Specialist II (Contract)', company: 'Express Hospitality', location: 'San Diego, CA', date: 'October 2020 – July 2021',
        bullets: [
          'Provisioned and maintained enterprise IT hardware/software; streamlined onboarding workflows to reduce setup times by 30%.'
        ]
      },
      {
        title: 'Technical Support Specialist', company: 'The Wood Group SD', location: 'San Diego, CA', date: 'May 2020 – October 2020',
        bullets: [
          'Led comprehensive IT infrastructure overhauls during operational shutdowns, installing surveillance networks and remote printer environments.'
        ]
      },
      {
        title: 'Technical Support Specialist', company: 'Express Hospitality', location: 'San Diego, CA', date: 'July 2018 – March 2020',
        bullets: [
          'Configured workstations and managed LAN/WAN network health to support remote and on-site productivity for 200+ users.'
        ]
      }
    ],
    eduTitle: 'Education',
    edu: [
      { degree: 'Master of Science in Software Engineering & DevOps', school: 'Western Governors University', date: 'Graduated June 2026' },
      { degree: 'Bachelor of Science in Computer Science', school: 'University of the People', date: 'Graduated August 2024' },
      { degree: 'CS50: Introduction to Computer Science', school: 'Harvard University (Online)', date: '2022' }
    ],
    projTitle: 'Key Projects',
    proj: [
      { name: 'StarGazer', desc: 'Full-stack stargazing alert system using GPS, weather APIs, and PWA architecture for real-time sky condition notifications' },
      { name: 'Kubernetes Home Lab', desc: 'Self-hosted K8s cluster on Proxmox VE running GitOps workflows, monitoring stacks (Grafana/Prometheus), and containerized services' },
      { name: 'Infrastructure Portfolio', desc: 'Ubuntu-themed interactive portfolio built with React, featuring terminal emulation and Linux desktop experience' }
    ]
  },
  browser: {
    tabs: {
      about: 'About Me', education: 'Education', skills: 'Skills', projects: 'Projects', resume: 'Resume'
    },
    projectsTitle: 'Featured Projects',
    projectsDesc: 'A selection of projects showcasing expertise in infrastructure automation, cloud deployment, and systems engineering',
    about: {
      profMode: 'Professional', persMode: 'Personal',
      profTitle: 'Systems & DevOps Engineer',
      profDesc1: 'Systems and DevOps Engineer with strong experience designing, deploying, and operating cloud-native infrastructure for data-intensive and event-driven systems. Recently focused on enabling AI and ML workloads through self-hosted inference platforms, GPU acceleration, observability, and performance optimization.',
      profDesc2: "I'm passionate about self-hosted solutions and building efficient infrastructure at home – practicing what I preach. When I'm not working on enterprise systems, I'm experimenting with local LLMs and optimizing my home lab.",
      cloudNative: 'Cloud-Native & Event-Driven',
      cloudNativeDesc: 'Designing, deploying, and operating scalable infrastructure for data-intensive systems.',
      aiMl: 'AI & ML Enablement',
      aiMlDesc: 'Self-hosted inference platforms, GPU acceleration, observability, and performance optimization.',
      persTitle: 'Beyond the Terminal',
      persDesc1: 'I am originally from the most beautiful city in the world: Rio de Janeiro, Brazil - land of churrasco, samba, and the greatest futebol nation on earth.',
      persDesc2: "My path to tech has been anything but traditional. I played competitive soccer until I was 21, but when my body started feeling like it was 80, I knew it was time to pivot. Naturally, I joined the Brazilian Marine Corps for three years. Even then, I couldn't hide my inner nerd - my squad nicknamed me \"Bill Gates\". After the military, I jumped into the oil and gas industry as a Quality Inspector.",
      persDesc3: "Still not satisfied, I moved to the USA to pursue my actual dream: mastering the English language and launching my career in tech.",
      hobbiesTitle: 'Offline Hobbies',
      hobbies: [ 'Futebol (Flamengo)', 'Gym', 'Home Labbing', 'Churrasco', 'Astronomy' ]
    },
    skills: {
      devopsDesc: 'devops.service - Container and orchestration systems fully operational.',
      cloudDesc: 'cloud-platforms.service - Multi-cloud connection active.',
      progDesc: 'programming.service - Python compilation processes enabled.',
      monDesc: 'monitoring.service - Prometheus scraping telemetry metrics.',
      running: 'running'
    },
    projects: {
      live: 'Live', repo: 'Repo', viewRepo: 'View Repo',
      viewMore: 'View More Projects on GitHub',
      stargazerDesc: 'Astronomical dashboard featuring a live night-vision planetarium map, ISS tracking, and an AI-powered seeing forecast.',
      aiStackTitle: 'Private AI Stack',
      aiStackDesc: 'To review system architectures, Proxmox VE & LXC deployments (ZFS storage pools, PCIe GPU passthrough), Terraform modules, and machine learning platform configurations (vLLM, LiteLLM, Redis, and Open Policy Agent), please visit: github.com/nicolasnkGH',
      proxmoxTitle: 'Proxmox Automation',
      proxmoxDesc: 'Automated deployment and maintenance scripts for Proxmox VE environments with cluster provisioning.',
      labNetTitle: 'Lab Networking',
      labNetDesc: 'Custom routing, VLAN segregation, pfSense firewall policies, and monitoring infrastructure.'
    }
  },
  contact: {
    title: 'Contact Me',
    desc: 'Reach out via email or connect on social platforms.',
    email: 'careers@nick-t.net',
    copy: 'Copy',
    copied: 'Copied!',
    emailLabel: 'Email',
    hire: 'Available for hire | Responsive within 24 hours',
    sendMsg: 'Send a Message',
    name: 'Name',
    namePlaceholder: 'John Doe',
    emailAddr: 'Email Address',
    emailPlaceholder: 'john@example.com',
    message: 'Message',
    msgPlaceholder: 'Hello Nicolas...',
    sendBtn: 'Send via Formspree'
  },
  diagnostics: {
    skillsDist: 'Skills Distribution',
    systemTelemetry: 'System Telemetry',
    cpu: 'CPU Usage (Orchestration/IaC)',
    mem: 'Memory Allocation (Programming/Databases)',
    net: 'Network Load (Cloud/Security)',
    services: 'Services',
    loadAvg: 'Load Avg',
    failures: 'Failures',
    serviceLogs: {
      devops: '● devops.service - Container and orchestration systems fully operational.',
      cloud: '● cloud-platforms.service - Multi-cloud connection active.',
      prog: '● programming.service - Python compilation processes enabled.',
      mon: '● monitoring.service - Prometheus scraping telemetry metrics.',
      sec: '● security.service - Firewalls and SSO policies enforced.',
      ml: '● mlops-ai.service - GPU drivers loaded, inference layers ready.'
    }
  },
  terminal: {
    welcome: "Welcome to Nicolas' interactive terminal. Type 'help' to start.",
    help: {
      desc: 'Available commands:',
      help: 'Show this help message', about: 'Display information about me',
      skills: 'List technical skills', projects: 'List featured projects',
      contact: 'Show contact information', clear: 'Clear terminal screen',
      gui: 'Open the graphical portfolio interface', sudo: 'Execute command with root privileges'
    },
    about: "Systems and DevOps Engineer with strong experience in cloud-native infrastructure, DevOps automation, and enterprise systems. Graduated WGU M.S. in Software Engineering & DevOps.",
    skills: 'Technical Skills:',
    skillsLists: {
      cloud: 'Cloud & Infrastructure', containers: 'Containers & Orchestration',
      cicd: 'CI/CD & Automation', db: 'Databases & Tools', prog: 'Programming'
    },
    projects: 'Featured Projects:',
    contactTitle: 'Contact Information:',
    contactFields: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', loc: 'Location' },
    guiOpen: 'Opening Portfolio Browser...',
    sudoMsg: 'Nice try! This incident will be reported.',
    commandNotFound: 'command not found'
  }
};
export default en;
