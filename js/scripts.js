// Portfolio JavaScript - Modern hero with typing effects

// Work experience data synced with HTML
const workExperience = {
    current: {
        company: 'ADB Safegate',
        title: 'Systems Engineer',
        location: 'Columbus, OH',
        dates: 'April 2023 — Present',
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
        dates: 'August 2021 — April 2023',
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
        dates: 'July 2018 — July 2021',
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

    // Typing effect for specialty list items - character by character
const specialtyList = document.getElementById('specialty-list');
console.log('DOM is ready');
console.log('Specialty list element found:', !!specialtyList);
const locPin = document.querySelector('.location-pin-container');
console.log('Location pin container found:', !!locPin);
if (specialtyList) {
    const specialties = [
        '<i class="fas fa-dharmachakra specialty-icon" style="color:#58a6ff"></i> Kubernetes & Cloud-Native Infrastructure',
        '<i class="fas fa-brain specialty-icon" style="color:#eb4335"></i> MLOps & AI Inference Platforms',
        '<i class="fas fa-gears specialty-icon" style="color:#ea4335"></i> CI/CD Automation & IaC',
        '<i class="fas fa-microchip specialty-icon" style="color:#3fb950"></i> GPU Acceleration & Cost Optimization'
    ];

    specialties.forEach((html, index) => {
        const li = document.createElement('li');
        li.className = 'specialty-item';
        li.style.opacity = '0';

        const contentSpan = document.createElement('span');
        contentSpan.innerHTML = '';
        li.appendChild(contentSpan);

        specialtyList.appendChild(li);
        console.log('Added item', index + 1, 'to list');

        let charIndex = 0;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const fullText = tempDiv.textContent || '';

        function typeCharacter() {
            if (charIndex < fullText.length) {
                contentSpan.textContent = fullText.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeCharacter, 25);
            } else {
                // Finalize with HTML including icons
                contentSpan.innerHTML = html;
                li.classList.add('visible');
                li.style.opacity = '1';
                console.log('Item', index + 1, 'complete');

                if (index < specialties.length - 1) {
                    setTimeout(() => {}, 100);
                }
            }
        }

        // Staggered start
        setTimeout(typeCharacter, index * 400);
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

    document.querySelectorAll('#projects .project-card').forEach(card => {
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

});

