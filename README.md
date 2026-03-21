# 🚀 Nicolas Teixeira | Professional Portfolio

## Overview

This repository hosts the source code for my professional portfolio website at [nick-t.net](https://nick-t.net/).

The site serves as an interactive resume and technical showcase, designed with a GitHub-inspired dark theme and modern DevOps engineering aesthetics. It demonstrates expertise in Cloud Infrastructure, DevOps Automation, Kubernetes orchestration, and AI/ML infrastructure.

## ✨ Latest Updates (2026-03-20)

### Visual Redesign
* **GitHub Dark Theme:** Complete visual overhaul with GitHub-inspired dark color palette (`#0d1117` background, tech blues/cyan/emerald accents)
* **Floating Tech Icons:** Animated floating technology icons (Docker, Kubernetes, Linux/Proxmox, Terraform, AWS, Ansible, Python) with ghost/spirit effects and soft radial glows
* **Modern Card Interactions:** Enhanced hover effects with gradient borders, lift animations, and glow shadows matching the tech theme

### Technical Improvements
* **Boxicons Integration:** Added Boxicons CDN for official Kubernetes branding (since Font Awesome lacks native k8s icons)
* **Chart.js Radar Chart:** Interactive skills visualization showing proficiency in Cloud Platforms, Container Orchestration, IaC & Automation, Programming, and Security
* **Enhanced CLI Terminal:** Larger font size (`1.1rem`), blue glow shadows, and improved mobile responsiveness
* **Footer Updates:** Updated tech stack to reflect actual deployment (Cloudflare Pages instead of Nginx)

### Repository Links Updated
All project repository links have been verified and updated:
* [ai-stack](https://github.com/nicolasnkGH/ai-stack) – Private AI inference platform with GPU acceleration
* [proxmox-automation](https://github.com/nicolasnkGH/proxmox-automation) – Proxmox VE automation scripts
* [powershell-Scripting](https://github.com/nicolasnkGH/powershell-Scripting) – Windows automation and PowerShell scripting
* [media-download](https://github.com/nicolasnkGH/media-download) – Containerized media downloader
* [home-networking-setup](https://github.com/nicolasnkGH/home-networking-setup) – Home lab networking configuration

## ✨ Key Technical Highlights

### Frontend Architecture & Interactivity

* **GitHub Dark Theme System:** Comprehensive CSS variable-based theming with custom color tokens (`--tech-blue`, `--tech-cyan`, `--tech-emerald`) for consistent visual identity
* **Synchronized Typing Effects (Vanilla JS):** Sequential typing animations across multiple sections:
  * **Masthead:** Professional subtitle typing at optimized speed (30ms/char)
  * **About Section:** CLI-style terminal typing within a stylized terminal window
* **Intersection Observer Animations:** Scroll-triggered fade-in/slide-up effects for cards, skills sections, and project showcases
* **Ghost/Spirit Icon Effects:** Custom CSS animations creating translucent ghost layers on floating tech icons with blur filters and wander animations

### DevOps & Infrastructure Principles

* **Contact Form Security:** Secure contact mechanism using serverless endpoint to eliminate spam and ensure zero email exposure in client-side code
* **Performance Focus:** Minimal JavaScript, consolidated CSS, and optimized asset loading for fast page load times
* **Responsive Design:** Mobile-first Bootstrap 5 grid with custom media queries for tablet and desktop breakpoints

## 🛠️ Tech Stack

| Component | Technology/Tool | Purpose |
| :--- | :--- | :--- |
| **Framework** | Bootstrap 5 | Responsive grid system, utility classes, and component foundation |
| **Charts** | Chart.js 4.4.0 | Radar chart visualization for skills proficiency display |
| **Icons** | Font Awesome 6.5.1 + Boxicons | Brand icons (Docker, Linux, Kubernetes) and UI iconography |
| **Styling** | Custom CSS3 | GitHub dark theme, animations, hover effects, and modern UI components |
| **Scripting** | Vanilla JavaScript (ES6) | Typing effects, Intersection Observer animations, smooth scroll |
| **Deployment** | Cloudflare Pages | Serverless hosting with global CDN distribution |

## 🚀 Viewing the Portfolio

To view the live portfolio, visit [nick-t.net](https://nick-t.net/).

### Local Development

To run the project locally:

1.  Clone this repository:
    ```bash
    git clone https://github.com/nicolasnkGH/Portfolio
    ```

2.  Navigate to the directory:
    ```bash
    cd Portfolio
    ```

3.  Open `index.html` in your web browser, or use a local server:
    ```bash
    # Using Python 3
    python3 -m http.server 8080

    # Then visit http://localhost:8080
    ```

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file with all sections
├── css/
│   └── styles.css      # Complete stylesheet (2500+ lines)
├── js/
│   └── scripts.js      # JavaScript for animations and interactivity
└── README.md           # This documentation file
```

---

**Developed and maintained by Nicolas Teixeira** | Systems & Platform Engineer | Cloud, DevOps, and AI Infrastructure


