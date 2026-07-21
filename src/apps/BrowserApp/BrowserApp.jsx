import React, { useState } from 'react';
import { User, GraduationCap, Code, Layers, FileText, CheckCircle, ExternalLink, Activity, Network, Box, Monitor, Server } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
import ResumeApp from '../ResumeApp/ResumeApp';

const BrowserApp = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('projects');
  const [aboutMode, setAboutMode] = useState('professional');

  const tabs = [
    { id: 'about', label: t('browser.tabs.about'), icon: <User size={16} /> },
    { id: 'education', label: t('browser.tabs.education'), icon: <GraduationCap size={16} /> },
    { id: 'skills', label: t('browser.tabs.skills'), icon: <Code size={16} /> },
    { id: 'projects', label: t('browser.tabs.projects'), icon: <Layers size={16} /> },
    { id: 'resume', label: t('browser.tabs.resume'), icon: <FileText size={16} /> }
  ];

  return (
    <div className="browser-layout">
      
      {/* Sidebar - Legacy Colors */}
      <div className="browser-sidebar">
        <div className="browser-sidebar-tabs">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`browser-sidebar-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="browser-main">
        
        {/* Section Title (Legacy Style) */}
        {activeTab !== 'resume' && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
              {activeTab === 'projects' ? t('browser.projectsTitle') : tabs.find(t => t.id === activeTab)?.label}
            </h2>
            {activeTab === 'projects' && (
              <p style={{ color: '#8b949e', fontSize: '0.95rem', maxWidth: '500px', textAlign: 'center' }}>
                {t('browser.projectsDesc')}
              </p>
            )}
          </div>
        )}

        {/* Tab Content */}
        {activeTab === 'about' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Toggle */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <div style={{ display: 'flex', backgroundColor: '#161b22', padding: '4px', borderRadius: '24px', border: '1px solid #30363d' }}>
                <button 
                  onClick={() => setAboutMode('professional')}
                  style={{ 
                    padding: '8px 24px', 
                    backgroundColor: aboutMode === 'professional' ? '#58a6ff' : 'transparent', 
                    color: aboutMode === 'professional' ? '#fff' : '#8b949e', 
                    border: 'none', 
                    borderRadius: '20px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.2s'
                  }}
                >
                  {t('browser.about.profMode')}
                </button>
                <button 
                  onClick={() => setAboutMode('personal')}
                  style={{ 
                    padding: '8px 24px', 
                    backgroundColor: aboutMode === 'personal' ? '#58a6ff' : 'transparent', 
                    color: aboutMode === 'personal' ? '#fff' : '#8b949e', 
                    border: 'none', 
                    borderRadius: '20px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.2s'
                  }}
                >
                  {t('browser.about.persMode')}
                </button>
              </div>
            </div>

            {aboutMode === 'professional' ? (
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px' }}>
                  <h3 style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '20px' }}>{t('browser.about.profTitle')}</h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#8b949e', marginBottom: '15px' }}>
                    {t('browser.about.profDesc1')}
                  </p>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#8b949e' }}>
                    {t('browser.about.profDesc2')}
                  </p>
                </div>
                <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '24px' }}>
                    <h5 style={{ color: '#58a6ff', fontWeight: 'bold', marginBottom: '8px' }}>{t('browser.about.cloudNative')}</h5>
                    <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>{t('browser.about.cloudNativeDesc')}</p>
                  </div>
                  <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '24px' }}>
                    <h5 style={{ color: '#3fb950', fontWeight: 'bold', marginBottom: '8px' }}>{t('browser.about.aiMl')}</h5>
                    <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>{t('browser.about.aiMlDesc')}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px' }}>
                  <h3 style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '20px' }}>{t('browser.about.persTitle')}</h3>
                  <div style={{ color: '#8b949e', fontSize: '1.05rem', lineHeight: '1.7' }}>
                    <p style={{ marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: t('browser.about.persDesc1') }}></p>
                    <p style={{ marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: t('browser.about.persDesc2') }}></p>
                    <p style={{ marginBottom: '25px' }} dangerouslySetInnerHTML={{ __html: t('browser.about.persDesc3') }}></p>
                  </div>
                  
                  <h5 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '16px' }}>{t('browser.about.hobbiesTitle')}</h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {t('browser.about.hobbies').map((hobby, idx) => {
                      const emojis = ['🔴⚫', '🏋️', '🖥️', '🥩', '🔭'];
                      return (
                      <span key={hobby} style={{ background: '#161b22', border: '1px solid #30363d', padding: '8px 14px', borderRadius: '20px', fontSize: '0.9rem', color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '1.1rem' }}>{emojis[idx]}</span> {hobby}
                      </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'education' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Sleek Modern Education Card 1 */}
              <div style={{ backgroundColor: '#161b22', padding: '30px', borderRadius: '16px', border: '1px solid #30363d', display: 'flex', gap: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#58a6ff' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={44} color="#58a6ff" />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '8px', fontWeight: 'bold' }}>{t('resume.edu')[0].degree}</h3>
                  <p style={{ color: '#8b949e', margin: '0 0 16px 0', fontSize: '1.05rem' }}>{t('resume.edu')[0].school}</p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#58a6ff' }}></span>
                    <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>{t('resume.edu')[0].date}</span>
                  </div>
                </div>
              </div>

              {/* Sleek Modern Education Card 2 */}
              <div style={{ backgroundColor: '#161b22', padding: '30px', borderRadius: '16px', border: '1px solid #30363d', display: 'flex', gap: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#3fb950' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={44} color="#3fb950" />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '8px', fontWeight: 'bold' }}>{t('resume.edu')[1].degree}</h3>
                  <p style={{ color: '#8b949e', margin: '0 0 16px 0', fontSize: '1.05rem' }}>{t('resume.edu')[1].school}</p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3fb950' }}></span>
                    <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>{t('resume.edu')[1].date}</span>
                  </div>
                </div>
              </div>

              {/* Sleek Modern Education Card 3 */}
              <div style={{ backgroundColor: '#161b22', padding: '30px', borderRadius: '16px', border: '1px solid #30363d', display: 'flex', gap: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#ff7b72' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={44} color="#ff7b72" />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '8px', fontWeight: 'bold' }}>{t('resume.edu')[2].degree}</h3>
                  <p style={{ color: '#8b949e', margin: '0 0 16px 0', fontSize: '1.05rem' }}>{t('resume.edu')[2].school}</p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff7b72' }}></span>
                    <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>{t('resume.edu')[2].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {[
                {
                  id: 'devops',
                  title: 'devops.service',
                  desc: t('browser.skills.devopsDesc'),
                  icon: <Box size={20} color="#58a6ff" />,
                  skills: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Git', 'Helm'],
                  color: '#58a6ff'
                },
                {
                  id: 'cloud',
                  title: 'cloud-platforms.service',
                  desc: t('browser.skills.cloudDesc'),
                  icon: <Network size={20} color="#ff7b72" />,
                  skills: ['AWS', 'Azure', 'Proxmox', 'VMware/Hyper-V'],
                  color: '#ff7b72'
                },
                {
                  id: 'programming',
                  title: 'programming.service',
                  desc: t('browser.skills.progDesc'),
                  icon: <Code size={20} color="#3fb950" />,
                  skills: ['Python', 'PowerShell', 'Bash', 'SQL'],
                  color: '#3fb950'
                },
                {
                  id: 'monitoring',
                  title: 'monitoring.service',
                  desc: t('browser.skills.monDesc'),
                  icon: <Activity size={20} color="#f9a826" />,
                  skills: ['Zabbix', 'Prometheus', 'Grafana', 'ELK'],
                  color: '#f9a826'
                }
              ].map(service => (
                <div key={service.id} style={{ backgroundColor: '#161b22', padding: '24px', borderRadius: '12px', border: `1px solid ${service.color}40`, borderLeft: `4px solid ${service.color}`, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
                      {service.icon}
                      {service.title}
                    </h3>
                    <span style={{ backgroundColor: 'rgba(63, 185, 80, 0.1)', color: '#3fb950', border: '1px solid rgba(63, 185, 80, 0.3)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>{t('browser.skills.running')}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px', flex: 1, justifyContent: 'center' }}>
                    {service.skills.map(skill => (
                      <span key={skill} style={{ backgroundColor: 'transparent', border: `1px solid ${service.color}80`, padding: '4px 12px', borderRadius: '16px', fontSize: '0.85rem', color: '#c9d1d9' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div style={{ borderTop: '1px solid #30363d', paddingTop: '16px' }}>
                    <p style={{ color: '#8b949e', margin: 0, fontSize: '0.85rem', fontFamily: 'monospace' }}>
                      ● {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              
              {/* Web OS Portfolio */}
              <div style={{ backgroundColor: '#161b22', borderRadius: '20px', border: '1px solid #30363d', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }} 
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(88,166,255,0.5)'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = '#30363d'}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '2rem' }}>💻</div>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>Web OS Portfolio</h3>
                <p style={{ color: '#8b949e', margin: '0 0 24px 0', fontSize: '1rem', lineHeight: '1.5', flex: 1 }}>
                  An interactive, desktop-environment style portfolio built with React. Features draggable windows, a functional terminal, and Easter eggs.
                </p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#58a6ff' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>React</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e34c26' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>CSS3</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f1e05a' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>JavaScript</span></div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="https://github.com/nicolasnkGH/Portfolio" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'transparent', color: '#c9d1d9', borderRadius: '8px', textDecoration: 'none', border: '1px solid #30363d', fontSize: '0.9rem', width: '100%', justifyContent: 'center', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <GithubIcon /> {t('browser.projects.viewRepo')}
                  </a>
                </div>
              </div>

              {/* StarGazer */}
              <div style={{ backgroundColor: '#161b22', borderRadius: '20px', border: '1px solid #30363d', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }} 
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,198,70,0.5)'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = '#30363d'}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '2rem' }}>☄️</div>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>StarGazer</h3>
                <p style={{ color: '#8b949e', margin: '0 0 24px 0', fontSize: '1rem', lineHeight: '1.5', flex: 1 }}>
                  {t('browser.projects.stargazerDesc')}
                </p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffc646' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>Python</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8a2be2' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>FastAPI</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#58a6ff' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>JavaScript</span></div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="https://stargazer.nick-t.net" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'transparent', color: '#c9d1d9', borderRadius: '8px', textDecoration: 'none', border: '1px solid #30363d', fontSize: '0.9rem', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <ExternalLink size={14} /> {t('browser.projects.live')}
                  </a>
                  <a href="https://github.com/nicolasnkGH/stargazer" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'transparent', color: '#c9d1d9', borderRadius: '8px', textDecoration: 'none', border: '1px solid #30363d', fontSize: '0.9rem', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <GithubIcon /> {t('browser.projects.repo')}
                  </a>
                </div>
              </div>

              {/* Private AI Stack */}
              <div style={{ backgroundColor: '#161b22', borderRadius: '20px', border: '1px solid #30363d', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(88,166,255,0.5)'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = '#30363d'}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '2rem' }}>🤖</div>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>{t('browser.projects.aiStackTitle')}</h3>
                <p style={{ color: '#8b949e', margin: '0 0 24px 0', fontSize: '1rem', lineHeight: '1.5', flex: 1 }}>
                  {t('browser.projects.aiStackDesc')}
                </p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#58a6ff' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>Docker</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3fb950' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>AI/LLM</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffc646' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>GPU</span></div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="https://github.com/nicolasnkGH/ai-stack" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'transparent', color: '#c9d1d9', borderRadius: '8px', textDecoration: 'none', border: '1px solid #30363d', fontSize: '0.9rem', width: '100%', justifyContent: 'center', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <GithubIcon /> {t('browser.projects.viewRepo')}
                  </a>
                </div>
              </div>

              {/* Proxmox Automation */}
              <div style={{ backgroundColor: '#161b22', borderRadius: '20px', border: '1px solid #30363d', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(63,185,80,0.5)'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = '#30363d'}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '2rem' }}><Server size={32} color="#3fb950" /></div>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>{t('browser.projects.proxmoxTitle')}</h3>
                <p style={{ color: '#8b949e', margin: '0 0 24px 0', fontSize: '1rem', lineHeight: '1.5', flex: 1 }}>
                  {t('browser.projects.proxmoxDesc')}
                </p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff7b72' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>Proxmox VE</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3fb950' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>Bash</span></div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="https://github.com/nicolasnkGH/proxmox-automation" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'transparent', color: '#c9d1d9', borderRadius: '8px', textDecoration: 'none', border: '1px solid #30363d', fontSize: '0.9rem', width: '100%', justifyContent: 'center', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <GithubIcon /> {t('browser.projects.viewRepo')}
                  </a>
                </div>
              </div>

              {/* Lab Networking */}
              <div style={{ backgroundColor: '#161b22', borderRadius: '20px', border: '1px solid #30363d', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(88,166,255,0.5)'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = '#30363d'}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '2rem' }}><Network size={32} color="#58a6ff" /></div>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>{t('browser.projects.labNetTitle')}</h3>
                <p style={{ color: '#8b949e', margin: '0 0 24px 0', fontSize: '1rem', lineHeight: '1.5', flex: 1 }}>
                  {t('browser.projects.labNetDesc')}
                </p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#58a6ff' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>Linux</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8a2be2' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>VLANs</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffc646' }}></span><span style={{ color: '#8b949e', fontSize: '0.85rem' }}>Security</span></div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="https://github.com/nicolasnkGH/home-networking-setup" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'transparent', color: '#c9d1d9', borderRadius: '8px', textDecoration: 'none', border: '1px solid #30363d', fontSize: '0.9rem', width: '100%', justifyContent: 'center', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <GithubIcon /> {t('browser.projects.viewRepo')}
                  </a>
                </div>
              </div>

            </div>
            {/* View More Projects Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <a 
                href="https://github.com/nicolasnkGH?tab=repositories" 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '12px 24px', 
                  backgroundColor: 'rgba(88, 166, 255, 0.1)', 
                  color: '#58a6ff', 
                  border: '1px solid rgba(88, 166, 255, 0.3)', 
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(88, 166, 255, 0.2)'; e.currentTarget.style.borderColor = '#58a6ff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(88, 166, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(88, 166, 255, 0.3)'; }}
              >
                <GithubIcon />
                {t('browser.projects.viewMore')}
              </a>
            </div>
          </div>
        )}

        {/* Instead of redefining resume content here, we can render the ResumeApp inside the BrowserApp when active */}
        {activeTab === 'resume' && (
          <div style={{ margin: '-40px', height: 'calc(100% + 80px)' }}>
            <ResumeApp />
          </div>
        )}

      </div>
    </div>
  );
};

export default BrowserApp;
