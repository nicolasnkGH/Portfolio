// Portfolio JavaScript - Modern hero with typing effects

// Work experience data synced with HTML
const workExperience = {
    current: {
        company: 'ADB Safegate',
        title: 'Systems Engineer',
        location: 'Columbus, OH',
        dates: 'April 2023 - Present',
        responsibilities: [
            'Designed and deployed secure, scalable infrastructure for mission-critical airport systems',
            'Built and managed CI/CD pipelines with Azure DevOps, streamlining deployments',
            'Configured HA clusters for databases and identity management systems (IAM, SSO, SSL)',
            'Led AWS migration for Delta Airlines, ensuring continuity of a critical on-premise system',
            'Directed a $30M United Airlines project, managing cross-functional teams end-to-end',
            'Deployed and maintained Windows, Linux, and Kubernetes environments (bare-metal, VM, cloud)',
            'Developed a new wireless system, saving 1 hour/day in setup time and enabling remote troubleshooting'
        ]
    },
    previous: {
        company: 'LPL Financial',
        title: 'Product Support Specialist',
        location: 'San Diego, CA',
        dates: 'August 2021 - April 2023',
        responsibilities: [
            'Supported 4 proprietary financial systems, ensuring high reliability for hundreds of advisors',
            'Partnered with escalation teams to resolve high-priority issues under tight SLAs',
            'Maintained service records for compliance and transparency',
            'Improved advisor experience by reducing recurring support issues through process refinements'
        ]
    },
    earlier: {
        company: 'Express Hospitality Inc.',
        title: 'Technical Support Specialist II',
        location: 'San Diego, CA',
        dates: 'July 2018 - July 2021',
        responsibilities: [
            'Managed provisioning, installation, and maintenance of hardware/software systems',
            'Configured desktops and streamlined onboarding for new hires',
            'Ensured uptime through proactive system monitoring and LAN/WAN maintenance',
            'Delivered on-site and remote troubleshooting, reducing downtime and support delays'
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {

    // Navbar background on scroll for better contrast
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // =========================================================
    // MacBook Entrance Animation — IntersectionObserver
    // =========================================================
    const macbookMockup = document.querySelector('.macbook-mockup');
    if (macbookMockup) {
        const macbookObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    macbookMockup.classList.add('macbook-visible');
                    macbookObserver.unobserve(macbookMockup);
                }
            });
        }, { threshold: 0.15 });
        macbookObserver.observe(macbookMockup);
    }

    // =========================================================
    // MacBook Mouse-Follow 3D Tilt — Desktop Only
    // =========================================================
    if (macbookMockup && window.matchMedia('(min-width: 769px)').matches) {
        const masthead = document.querySelector('.masthead');
        let tiltRAF = null;
        let targetRotateX = 2;
        let targetRotateY = 0;
        let currentRotateX = 2;
        let currentRotateY = 0;

        // Smoothly interpolate towards target rotation
        function animateTilt() {
            currentRotateX += (targetRotateX - currentRotateX) * 0.08;
            currentRotateY += (targetRotateY - currentRotateY) * 0.08;
            macbookMockup.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
            
            // Keep animating if not close enough to target
            if (Math.abs(targetRotateX - currentRotateX) > 0.01 || Math.abs(targetRotateY - currentRotateY) > 0.01) {
                tiltRAF = requestAnimationFrame(animateTilt);
            } else {
                tiltRAF = null;
            }
        }

        if (masthead) {
            masthead.addEventListener('mousemove', function(e) {
                if (!macbookMockup.classList.contains('macbook-visible')) return;
                macbookMockup.classList.add('macbook-tilting');

                const rect = masthead.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Normalized mouse position (-1 to 1)
                const normalizedX = (e.clientX - centerX) / (rect.width / 2);
                const normalizedY = (e.clientY - centerY) / (rect.height / 2);

                // Subtle tilt: max ±4 degrees on Y, ±3 degrees on X
                targetRotateY = normalizedX * 4;
                targetRotateX = 2 + (-normalizedY * 3); // 2deg base tilt

                if (!tiltRAF) {
                    tiltRAF = requestAnimationFrame(animateTilt);
                }
            });

            masthead.addEventListener('mouseleave', function() {
                macbookMockup.classList.remove('macbook-tilting');
                targetRotateX = 2;
                targetRotateY = 0;
                if (!tiltRAF) {
                    tiltRAF = requestAnimationFrame(animateTilt);
                }
            });
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ScrollSpy for Navigation Highlighting
    const sections = document.querySelectorAll('section.section-id');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Typing effect for subtitle
    const subtitleElement = document.getElementById('subtitle-typing');
    if (subtitleElement) {
        const subtitleText = 'Systems & Platform Engineer | Cloud, DevOps, and AI Infrastructure';
        let index = 0;

        function typeSubtitle() {
            if (index < subtitleText.length) {
                subtitleElement.textContent += subtitleText.charAt(index);
                index++;
                setTimeout(typeSubtitle, 50);
            } else {
                // Add cursor blink effect at end (removed blue vertical bar after Infrastructure)
            }
        }

        // Start typing after a brief delay
        setTimeout(typeSubtitle, 500);
    }

    // Typing effect for specialty list items - character by character (fixed pop-in shift)
    const specialtyList = document.getElementById('specialty-list');
    if (specialtyList) {
        const specialties = [
            { icon: 'fas fa-dharmachakra', color: '#58a6ff', text: 'Kubernetes & Cloud-Native Infrastructure' },
            { icon: 'fas fa-brain', color: '#eb4335', text: 'MLOps & AI Inference Platforms' },
            { icon: 'fas fa-gears', color: '#ea4335', text: 'CI/CD Automation & IaC' },
            { icon: 'fas fa-microchip', color: '#3fb950', text: 'GPU Acceleration & Cost Optimization' }
        ];

        specialties.forEach((spec, index) => {
            const li = document.createElement('li');
            li.className = 'specialty-item d-flex align-items-center mb-2';
            li.style.opacity = '0';
            li.style.transition = 'opacity 0.4s ease';

            // Create icon statically to avoid shift
            const icon = document.createElement('i');
            icon.className = `${spec.icon} specialty-icon me-2`;
            icon.style.color = spec.color;
            icon.style.fontSize = '1rem';
            icon.style.minWidth = '20px';
            li.appendChild(icon);

            // Create text span
            const textSpan = document.createElement('span');
            textSpan.className = 'text-white-75';
            li.appendChild(textSpan);

            specialtyList.appendChild(li);

            let charIndex = 0;

            function typeCharacter() {
                if (charIndex < spec.text.length) {
                    textSpan.textContent = spec.text.substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(typeCharacter, 20);
                } else {
                    li.classList.add('visible');
                    li.style.opacity = '1';
                }
            }

            // Staggered start and show list item immediately with its icon
            setTimeout(() => {
                li.style.opacity = '1';
                typeCharacter();
            }, index * 300);
        });
    }

    // Typing effect for About section text
    const aboutText = document.getElementById('about-text');
    if (aboutText) {
        const aboutContent = [
            "Systems and Platform Engineer with strong experience designing,",
            "deploying, and operating cloud-native infrastructure for data-intensive",
            "and event-driven systems. Recently focused on enabling AI and ML workloads",
            "through self-hosted inference platforms, GPU acceleration, observability,",
            "and performance optimization.",
            "",
            "I'm passionate about self-hosted solutions and building efficient",
            "infrastructure at home - practicing what I preach. When I'm not working",
            "on enterprise systems, I'm experimenting with local LLMs and optimizing",
            "my home lab."
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let currentLine = "";

        function typeAboutLine() {
            if (lineIndex < aboutContent.length) {
                // Handle blank lines as paragraph breaks
                if (aboutContent[lineIndex] === '') {
                    const pBreak = document.createElement('div');
                    pBreak.style.marginTop = '1.2rem';
                    aboutText.appendChild(pBreak);
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeAboutLine, 400);
                    return;
                }

                if (charIndex === 0) {
                    // Start new line
                    const span = document.createElement('span');
                    span.style.display = 'block';
                    span.style.minHeight = '1.8em';
                    aboutText.appendChild(span);
                }

                if (charIndex < aboutContent[lineIndex].length) {
                    currentLine += aboutContent[lineIndex].charAt(charIndex);
                    aboutText.lastChild.textContent = currentLine;
                    charIndex++;
                    setTimeout(typeAboutLine, 35); // Typing speed per character
                } else {
                    currentLine = "";
                    lineIndex++;
                    charIndex = 0;

                    // Add extra pause for paragraph breaks (after a blank line)
                    const shouldPauseLonger = aboutContent[lineIndex] === '';

                    setTimeout(typeAboutLine, shouldPauseLonger ? 400 : 200); // Pause between lines/paragraphs
                }
            } else {
                // Add final cursor
                const cursorSpan = document.createElement('span');
                cursorSpan.className = 'cursor-blink-about';
                aboutText.appendChild(cursorSpan);
            }
        }

        // Start typing after specialties complete
        setTimeout(typeAboutLine, 2500);
    }

    // About Section Toggle Logic
    const btnProfessional = document.getElementById('btn-professional');
    const btnPersonal = document.getElementById('btn-personal');
    const modeProfessional = document.getElementById('about-professional');
    const modePersonal = document.getElementById('about-personal');

    if (btnProfessional && btnPersonal && modeProfessional && modePersonal) {
        btnProfessional.addEventListener('click', () => {
            btnProfessional.classList.add('active');
            btnPersonal.classList.remove('active');
            modeProfessional.classList.add('active');
            modePersonal.classList.remove('active');
        });

        btnPersonal.addEventListener('click', () => {
            btnPersonal.classList.add('active');
            btnProfessional.classList.remove('active');
            modePersonal.classList.add('active');
            modeProfessional.classList.remove('active');
        });
    }

    // Auto-update footer year and last updated date
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    const lastUpdatedEl = document.getElementById('last-updated');
    if (lastUpdatedEl) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdatedEl.textContent = now.toLocaleDateString('en-US', options);
    }

    // Initialize Skills Radar Chart
    const ctx = document.getElementById('skillsRadarChart');
    if (ctx) {
        // Set chart defaults for dark mode readability
        Chart.defaults.color = '#8b949e';
        Chart.defaults.font.family = "'Nunito', sans-serif";

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['DevOps & IaC', 'Cloud Platforms', 'Programming', 'Monitoring', 'Security & Net', 'AI & MLOps'],
                datasets: [{
                    label: 'Capability Depth',
                    data: [95, 90, 85, 80, 85, 75],
                    backgroundColor: 'rgba(88, 166, 255, 0.2)',
                    borderColor: '#58a6ff',
                    borderWidth: 2,
                    pointBackgroundColor: '#2f81f7',
                    pointBorderColor: '#0d1117',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#2f81f7',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: '#30363d'
                        },
                        grid: {
                            color: '#30363d'
                        },
                        pointLabels: {
                            font: {
                                size: 11,
                                weight: 'bold'
                            },
                            color: '#c9d1d9'
                        },
                        ticks: {
                            display: false,
                            stepSize: 20
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#161b22',
                        titleColor: '#fff',
                        bodyColor: '#c9d1d9',
                        borderColor: '#30363d',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `Depth: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Skills population and animation
    const skillsData = {
        devops: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Git', 'ZFS', 'Helm', 'Istio', 'Docker Compose'],
        cloud: ['AWS', 'Azure', 'Proxmox', 'VMware/Hyper-V', 'Hybrid/on-prem', 'AIDX Flight Feeds', 'SAM System'],
        languages: ['Python', 'PowerShell', 'Bash', 'SQL'],
        monitoring: ['Zabbix', 'Prometheus', 'Grafana', 'VPC Flow Logs'],
        security: ['IAM/SSO', 'Keycloak', 'TLS/SSL', 'VPNs', 'VLANs', 'Firewalls', 'Wireshark', 'SIEM', 'Ubiquiti/Unifi'],
        ai: ['MLOps', 'GPU Acceleration', 'Ollama', 'llama.cpp', 'OpenWebUI', 'MLflow']
    };

    // Populate skills with dynamic styling based on category
    const categoryColors = {
        devops: '#58a6ff',
        cloud: '#2f81f7',
        languages: '#3fb950',
        monitoring: '#ffc646',
        security: '#ffc646',
        ai: '#eb4470'
    };

    for (const [category, skills] of Object.entries(skillsData)) {
        const container = document.getElementById(`skills-${category}`);
        if (container) {
            skills.forEach((skill, index) => {
                const badge = document.createElement('span');
                badge.className = 'badge';
                badge.textContent = skill;
                badge.style.background = `rgba(${getRGB(categoryColors[category])}, 0.2)`;
                badge.style.border = `1px solid ${categoryColors[category]}`;
                badge.style.color = '#c9d1d9';
                badge.style.transition = 'all 0.3s ease';

                badge.addEventListener('mouseenter', () => {
                    badge.style.background = categoryColors[category];
                    badge.style.color = '#fff';
                    badge.style.transform = 'scale(1.1)';
                });

                badge.addEventListener('mouseleave', () => {
                    badge.style.background = `rgba(${getRGB(categoryColors[category])}, 0.2)`;
                    badge.style.border = `1px solid ${categoryColors[category]}`;
                    badge.style.color = '#c9d1d9';
                    badge.style.transform = 'scale(1)';
                });

                // Staggered animation for each skill
                setTimeout(() => {
                    badge.style.opacity = '0';
                    badge.style.transform = 'translateY(10px)';
                    container.appendChild(badge);
                    setTimeout(() => {
                        badge.style.transition = 'all 0.4s ease';
                        badge.style.opacity = '1';
                        badge.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            });
        }
    }

    // Helper function to convert hex to RGB
    function getRGB(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '201, 209, 217';
    }

    // Animate progress bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-progress-item').forEach(item => {
        observer.observe(item);
    });

   // Animate skills categories on scroll
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('#skills .skills-category').forEach(category => {
        skillsObserver.observe(category);
    });

   // Animate project cards on scroll
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('#projects .bento-card').forEach(card => {
        projectObserver.observe(card);
    });

    // Animate education cards on scroll
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('#education .education-card-modern').forEach(card => {
        educationObserver.observe(card);
    });

    // Animate certification cards on scroll
    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

   document.querySelectorAll('#certifications .cert-card').forEach(card => {
        certObserver.observe(card);
    });

    // ==========================================================================
    // Interactive Terminal Logic
    // ==========================================================================
    const terminalBody = document.getElementById('terminal-body');
    const terminalInput = document.getElementById('terminal-input');
    const heroTerminal = document.getElementById('hero-terminal');

    // Expose focusTerminal globally for inline onclick
    window.focusTerminal = function() {
        if (terminalInput) {
            terminalInput.focus();
        }
    };

    // ==========================================================================
    // Neofetch Left Pane - System Info Panel
    // ==========================================================================
    const neofetchContent = document.getElementById('neofetch-content');
    if (neofetchContent) {
        const asciiArt = `  .---.  nicolas@nick-t.net
 /     \\ -------------------
|  N T  | OS:     Proxmox VE / Ubuntu / Arch
|       | Kernel: Nicolas Teixeira v2026.06
 \\     / Uptime:  8 years in Systems Tech
  '---'  Shell:   zsh 5.9 (Interactive)`;

        const infoRows = [
            { key: 'Resolution', val: '1920x1080 @ 144Hz' },
            { key: 'Focus',      val: 'Cloud-Native · IaC · MLOps' },
            { key: 'Edu',        val: 'M.S. Soft. Eng & DevOps (WGU)' },
            { key: 'Stack',      val: 'K8s · AWS · Terraform · Python' },
            { key: 'GPU',        val: 'NVIDIA RTX - Self-hosted AI' },
            { key: 'Status',     val: '🟢 Available for Opportunities' },
        ];

        const colorPills = ['#ff5f56','#ffbd2e','#27c93f','#58a6ff','#9d4edd','#00f0ff','#3fb950','#ff6b6b'];

        // Build and reveal neofetch line-by-line
        function buildNeofetch() {
            neofetchContent.innerHTML = '';

            // ASCII pre block
            const pre = document.createElement('pre');
            pre.className = 'neofetch-ascii mb-3';
            pre.textContent = '';
            neofetchContent.appendChild(pre);

            // Info container
            const infoDiv = document.createElement('div');
            neofetchContent.appendChild(infoDiv);

            // Color pills
            const pillsDiv = document.createElement('div');
            pillsDiv.className = 'neofetch-color-pills';
            colorPills.forEach(c => {
                const s = document.createElement('span');
                s.style.background = c;
                pillsDiv.appendChild(s);
            });
            neofetchContent.appendChild(pillsDiv);

            // CTA links
            const ctaDiv = document.createElement('div');
            ctaDiv.className = 'neofetch-cta';
            ctaDiv.innerHTML = `
                <a href="#projects"><i class="fas fa-folder-open"></i>$ view projects</a>
                <a href="https://www.linkedin.com/in/nicolasdealmeidateixeira/" target="_blank"><i class="fab fa-linkedin"></i>$ open linkedin</a>
                <a href="https://github.com/nicolasnkGH" target="_blank"><i class="fab fa-github"></i>$ open github</a>
                <a href="mailto:careers@nick-t.net"><i class="fas fa-envelope"></i>$ mail nicolas</a>
            `;
            neofetchContent.appendChild(ctaDiv);

            // Animate ASCII lines
            const asciiLines = asciiArt.split('\n');
            let lineIdx = 0;
            let charIdx = 0;
            function typeAscii() {
                if (lineIdx >= asciiLines.length) {
                    // Then animate info rows
                    let rowIdx = 0;
                    function addInfoRow() {
                        if (rowIdx >= infoRows.length) return;
                        const row = infoRows[rowIdx++];
                        const d = document.createElement('div');
                        d.className = 'neofetch-info-row';
                        d.innerHTML = `<span class="neofetch-key">${row.key}</span><span class="neofetch-val">${row.val}</span>`;
                        infoDiv.appendChild(d);
                        setTimeout(addInfoRow, 80);
                    }
                    addInfoRow();
                    return;
                }
                const line = asciiLines[lineIdx];
                if (charIdx === 0) {
                    pre.textContent += '\n';
                }
                if (charIdx < line.length) {
                    pre.textContent = pre.textContent.slice(0, -0) + (charIdx === 0 ? pre.textContent + line[charIdx] : pre.textContent.slice(0,-1) + line[charIdx] + (charIdx + 1 < line.length ? '' : ''));
                    // simpler approach: just set full line at once then next
                    charIdx++;
                    setTimeout(typeAscii, 12);
                } else {
                    lineIdx++;
                    charIdx = 0;
                    setTimeout(typeAscii, 30);
                }
            }

            // Simpler: reveal ASCII art line by line with delay
            pre.textContent = '';
            asciiLines.forEach((line, i) => {
                setTimeout(() => {
                    pre.textContent += (i === 0 ? '' : '\n') + line;
                }, i * 120);
            });

            // Reveal info rows after ASCII
            infoRows.forEach((row, i) => {
                setTimeout(() => {
                    const d = document.createElement('div');
                    d.className = 'neofetch-info-row';
                    d.innerHTML = `<span class="neofetch-key">${row.key}</span><span class="neofetch-val">${row.val}</span>`;
                    infoDiv.appendChild(d);
                }, asciiLines.length * 120 + i * 90 + 200);
            });
        }

        buildNeofetch();
    }

    // ==========================================================================
    // tmux Status Bar Clock
    // ==========================================================================
    const tmuxClock = document.getElementById('tmux-clock');
    if (tmuxClock) {
        function updateClock() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            tmuxClock.textContent = `${h}:${m}:${s}`;
        }
        updateClock();
        setInterval(updateClock, 1000);
    }


    if (terminalBody && terminalInput) {
        let terminalPromptLine = null;
        let isBooting = true;
        let sudoMode = false;

        const bootLines = [
            { text: "[  OK  ] Starting Systems Infrastructure Diagnostic...", type: "info" },
            { text: "[  OK  ] Initialized AWS, Azure, & Proxmox connection modules.", type: "ok" },
            { text: "[  OK  ] Loaded Kubernetes orchestration layers.", type: "ok" },
            { text: "[  OK  ] Mounted Volume: WGU_MS_Software_Engineering_DevOps.", type: "ok" },
            { text: "[  OK  ] Established secure connection guest@nick-t.net.", type: "ok" },
            { text: "", type: "plain" },
            { text: "         .---.         nicolas@nick-t.net", type: "green" },
            { text: "        /     \\        ------------------", type: "blue" },
            { text: "        \\.@-@./        OS: Proxmox VE / AWS / Azure / Linux", type: "plain" },
            { text: "        /`\\_/`\\        Kernel: Nicolas Teixeira v2026.06", type: "plain" },
            { text: "       //  _  \\\\       Uptime: 8 years in Systems Tech", type: "plain" },
            { text: "      | \\_|_/ |        Shell: zsh 5.9 (Interactive CLI)", type: "plain" },
            { text: "     /\\   `-`   /\\     Edu: M.S. Software Eng & DevOps (Expected June 2026)", type: "plain" },
            { text: "     \\_/=====\\_/       Focus: Cloud-Native, IaC, MLOps, GPUs", type: "plain" },
            { text: "", type: "plain" },
            { text: "Welcome to Nicolas' interactive terminal. Type 'help' to start.", type: "info" },
            { text: "", type: "plain" }
        ];

        // Custom output writer
        function printLine(text, type) {
            const line = document.createElement('div');
            line.className = 'font-mono mb-1';
            
            if (type === 'ok') {
                line.innerHTML = `<span style="color:var(--sys-green); font-weight:bold;">[  OK  ]</span> ${text.replace('[  OK  ]', '')}`;
            } else if (type === 'info') {
                line.innerHTML = `<span style="color:var(--sys-blue); font-weight:bold;">[ INFO ]</span> ${text.replace('[ INFO ]', '')}`;
            } else if (type === 'green') {
                line.innerHTML = `<span style="color:var(--sys-green); font-weight:bold;">${text}</span>`;
            } else if (type === 'blue') {
                line.innerHTML = `<span style="color:var(--sys-blue); font-weight:bold;">${text}</span>`;
            } else if (type === 'error') {
                line.innerHTML = `<span style="color:var(--sys-red); font-weight:bold;">[ERROR]</span> ${text}`;
            } else if (type === 'html') {
                line.innerHTML = text;
            } else {
                line.textContent = text;
            }
            
            terminalBody.appendChild(line);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        // Print prompt line
        function printPrompt() {
            terminalPromptLine = document.createElement('div');
            terminalPromptLine.className = 'terminal-input-row font-mono';
            
            const promptSpan = document.createElement('span');
            promptSpan.className = 'terminal-prompt';
            promptSpan.textContent = sudoMode ? 'root@nick-t.net:~# ' : 'guest@nick-t.net:~$ ';
            
            const typingSpan = document.createElement('span');
            typingSpan.className = 'terminal-typing-text';
            typingSpan.style.color = '#fff';
            typingSpan.style.display = 'inline';
            typingSpan.style.whiteSpace = 'pre-wrap';
            
            const cursorSpan = document.createElement('span');
            cursorSpan.className = 'cli-cursor';
            
            terminalPromptLine.appendChild(promptSpan);
            terminalPromptLine.appendChild(typingSpan);
            terminalPromptLine.appendChild(cursorSpan);
            
            terminalBody.appendChild(terminalPromptLine);
            terminalBody.scrollTop = terminalBody.scrollHeight;
            
            terminalInput.value = '';
            // Auto focus if element is active
            if (document.activeElement === terminalInput) {
                terminalInput.focus();
            }
        }

        // Run boot sequence with simulated delay
        let bootIndex = 0;
        function runBoot() {
            if (bootIndex < bootLines.length) {
                printLine(bootLines[bootIndex].text, bootLines[bootIndex].type);
                bootIndex++;
                setTimeout(runBoot, 80);
            } else {
                isBooting = false;
                printPrompt();
            }
        }
        
        // Start boot sequence
        setTimeout(runBoot, 500);

        // Typing input handler
        let currentCommand = '';

        const updateTypingDisplay = () => {
            if (terminalPromptLine && !isBooting) {
                const typingSpan = terminalPromptLine.querySelector('.terminal-typing-text');
                if (typingSpan) {
                    typingSpan.textContent = currentCommand;
                    typingSpan.style.color = '#fff'; // Force white immediately while typing
                    typingSpan.style.opacity = '1';
                    typingSpan.style.visibility = 'visible';
                }
            }
        };

        // Command processing via global keydown, bypassing the hidden input entirely for robustness
        document.addEventListener('keydown', (e) => {
            if (isBooting) return;
            
            // Allow default browser shortcuts
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            
            // If another input/textarea is focused, let it act normally
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            if (activeTag === 'input' || activeTag === 'textarea') {
                 if (document.activeElement !== terminalInput) return;
            }
            
            if (e.key === 'Enter') {
                e.preventDefault();
                const cmd = currentCommand.trim();
                
                // Copy completed prompt to history
                if (terminalPromptLine) {
                    const cursor = terminalPromptLine.querySelector('.cli-cursor');
                    if (cursor) cursor.remove();
                    
                    const typingSpan = terminalPromptLine.querySelector('.terminal-typing-text');
                    if (typingSpan) {
                        typingSpan.textContent = currentCommand; // retain spaces if any before execution
                        typingSpan.style.color = '#fff';
                    }
                }
                
                currentCommand = '';
                processCommand(cmd);
                
            } else if (e.key === 'Backspace') {
                e.preventDefault();
                currentCommand = currentCommand.slice(0, -1);
                updateTypingDisplay();
            } else if (e.key.length === 1) { // Printable character
                e.preventDefault();
                currentCommand += e.key;
                updateTypingDisplay();
            }
        });

        function processCommand(rawCmd) {
            const cleanCmd = rawCmd.toLowerCase().trim();
            
            if (sudoMode) {
                // Sudo password entry simulation
                sudoMode = false;
                printLine('guest is not in the sudoers file. This incident will be reported.', 'error');
                printPrompt();
                return;
            }

            if (cleanCmd === '') {
                printPrompt();
                return;
            }

            const parts = cleanCmd.split(' ');
            const primary = parts[0];

            switch(primary) {
                case 'help':
                    printLine('Available CLI Commands:', 'blue');
                    printLine('  neofetch  - Display system specifications & details', 'plain');
                    printLine('  about     - Brief summary of Nicolas\' background', 'plain');
                    printLine('  skills    - List core systems engineering capabilities', 'plain');
                    printLine('  projects  - List active open-source platforms', 'plain');
                    printLine('  contact   - Display connection email & networks', 'plain');
                    printLine('  matrix    - Display a scrolling stream of cyber matrix code', 'plain');
                    printLine('  clear     - Wipe screen content', 'plain');
                    printLine('  sudo      - Acquire elevated root status', 'plain');
                    break;
                case 'neofetch':
                    bootLines.slice(5, 14).forEach(l => printLine(l.text, l.type));
                    break;
                case 'about':
                    printLine('SUMMARY:', 'blue');
                    printLine('Systems & Platform Engineer specializing in high-performance cloud, DevOps automation, and AI infrastructure. Self-hoster at heart and developer of secure enterprise automation.', 'plain');
                    break;
                case 'skills':
                    printLine('SYSTEM CAPABILITIES (Monitored):', 'blue');
                    printLine('  [CONTAINERS]  Kubernetes (K8s), Docker, Helm, Compose', 'plain');
                    printLine('  [AUTOMATION]  Terraform, Ansible, CI/CD (Azure DevOps, GitHub Actions)', 'plain');
                    printLine('  [LANGUAGES]   Python, PowerShell, Bash, SQL', 'plain');
                    printLine('  [TELEMETRY]   Prometheus, Grafana, Zabbix', 'plain');
                    printLine('  [PLATFORMS]   AWS, Azure, Proxmox VE, Hyper-V', 'plain');
                    printLine('  [MLOPS]       Ollama, NVIDIA GPU Drivers, CUDA Acceleration', 'plain');
                    break;
                case 'projects':
                    printLine('ACTIVE PROJECTS:', 'blue');
                    const projectCards = document.querySelectorAll('.bento-card');
                    if (projectCards.length === 0) {
                        printLine('  No active projects found.', 'plain');
                    } else {
                        projectCards.forEach(card => {
                            const titleEl = card.querySelector('.bento-title');
                            const linkEl = card.querySelector('a.bento-btn');
                            
                            const title = titleEl ? titleEl.textContent.trim() : 'Unknown Project';
                            let linkStr = '';
                            if (linkEl && linkEl.getAttribute('href')) {
                                const rawUrl = linkEl.getAttribute('href');
                                const displayUrl = rawUrl.replace('https://', '').replace('http://', '');
                                linkStr = `: <a href="${rawUrl}" target="_blank" style="color:var(--sys-cyan); text-decoration:underline;">${displayUrl}</a>`;
                            }
                            
                            printLine(`  - ${title}${linkStr}`, 'html');
                        });
                    }
                    break;
                case 'contact':
                    printLine('COMMUNICATION CHANNELS:', 'blue');
                    printLine('  Email:      careers@nick-t.net', 'plain');
                    printLine('  LinkedIn:   linkedin.com/in/nicolasdealmeidateixeira/', 'plain');
                    printLine('  GitHub:     github.com/nicolasnkGH', 'plain');
                    break;
                case 'clear':
                    terminalBody.innerHTML = '';
                    break;
                case 'sudo':
                    sudoMode = true;
                    printLine('[sudo] password for guest: ', 'plain');
                    printPrompt();
                    return;
                case 'matrix':
                    runMatrixAnimation();
                    return;
                default:
                    printLine(`zsh: command not found: ${rawCmd}. Type 'help' for suggestions.`, 'error');
            }

            printPrompt();
        }

        function runMatrixAnimation() {
            isBooting = true; // Lock prompt
            let rows = 0;
            const matrixInterval = setInterval(() => {
                if (rows > 25) {
                    clearInterval(matrixInterval);
                    isBooting = false;
                    printPrompt();
                } else {
                    let binaryStr = "";
                    for (let i = 0; i < 40; i++) {
                        binaryStr += Math.random() > 0.5 ? "1 " : "0 ";
                    }
                    const rowDiv = document.createElement('div');
                    rowDiv.className = 'font-mono text-success small';
                    rowDiv.textContent = binaryStr;
                    terminalBody.appendChild(rowDiv);
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                    rows++;
                }
            }, 80);
        }
    }

    // ==========================================================================
    // Contact Form & Copy to Clipboard Logic
    // ==========================================================================
    const btnCopyEmail = document.getElementById('btn-copy-email');
    const emailText = document.getElementById('contact-email-text');
    
    if (btnCopyEmail && emailText) {
        btnCopyEmail.addEventListener('click', () => {
            const emailStr = emailText.innerText;
            navigator.clipboard.writeText(emailStr).then(() => {
                const icon = btnCopyEmail.querySelector('i');
                icon.className = 'fas fa-check text-success';
                setTimeout(() => {
                    icon.className = 'fas fa-copy';
                }, 2000);
            });
        });
    }

    const emailInput = document.getElementById('email');
    const emailValidIcon = document.getElementById('email-valid-icon');

    if (emailInput && emailValidIcon) {
        emailInput.addEventListener('input', (e) => {
            const email = e.target.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                emailValidIcon.style.display = 'block';
                emailInput.style.borderColor = 'var(--sys-green)';
            } else {
                emailValidIcon.style.display = 'none';
                if (email.length > 0) {
                    emailInput.style.borderColor = 'var(--sys-red)';
                } else {
                    emailInput.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
            }
        });
    }
});
