import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ResumeApp = () => {
  const { t } = useLanguage();
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html><head><title>Nicolas Teixeira - Resume</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; color: #222; padding: 40px 50px; max-width: 850px; margin: 0 auto; line-height: 1.5; font-size: 11pt; }
        h1 { font-size: 22pt; margin-bottom: 2px; }
        .contact-line { font-size: 10pt; color: #555; margin-bottom: 16px; }
        h2 { font-size: 13pt; text-transform: uppercase; border-bottom: 2px solid #333; padding-bottom: 3px; margin: 18px 0 10px; letter-spacing: 0.5px; }
        h3 { font-size: 11pt; margin-bottom: 1px; }
        .job-meta { font-size: 10pt; color: #555; margin-bottom: 6px; }
        ul { margin: 4px 0 12px 18px; }
        li { margin-bottom: 3px; font-size: 10.5pt; }
        .skills-grid { display: flex; flex-wrap: wrap; gap: 4px 16px; font-size: 10.5pt; }
        .edu-item { margin-bottom: 8px; }
        @media print { body { padding: 20px 30px; } }
      </style></head><body>
      ${document.getElementById('resume-content').innerHTML}
      </body></html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div style={{ height: '100%', overflow: 'auto', background: '#fff', color: '#1a1a1a', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      {/* Print/Download Bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: '#f0f0f0', padding: '8px 24px', display: 'flex', justifyContent: 'flex-end', gap: '10px', borderBottom: '1px solid #ddd' }}>
        <button
          onClick={handlePrint}
          style={{ padding: '6px 18px', background: '#2f81f7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
        >
          {t('resume.print')}
        </button>
      </div>

      {/* Resume Content */}
      <div id="resume-content" style={{ padding: '36px 48px', maxWidth: '850px', margin: '0 auto', lineHeight: 1.6 }}>
        {/* Header */}
        <h1 style={{ fontSize: '24pt', fontWeight: 700, marginBottom: '2px', color: '#111' }}>
          Nicolas Teixeira
        </h1>
        <p className="contact-line" style={{ fontSize: '10.5pt', color: '#555', marginBottom: '16px' }}>
          Columbus, OH &nbsp;|&nbsp; nicolas.teixeira@outlook.com &nbsp;|&nbsp; linkedin.com/in/nicolasdealmeidateixeira &nbsp;|&nbsp; github.com/nicolasnkGH &nbsp;|&nbsp; nick-t.net
        </p>

        {/* Professional Summary */}
        <h2 style={{ fontSize: '13pt', textTransform: 'uppercase', borderBottom: '2px solid #333', paddingBottom: '3px', margin: '18px 0 10px', letterSpacing: '0.5px' }}>
          {t('resume.profSummaryTitle')}
        </h2>
        <p style={{ fontSize: '10.5pt', marginBottom: '12px' }}>
          {t('resume.profSummary')}
        </p>

        {/* Technical Skills */}
        <h2 style={{ fontSize: '13pt', textTransform: 'uppercase', borderBottom: '2px solid #333', paddingBottom: '3px', margin: '18px 0 10px', letterSpacing: '0.5px' }}>
          {t('resume.skillsTitle')}
        </h2>
        <div style={{ fontSize: '10.5pt', marginBottom: '12px' }}>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.cloud')}:</strong> {t('resume.skills.cloudDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.containers')}:</strong> {t('resume.skills.containersDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.cicd')}:</strong> {t('resume.skills.cicdDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.os')}:</strong> {t('resume.skills.osDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.net')}:</strong> {t('resume.skills.netDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.mon')}:</strong> {t('resume.skills.monDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.db')}:</strong> {t('resume.skills.dbDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.prog')}:</strong> {t('resume.skills.progDesc')}</p>
          <p style={{ marginBottom: '4px' }}><strong>{t('resume.skills.tools')}:</strong> {t('resume.skills.toolsDesc')}</p>
        </div>

        {/* Professional Experience */}
        <h2 style={{ fontSize: '13pt', textTransform: 'uppercase', borderBottom: '2px solid #333', paddingBottom: '3px', margin: '18px 0 10px', letterSpacing: '0.5px' }}>
          {t('resume.expTitle')}
        </h2>

        {t('resume.jobs').map((job, idx) => (
          <React.Fragment key={idx}>
            <h3 style={{ fontSize: '11.5pt', fontWeight: 700, marginBottom: '1px' }}>{job.title}</h3>
            <p style={{ fontSize: '10pt', color: '#555', marginBottom: '6px' }}>
              <strong>{job.company}</strong> — {job.location} &nbsp;|&nbsp; {job.date}
            </p>
            <ul style={{ margin: '4px 0 14px 18px', fontSize: '10.5pt' }}>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}

        {/* Education */}
        <h2 style={{ fontSize: '13pt', textTransform: 'uppercase', borderBottom: '2px solid #333', paddingBottom: '3px', margin: '18px 0 10px', letterSpacing: '0.5px' }}>
          {t('resume.eduTitle')}
        </h2>
        {t('resume.edu').map((edu, idx) => (
          <div key={idx} style={{ fontSize: '10.5pt', marginBottom: '8px' }}>
            <p style={{ marginBottom: '2px' }}><strong>{edu.degree}</strong> — {edu.school}, {edu.date}</p>
          </div>
        ))}

        {/* Projects */}
        <h2 style={{ fontSize: '13pt', textTransform: 'uppercase', borderBottom: '2px solid #333', paddingBottom: '3px', margin: '18px 0 10px', letterSpacing: '0.5px' }}>
          {t('resume.projTitle')}
        </h2>
        <ul style={{ margin: '4px 0 12px 18px', fontSize: '10.5pt' }}>
          {t('resume.proj').map((proj, idx) => (
            <li key={idx}><strong>{proj.name}</strong> — {proj.desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeApp;
