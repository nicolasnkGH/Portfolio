// Portfolio JavaScript - Modern hero with typing effects

document.addEventListener('DOMContentLoaded', function() {

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

    // Navbar background on scroll
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(13, 17, 23, 0.98)';
            } else {
                navbar.style.backgroundColor = 'rgba(13, 17, 23, 0.95)';
            }
        });
    }

    // Typing effect for subtitle
    const subtitleElement = document.getElementById('subtitle-typing');
    if (subtitleElement) {
        const subtitleText = 'Systems & Platform Engineer | Cloud, Data & AI Infrastructure';
        let index = 0;

        function typeSubtitle() {
            if (index < subtitleText.length) {
                subtitleElement.textContent += subtitleText.charAt(index);
                index++;
                setTimeout(typeSubtitle, 50);
            } else {
                // Add cursor blink effect at end
                subtitleElement.innerHTML += '<span class="cursor-blink">|</span>';
            }
        }

        // Start typing after a brief delay
        setTimeout(typeSubtitle, 500);
    }

    // Typing effect for specialty list items
    const specialtyList = document.getElementById('specialty-list');
    if (specialtyList) {
        const specialties = [
            '<i class="fas fa-cube specialty-icon"></i> Kubernetes & Cloud-Native Infrastructure',
            '<i class="fas fa-brain specialty-icon"></i> MLOps & AI Inference Platforms',
            '<i class="fas fa-cogs specialty-icon"></i> CI/CD Automation & IaC',
            '<i class="fas fa-microchip specialty-icon"></i> GPU Acceleration & Cost Optimization'
        ];

        let itemIndex = 0;

        function typeSpecialtyItem() {
            if (itemIndex < specialties.length) {
                const li = document.createElement('li');
                li.className = 'specialty-item';
                li.innerHTML = specialties[itemIndex];
                specialtyList.appendChild(li);

                // Trigger reflow to restart animation
                void li.offsetWidth;
                li.classList.add('visible');

                itemIndex++;
                setTimeout(typeSpecialtyItem, 300);
            } else {
                // Add cursor blink effect
                const finalLi = document.createElement('li');
                finalLi.className = 'specialty-item visible';
                finalLi.innerHTML = '<span class="cursor-blink" style="margin-left: 8px; color: var(--tech-blue);">|</span>';
                specialtyList.appendChild(finalLi);
            }
        }

        // Start typing after subtitle completes
        setTimeout(typeSpecialtyItem, 1500);
    }

    // Typing effect for About section text
    const aboutText = document.getElementById('about-text');
    if (aboutText) {
        const aboutContent = [
            "Systems and Platform Engineer with strong experience designing,",
            "deploying, and operating cloud-native infrastructure for data-intensive",
            "and event-driven systems. Recently focused on enabling AI and ML workloads",
            "through self-hosted inference platforms, GPU acceleration, observability,",
            "and performance optimization."
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let currentLine = "";

        function typeAboutLine() {
            if (lineIndex < aboutContent.length) {
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
                    setTimeout(typeAboutLine, 200); // Pause between lines
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

});
