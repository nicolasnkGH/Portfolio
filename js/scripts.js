// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // --- Standard Navbar Logic (KEEP THIS) ---
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    // --- End Standard Navbar Logic ---

    // --- CLI STYLING AND TYPING LOGIC (Simplified & Synchronized) ---

    // Function to replace raw text with final styled HTML (runs at the end for the ABOUT CLI)
    function buildFinalStyledHtml(rawText) {
        let finalContent = rawText;

        // 1. Blue highlight for expertise summary 
        finalContent = finalContent.replace('Deploying, securing, and automating mission-critical infrastructure across cloud and virtualization platforms.',
            '<span class="text-info">Deploying, securing, and automating mission-critical infrastructure across cloud and virtualization platforms.</span>');

        // 2. Yellow highlight for major categories 
        finalContent = finalContent.replace('Cloud & CI/CD:', '<span class="cli-highlight">Cloud & CI/CD:</span>');
        finalContent = finalContent.replace('Infrastructure as Code:', '<span class="cli-highlight">Infrastructure as Code:</span>');
        finalContent = finalContent.replace('Container Orchestration:', '<span class="cli-highlight">Container Orchestration:</span>');
        finalContent = finalContent.replace('Networking & Security:', '<span class="cli-highlight">Networking & Security:</span>');

        // 3. Green highlight for Linux distros 
        finalContent = finalContent.replace('Debian, Ubuntu, RHEL', '<span class="linux-distro">Debian, Ubuntu, RHEL</span>');

        // 🚀 NEW: Highlight Scripting Languages (Using cli-highlight for high contrast)
        finalContent = finalContent.replace('- Python (Scripting, Networking)', '- <span class="cli-highlight">Python</span> (Scripting, Networking)');
        finalContent = finalContent.replace('- PowerShell (Windows/Azure Automation)', '- <span class="cli-highlight">PowerShell</span> (Windows/Azure Automation)');
        finalContent = finalContent.replace('- Bash (Linux System Management)', '- <span class="cli-highlight">Bash</span> (Linux System Management)');

        // CRITICAL: Replace raw newlines with HTML breaks to preserve spacing 
        finalContent = finalContent.replace(/\n/g, '<br>');

        return finalContent;
    }

    // CORE TYPING ENGINE FUNCTION (Generic and reliable)
    function startTyping(text, element, finalCursorClass, baseSpeed = 40, isCliOutput = false) {
        let charIndex = 0;
        let characters = text.split('');

        // Define typeChar here so it can be called correctly
        function typeChar() {
            if (charIndex < characters.length) {
                let char = characters[charIndex];

                let currentSpeed = baseSpeed;

                // 1. Logic for Newline/Break (CRITICAL FIX)
                if (char === '\n') {
                    // Replace the raw '\n' with <br> tag instantly and continue
                    // We remove the last character typed if it exists, but the check is safer.
                    if (element.innerHTML.slice(-1) !== '>') {
                        element.innerHTML = element.innerHTML.slice(0, -1) + '<br>';
                    } else {
                        element.innerHTML += '<br>';
                    }

                    charIndex++;
                    setTimeout(typeChar, 10); // Very fast continue
                    return;
                }

                // 2. Add the character (Standard Typing)
                element.innerHTML += char;
                charIndex++;

                // 3. Apply specific pauses for effect
                if (isCliOutput && char === '$') {
                    currentSpeed = 300; // Pause after prompt
                }

                setTimeout(typeChar, currentSpeed);

            } else {
                // <-- FINALIZATION BLOCK STARTS HERE -->

                // 1. Remove the cursor effect globally
                element.classList.add(finalCursorClass);

                // 2. Apply final header styling if it's the H1 element
                if (element.id === 'masthead-typing-output') {
                    element.classList.add('typing-finished-style');
                }

                // 3. Apply the final complex styling ONLY if it's the CLI section
                if (isCliOutput) {
                    element.innerHTML = buildFinalStyledHtml(cliText);
                }
            }
        }

        // Start the sequence: This call is necessary to kick off the typing.
        element.innerHTML = ''; // Clear the element content
        typeChar();
    }

    // --- INITIALIZATION SEQUENCE ---

    const mastheadElement = document.getElementById('masthead-typing-output');
    const subtitleElement = document.getElementById('masthead-subtitle');
    const cliOutputElement = document.getElementById('cli-output');

    // 1. Start Header H1 Typing (Slower, cleaner speed)
    if (mastheadElement) {
        // Use a speed of 70ms for a deliberate, non-frantic look
        startTyping(mastheadText, mastheadElement, 'masthead-typing-done', 70);
    }

    // 2. Start Subtitle Typing after H1 is done
    if (subtitleElement) {
        setTimeout(() => {
            // Use slightly slower speed for the subtitle
            startTyping(subtitleText, subtitleElement, 'subtitle-typing-done', 80);
        }, 1500); // 1.5 second delay
    }

    // 3. Start CLI typing only when the terminal itself is in view
    if (cliOutputElement) {
        const cliContainer = document.querySelector('.cli-terminal-container') || cliOutputElement;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry && entry.isIntersecting) {
                startTyping(cliText, cliOutputElement, 'typing-done', 10, true);
                observer.disconnect(); // run once
            }
        }, {
            threshold: 0.65,             // require ~65% visibility
            rootMargin: "0px 0px -15% 0px" // makes it harder to trigger early
        });

        observer.observe(cliContainer);
    }

});