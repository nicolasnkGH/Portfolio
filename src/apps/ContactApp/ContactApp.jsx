import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="#58a6ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactApp = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('careers@nick-t.net');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-layout">
      
      {/* Left Side: Contact Info */}
      <div className="contact-pane">
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '10px' }}>{t('contact.title')}</h2>
        <p style={{ color: '#8b949e', marginBottom: '20px' }}>{t('contact.desc')}</p>
        
        <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <Mail color="#58a6ff" />
            <div>
              <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>{t('contact.emailLabel')}</div>
              <div style={{ color: '#c9d1d9', fontWeight: 'bold' }}>careers@nick-t.net</div>
            </div>
            <button 
              onClick={handleCopy}
              style={{ marginLeft: 'auto', padding: '6px 12px', backgroundColor: 'transparent', border: '1px solid #30363d', borderRadius: '6px', color: copied ? '#3fb950' : '#8b949e', cursor: 'pointer' }}
            >
              {copied ? t('contact.copied') : t('contact.copy')}
            </button>
          </div>

          <div style={{ borderTop: '1px solid #30363d', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a href="https://www.linkedin.com/in/nicolasdealmeidateixeira/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: '#c9d1d9' }}>
              <LinkedinIcon />
              <span>linkedin.com/in/nicolasdealmeidateixeira</span>
            </a>
            <a href="https://github.com/nicolasnkGH" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: '#c9d1d9' }}>
              <GithubIcon />
              <span>github.com/nicolasnkGH</span>
            </a>
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '20px', fontSize: '0.85rem', color: '#8b949e' }}>
          <span style={{ color: '#3fb950' }}>●</span> {t('contact.hire')}
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-pane right">
        <h3 style={{ color: '#fff', marginBottom: '20px' }}>{t('contact.sendMsg')}</h3>
        <form action="https://formspree.io/f/manlqdpk" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="name" style={{ fontSize: '0.85rem', color: '#8b949e', fontFamily: "'JetBrains Mono', monospace" }}>{t('contact.name')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder={t('contact.namePlaceholder')}
              style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', padding: '10px', borderRadius: '6px', color: '#fff' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="email" style={{ fontSize: '0.85rem', color: '#8b949e', fontFamily: "'JetBrains Mono', monospace" }}>{t('contact.emailAddr')}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder={t('contact.emailPlaceholder')}
              style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', padding: '10px', borderRadius: '6px', color: '#fff' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="message" style={{ fontSize: '0.85rem', color: '#8b949e', fontFamily: "'JetBrains Mono', monospace" }}>{t('contact.message')}</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={5}
              placeholder={t('contact.msgPlaceholder')}
              style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', padding: '10px', borderRadius: '6px', color: '#fff', resize: 'vertical' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ 
              marginTop: '10px', 
              backgroundColor: '#58a6ff', 
              color: '#000', 
              border: 'none', 
              padding: '12px', 
              borderRadius: '6px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Send size={16} />
            {t('contact.sendBtn')}
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactApp;
