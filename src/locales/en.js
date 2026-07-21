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
    role: 'Systems & Platform Engineer',
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
    footerRole: 'Systems & Platform Engineer — Cloud · DevOps · AI Infrastructure',
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
    profSummary: 'Systems & Platform Engineer with 8+ years of experience in cloud infrastructure, DevOps automation, and enterprise systems administration. Proven track record of designing scalable infrastructure for mission-critical environments, managing $30M+ projects, and leading AWS cloud migrations. Expertise in CI/CD pipeline development, Kubernetes orchestration, infrastructure as code (IaC), and cross-functional team leadership. Adept at bridging the gap between development and operations to deliver reliable, secure, and cost-effective solutions.',
    skillsTitle: 'Technical Skills',
    skills: {
      cloud: 'Cloud & Infrastructure', cloudDesc: 'AWS (EC2, S3, IAM, CloudFormation), Azure, Proxmox VE, VMware, Hyper-V',
      containers: 'Containers & Orchestration', containersDesc: 'Docker, Kubernetes, Helm, Container Registry Management',
      cicd: 'CI/CD & Automation', cicdDesc: 'Azure DevOps, GitHub Actions, Jenkins, Terraform, Ansible, PowerShell, Bash',
      os: 'Operating Systems', osDesc: 'Linux (RHEL, Ubuntu, Debian), Windows Server 2016–2022',
      net: 'Networking & Security', netDesc: 'DNS, DHCP, VPN, SSL/TLS, IAM, SSO, Firewall Configuration, TCP/IP',
      mon: 'Monitoring & Observability', monDesc: 'Grafana, Prometheus, ELK Stack, Nagios',
      db: 'Databases', dbDesc: 'PostgreSQL, MySQL, MongoDB, SQL Server, High-Availability Clustering',
      prog: 'Programming', progDesc: 'Python, JavaScript/TypeScript, React, Node.js, Go, Java, C',
      tools: 'Collaboration & Tools', toolsDesc: 'Git, Jira, Confluence, ServiceNow, Agile/Scrum'
    },
    expTitle: 'Professional Experience',
    jobs: [
      {
        title: 'Systems Engineer', company: 'ADB Safegate', location: 'Columbus, OH', date: 'April 2023 – Present',
        bullets: [
          'Designed and deployed secure, scalable infrastructure for mission-critical airport operations systems across multiple international airports',
          'Built and managed CI/CD pipelines with Azure DevOps, streamlining deployment cadence and reducing release cycle time by 40%',
          'Configured high-availability clusters for databases and identity management systems (IAM, SSO, SSL), achieving 99.9% uptime',
          'Led AWS cloud migration for Delta Airlines, ensuring zero-downtime transition of a critical on-premise system to cloud infrastructure',
          'Directed a $30M United Airlines infrastructure project, managing cross-functional engineering teams through full project lifecycle',
          'Deployed and maintained Windows Server, Linux, and Kubernetes environments across bare-metal, VM, and cloud platforms',
          'Developed a new wireless system architecture, saving 1 hour/day in field setup time and enabling remote diagnostics capabilities'
        ]
      },
      {
        title: 'Product Support Specialist', company: 'LPL Financial', location: 'San Diego, CA', date: 'August 2021 – April 2023',
        bullets: [
          'Provided Tier 2/3 support for 4 proprietary financial trading platforms, maintaining high reliability for 500+ financial advisors',
          'Partnered with escalation engineering teams to resolve high-priority incidents under strict SLA timelines (95%+ SLA adherence)',
          'Maintained comprehensive service records for regulatory compliance, audit readiness, and knowledge base documentation',
          'Reduced recurring support issues by 25% through process refinement initiatives and root cause analysis workflows'
        ]
      },
      {
        title: 'Technical Support Specialist II', company: 'Express Hospitality Inc.', location: 'San Diego, CA', date: 'July 2018 – July 2021',
        bullets: [
          'Managed provisioning, installation, and maintenance of enterprise hardware and software systems across multiple locations',
          'Configured workstations and streamlined IT onboarding process, reducing new hire setup time by 30%',
          'Ensured infrastructure uptime through proactive system monitoring, LAN/WAN maintenance, and preventive maintenance schedules',
          'Delivered on-site and remote troubleshooting for 200+ users, reducing average ticket resolution time by 20%'
        ]
      }
    ],
    eduTitle: 'Education',
    edu: [
      { degree: 'Master of Science in Software Engineering & DevOps', school: 'Western Governors University', date: 'Expected June 2026' },
      { degree: 'Bachelor of Science in Computer Science', school: 'University of the People', date: 'Graduated 2024' },
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
      profTitle: 'Systems & Platform Engineer',
      profDesc1: 'Systems and Platform Engineer with strong experience designing, deploying, and operating cloud-native infrastructure for data-intensive and event-driven systems. Recently focused on enabling AI and ML workloads through self-hosted inference platforms, GPU acceleration, observability, and performance optimization.',
      profDesc2: "I'm passionate about self-hosted solutions and building efficient infrastructure at home – practicing what I preach. When I'm not working on enterprise systems, I'm experimenting with local LLMs and optimizing my home lab.",
      cloudNative: 'Cloud-Native & Event-Driven',
      cloudNativeDesc: 'Designing, deploying, and operating scalable infrastructure for data-intensive systems.',
      aiMl: 'AI & ML Enablement',
      aiMlDesc: 'Self-hosted inference platforms, GPU acceleration, observability, and performance optimization.',
      persTitle: 'Beyond the Terminal',
      persDesc1: 'I am originally from the most beautiful city in the world: Rio de Janeiro, Brazil - land of churrasco, samba, and the greatest futebol nation on earth.',
      persDesc2: 'My path to tech has been anything but traditional. I played competitive soccer until I was 21, but when my body started feeling like it was 80, I knew it was time to pivot. Naturally, I joined the Brazilian Marine Corps for three years. Even then, I couldn\'t hide my inner nerd - my squad nicknamed me "Bill Gates". After the military, I jumped into the oil and gas industry as a Quality Inspector.',
      persDesc3: 'Still not satisfied, I moved to the USA to pursue my actual dream: mastering the English language and launching my career in tech.',
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
      aiStackDesc: 'Self-hosted AI inference platform with GPU acceleration, local LLMs, and secure remote access.',
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
    welcome: 'Welcome to Nicolas\' interactive terminal. Type \'help\' to start.',
    help: {
      desc: 'Available commands:',
      help: 'Show this help message', about: 'Display information about me',
      skills: 'List technical skills', projects: 'List featured projects',
      contact: 'Show contact information', clear: 'Clear terminal screen',
      gui: 'Open the graphical portfolio interface', sudo: 'Execute command with root privileges'
    },
    about: 'Systems and Platform Engineer with strong experience in cloud-native infrastructure, DevOps automation, and enterprise systems. Currently pursuing an M.S. in Software Engineering & DevOps at WGU.',
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
