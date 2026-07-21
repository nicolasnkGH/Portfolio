import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useWindowManager } from '../../components/WindowManager/WindowManagerContext';
import ContactApp from '../ContactApp/ContactApp';
import ResumeApp from '../ResumeApp/ResumeApp';
import PythonApp from '../PythonApp/PythonApp';

const bootLines = [
  { text: "[  OK  ] Starting Systems Infrastructure Diagnostic...", type: "ok" },
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

const TerminalApp = () => {
  const { t } = useLanguage();
  const { windows, openWindow, focusWindow } = useWindowManager();
  const [history, setHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  
  // Easter egg states
  const [terminalState, setTerminalState] = useState('normal'); // 'normal', 'hire_company', 'hire_role'
  const [hireData, setHireData] = useState({ company: '', role: '' });
  const [isLocked, setIsLocked] = useState(false); // blocks input during animations
  const [blackout, setBlackout] = useState(false); // triggers self-destruct blackout
  
  const bodyRef = useRef(null);
  const hiddenInputRef = useRef(null);

  const focusInput = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.focus();
    }
  };

  const openApp = (appId, Component, customTitle) => {
    const existing = windows.find(w => w.id === appId);
    if (existing) {
      focusWindow(appId);
    } else {
      openWindow({
        id: appId,
        title: customTitle || t(`apps.${appId}`),
        component: Component,
        x: 200,
        y: 100,
        width: 900,
        height: 600
      });
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, currentCommand, isBooting, isLocked]);

  // Boot sequence
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootLines.length) {
        setHistory(prev => [...prev, { id: Date.now() + Math.random(), ...bootLines[index] }]);
        index++;
      } else {
        clearInterval(interval);
        setIsBooting(false);
        setTimeout(() => focusInput(), 150);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleExecuteCommand = (cmdToExecute) => {
    const rawVal = cmdToExecute !== undefined ? cmdToExecute : currentCommand;
    const cmd = rawVal.trim();
    
    // Add the prompt line to history
    let promptText = 'guest@nick-t.net:~$ ';
    if (terminalState === 'hire_company') promptText = '[System] Enter Company Name: ';
    if (terminalState === 'hire_role') promptText = '[System] Enter Role: ';

    setHistory(prev => [...prev, { id: Date.now(), text: promptText + rawVal, type: 'prompt' }]);
    setCurrentCommand('');
    
    if (terminalState === 'hire_company') {
      if (cmd) {
        setHireData(prev => ({ ...prev, company: cmd }));
        setTerminalState('hire_role');
      } else {
        setTerminalState('normal');
        setHistory(prev => [...prev, { id: Date.now(), text: 'Hire process aborted.', type: 'error' }]);
      }
      return;
    }

    if (terminalState === 'hire_role') {
      if (cmd) {
        setTerminalState('normal');
        setIsLocked(true);
        setHistory(prev => [...prev, { id: Date.now(), text: `[System] Processing... Analyzing match for ${cmd} at ${hireData.company}...`, type: 'blue' }]);
        
        setTimeout(() => {
          setHistory(prev => [...prev, { id: Date.now(), text: `[System] Candidate MATCH = 99.99%`, type: 'green' }]);
        }, 1000);
        
        setTimeout(() => {
          setHistory(prev => [...prev, { id: Date.now(), text: `[System] Thank you ${hireData.company}! Launching contact protocol...`, type: 'green' }]);
        }, 2000);

        setTimeout(() => {
          setIsLocked(false);
          openApp('contact', ContactApp);
        }, 3000);
      } else {
        setTerminalState('normal');
        setHistory(prev => [...prev, { id: Date.now(), text: 'Hire process aborted.', type: 'error' }]);
      }
      return;
    }

    processCommand(cmd);
  };

  // Global Keydown for desktop typing
  useEffect(() => {
    if (isBooting || isLocked) return;

    const handleKeyDown = (e) => {
      // Don't intercept if they are typing in another real input (excluding our hidden input)
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag === 'input' && document.activeElement !== hiddenInputRef.current) return;
      if (activeTag === 'textarea') return;

      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        handleExecuteCommand();
      } else if (e.key === 'Backspace' && document.activeElement !== hiddenInputRef.current) {
        e.preventDefault();
        setCurrentCommand(prev => prev.slice(0, -1));
      } else if (e.key.length === 1 && document.activeElement !== hiddenInputRef.current) {
        e.preventDefault();
        setCurrentCommand(prev => prev + e.key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentCommand, isBooting, terminalState, isLocked, hireData]);

  const processCommand = (rawCmd) => {
    const cleanCmd = rawCmd.toLowerCase().trim();

    if (cleanCmd === '') return;

    const parts = cleanCmd.split(' ');
    const primary = parts[0];

    const newLines = [];
    const addLine = (text, type) => newLines.push({ id: Date.now() + Math.random(), text, type });

    switch(primary) {
      case 'help':
        addLine(t('terminal.help.desc'), 'blue');
        addLine(`  help      - ${t('terminal.help.help')}`, 'plain');
        addLine(`  about     - ${t('terminal.help.about')}`, 'plain');
        addLine(`  skills    - ${t('terminal.help.skills')}`, 'plain');
        addLine(`  projects  - ${t('terminal.help.projects')}`, 'plain');
        addLine(`  contact   - ${t('terminal.help.contact')}`, 'plain');
        addLine('  hire      - Initiate the recruitment workflow', 'green');
        addLine('  ssh       - Connect to a remote server (try: ssh homelab)', 'plain');
        addLine('  hack      - Initiate mainframe access', 'plain');
        addLine(`  clear     - ${t('terminal.help.clear')}`, 'plain');
        addLine(`  sudo      - ${t('terminal.help.sudo')}`, 'plain');
        addLine('  python    - Launch interactive Python environment', 'plain');
        addLine('  sudo su   - [WARNING] For Authorized Personnel Only', 'red');
        break;
      case 'neofetch':
        bootLines.slice(5, 14).forEach(l => addLine(l.text, l.type));
        break;
      case 'about':
        addLine('SUMMARY:', 'blue');
        addLine(t('terminal.about'), 'plain');
        break;
      case 'skills':
        addLine(t('terminal.skills'), 'blue');
        addLine(`  [CONTAINERS]  ${t('terminal.skillsLists.containers')}`, 'plain');
        addLine(`  [AUTOMATION]  ${t('terminal.skillsLists.cicd')}`, 'plain');
        addLine(`  [LANGUAGES]   ${t('terminal.skillsLists.prog')}`, 'plain');
        addLine(`  [TELEMETRY]   Prometheus, Grafana, Zabbix`, 'plain');
        addLine(`  [PLATFORMS]   ${t('terminal.skillsLists.cloud')}`, 'plain');
        addLine(`  [MLOPS]       Ollama, NVIDIA GPU Drivers, CUDA Acceleration`, 'plain');
        break;
      case 'projects':
        addLine(t('terminal.projects'), 'blue');
        addLine('  - Web OS Portfolio: <a href="https://github.com/nicolasnkGH/Portfolio" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">github.com/nicolasnkGH/Portfolio</a>', 'html');
        addLine('    * Interactive desktop-environment portfolio built with React.', 'plain');
        addLine('  - StarGazer: <a href="https://stargazer.nick-t.net" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">stargazer.nick-t.net</a>', 'html');
        addLine('    * Python, FastAPI, React. Global weather & stargazing forecast.', 'plain');
        addLine('  - Private AI Stack: <a href="https://github.com/nicolasnkGH/ai-stack" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">github.com/nicolasnkGH/ai-stack</a>', 'html');
        addLine('    * Self-hosted LLM infrastructure using Docker and GPUs.', 'plain');
        addLine('  - Proxmox Automation: <a href="https://github.com/nicolasnkGH/proxmox-automation" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">github.com/nicolasnkGH/proxmox-automation</a>', 'html');
        addLine('    * Automated VM and container deployment using Bash.', 'plain');
        addLine('  - Home Networking: <a href="https://github.com/nicolasnkGH/home-networking-setup" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">github.com/nicolasnkGH/home-networking-setup</a>', 'html');
        addLine('    * VLAN segmentation, firewall rules, and self-hosted DNS.', 'plain');
        break;
      case 'contact':
        addLine(t('terminal.contactTitle'), 'blue');
        addLine(`  ${t('terminal.contactFields.email')}:      <a href="mailto:careers@nick-t.net" style="color:var(--accent-blue); text-decoration:underline;">careers@nick-t.net</a>`, 'html');
        addLine(`  ${t('terminal.contactFields.linkedin')}:   <a href="https://linkedin.com/in/nicolasdealmeidateixeira/" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">linkedin.com/in/nicolasdealmeidateixeira/</a>`, 'html');
        addLine(`  ${t('terminal.contactFields.github')}:     <a href="https://github.com/nicolasnkGH" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">github.com/nicolasnkGH</a>`, 'html');
        addLine('', 'plain');
        addLine('Launching Contact UI...', 'info');
        setTimeout(() => {
          openApp('contact', ContactApp);
        }, 1200);
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo':
        if (cleanCmd === 'sudo') {
          addLine('usage: sudo command', 'plain');
        } else if (cleanCmd === 'sudo su') {
          runSelfDestruct();
          return;
        } else {
          addLine('[sudo] password for guest: ', 'plain');
          setTimeout(() => {
             setHistory(prev => [...prev, { id: Date.now(), text: `${cleanCmd.replace('sudo ', '')}: guest is not in the sudoers file. This incident will be reported.`, type: 'error' }]);
          }, 800);
        }
        break;
      case 'whoami':
        addLine('guest-recruiter-looking-for-awesome-engineer', 'green');
        break;
      case 'hire':
        setTerminalState('hire_company');
        break;
      case 'ssh':
        if (parts[1] === 'homelab') {
          runSSHSimulation();
          return;
        } else {
          addLine(`ssh: Could not resolve hostname ${parts[1] || ''}: Name or service not known`, 'error');
        }
        break;
      case 'hack':
        runHackAnimation();
        return;
      case 'python':
        addLine('Starting Python 3.10 virtual environment...', 'info');
        setTimeout(() => {
          openApp('python', PythonApp, 'Python IDE');
        }, 500);
        break;
      default:
        addLine(`zsh: ${t('terminal.commandNotFound')}: ${rawCmd}. Type 'help'`, 'error');
    }

    setHistory(prev => [...prev, ...newLines]);
  };

  const runSSHSimulation = () => {
    setIsLocked(true);
    setHistory(prev => [...prev, { id: Date.now(), text: 'Connecting to proxmox.nick-t.internal...', type: 'info' }]);
    
    setTimeout(() => {
      setHistory(prev => [...prev, { id: Date.now(), text: 'Warning: Permanently added \'proxmox.nick-t.internal\' to the list of known hosts.', type: 'plain' }]);
    }, 800);

    setTimeout(() => {
      const sshLines = [
        { text: 'Linux pve-node-01 6.8.4-2-pve #1 SMP PREEMPT_DYNAMIC PVE', type: 'plain' },
        { text: '', type: 'plain' },
        { text: '  ____                                  __     _______ ', type: 'green' },
        { text: ' |  _ \\ _ __ _____  ___ __ ___   _____  \\ \\   / / ____|', type: 'green' },
        { text: ' | |_) | \'__/ _ \\ \\/ / \'_ ` _ \\ / _ \\ \\/ \\ \\ / /|  _|  ', type: 'green' },
        { text: ' |  __/| | | (_) >  <| | | | | | (_) >  < \\ V / | |___ ', type: 'green' },
        { text: ' |_|   |_|  \\___/_/\\_\\_| |_| |_|\\___/_/\\_\\ \\_/  |_____|', type: 'green' },
        { text: '', type: 'plain' },
        { text: 'System Information:', type: 'blue' },
        { text: '  CPU: AMD Ryzen 9 5950X (32) @ 3.4GHz', type: 'plain' },
        { text: '  RAM: 128GB DDR4 ECC', type: 'plain' },
        { text: '  GPU: 2x NVIDIA RTX 3090 24GB (PCIe Passthrough Active)', type: 'plain' },
        { text: '  Storage: 4x 2TB NVMe ZFS RAID-Z1', type: 'plain' },
        { text: '  Uptime: 42 days, 14:02:11', type: 'plain' },
        { text: '', type: 'plain' },
        { text: 'Active Services:', type: 'blue' },
        { text: '  [+] k3s-server.service       [+] gitlab-runner.service', type: 'plain' },
        { text: '  [+] ollama-gpu.service       [+] prometheus.service', type: 'plain' },
        { text: '  [+] traefik.service          [+] grafana.service', type: 'plain' },
        { text: '', type: 'plain' },
        { text: 'root@pve-node-01:~# Connection closed by foreign host.', type: 'error' }
      ];
      setHistory(prev => [...prev, ...sshLines.map((l, i) => ({ id: Date.now() + i, ...l }))]);
      setIsLocked(false);
    }, 2000);
  };

  const runHackAnimation = () => {
    setIsLocked(true);
    let iterations = 0;
    const hackInterval = setInterval(() => {
      const gibberish = Array.from({length: 8}, () => 
        Math.random().toString(36).substring(2, 10) + ' ' + 
        Math.random().toString(16).substring(2, 8).toUpperCase()
      ).join(' ');
      setHistory(prev => [...prev, { id: Date.now() + Math.random(), text: gibberish, type: 'green' }]);
      iterations++;
      
      if (iterations > 15) {
        clearInterval(hackInterval);
        setTimeout(() => {
          setHistory(prev => [...prev, 
            { id: Date.now()+1, text: '', type: 'plain' },
            { id: Date.now()+2, text: 'ACCESS GRANTED to Nicolas\' Resume Data...', type: 'ok' },
            { id: Date.now()+3, text: 'Initializing GUI renderer...', type: 'info' }
          ]);
          setTimeout(() => {
            setIsLocked(false);
            openApp('resume', ResumeApp);
          }, 1500);
        }, 500);
      }
    }, 100);
  };

  const runSelfDestruct = () => {
    setIsLocked(true);
    setHistory(prev => [...prev, { id: Date.now(), text: 'WARNING: Unauthorized root access detected.', type: 'error' }]);
    
    setTimeout(() => {
      setHistory(prev => [...prev, { id: Date.now(), text: 'Initiating self-destruct sequence in 3...', type: 'error' }]);
    }, 1000);
    setTimeout(() => {
      setHistory(prev => [...prev, { id: Date.now(), text: '2...', type: 'error' }]);
    }, 2000);
    setTimeout(() => {
      setHistory(prev => [...prev, { id: Date.now(), text: '1...', type: 'error' }]);
    }, 3000);
    setTimeout(() => {
      setBlackout(true);
    }, 3500);
    setTimeout(() => {
      setBlackout(false);
      setHistory(prev => [...prev, { id: Date.now(), text: 'Just kidding. I need this portfolio to stay online! Try typing "help" instead.', type: 'ok' }]);
      setIsLocked(false);
    }, 6000);
  };

  const renderLine = (line) => {
    if (line.type === 'prompt') return <div>{line.text}</div>;
    if (line.type === 'html') return <div dangerouslySetInnerHTML={{ __html: line.text }} />;
    
    let prefix = '';
    let colorClass = '';
    let content = line.text;

    if (line.type === 'ok') {
       prefix = '[  OK  ]'; colorClass = 'var(--sys-green)'; 
    } else if (line.type === 'info') {
       prefix = '[ INFO ]'; colorClass = 'var(--accent-blue)';
    } else if (line.type === 'error') {
       prefix = '[ERROR]'; colorClass = 'var(--accent-red)';
    }

    if (prefix && content.startsWith(prefix)) {
       content = content.replace(prefix, '').trim();
    }

    if (prefix) {
      return <div><span style={{color: colorClass, fontWeight:'bold'}}>{prefix}</span> {content}</div>;
    }

    if (line.type === 'green') return <div><span style={{color:'var(--sys-green)', fontWeight:'bold'}}>{line.text}</span></div>;
    if (line.type === 'blue') return <div><span style={{color:'var(--accent-blue)', fontWeight:'bold'}}>{line.text}</span></div>;
    if (line.type === 'red') return <div><span style={{color:'var(--accent-red)', fontWeight:'bold'}}>{line.text}</span></div>;
    
    return <div>{line.text}</div>;
  };

  return (
    <div 
      className="terminal-app"
      onClick={focusInput}
      onTouchStart={focusInput}
      style={{ 
        position: 'relative',
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        backgroundColor: '#05070a', 
        color: '#c9d1d9', 
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
        fontSize: '0.85rem',
        overflow: 'hidden',
        cursor: 'text'
      }}
    >
      {/* Hidden real input for mobile keyboard activation */}
      <input
        ref={hiddenInputRef}
        type="text"
        value={currentCommand}
        onChange={(e) => setCurrentCommand(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleExecuteCommand(e.target.value);
          }
        }}
        style={{
          position: 'absolute',
          opacity: 0,
          top: 0,
          left: 0,
          width: '1px',
          height: '1px',
          pointerEvents: 'none'
        }}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
      />

      {blackout && (
        <div style={{
           position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
           backgroundColor: '#000', zIndex: 9999,
           display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
           <div style={{ color: 'var(--accent-red)', fontSize: '2rem', fontWeight: 'bold', animation: 'flash 0.15s infinite' }}>
              CRITICAL KERNEL PANIC
           </div>
        </div>
      )}

      {/* Terminal Content */}
      <div 
        ref={bodyRef}
        style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        {history.map(line => (
          <div key={line.id} style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {renderLine(line)}
          </div>
        ))}
        
        {(!isBooting && !isLocked && terminalState === 'normal') && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--sys-green)', fontWeight: 'bold', marginRight: '8px', flexShrink: 0 }}>
              guest@nick-t.net:~$
            </span>
            <span style={{ color: '#fff', whiteSpace: 'pre-wrap' }}>{currentCommand}</span>
            <span className="terminal-cursor" />
          </div>
        )}

        {(!isBooting && !isLocked && terminalState === 'hire_company') && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold', marginRight: '8px', flexShrink: 0 }}>
              [System] Enter Company Name:
            </span>
            <span style={{ color: '#fff', whiteSpace: 'pre-wrap' }}>{currentCommand}</span>
            <span className="terminal-cursor" />
          </div>
        )}

        {(!isBooting && !isLocked && terminalState === 'hire_role') && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold', marginRight: '8px', flexShrink: 0 }}>
              [System] Enter Role:
            </span>
            <span style={{ color: '#fff', whiteSpace: 'pre-wrap' }}>{currentCommand}</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          background-color: var(--accent-blue);
          margin-left: 2px;
          animation: pulse 1s infinite step-end;
          vertical-align: middle;
        }
        :root {
          --sys-green: #3fb950;
        }
      `}</style>
    </div>
  );
};

export default TerminalApp;
