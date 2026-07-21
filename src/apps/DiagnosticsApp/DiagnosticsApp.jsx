import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Network, Cloud, Code, LineChart, Shield, Brain } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DiagnosticsApp = () => {
  const { t } = useLanguage();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
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
              angleLines: { color: '#30363d' },
              grid: { color: '#30363d' },
              pointLabels: {
                font: { size: 11, weight: 'bold' },
                color: '#c9d1d9'
              },
              ticks: { display: false, stepSize: 20 },
              suggestedMin: 0,
              suggestedMax: 100
            }
          },
          plugins: {
            legend: { display: false },
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

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', color: '#c9d1d9', fontFamily: "'JetBrains Mono', monospace", backgroundColor: '#0d1117', height: '100%', overflowY: 'auto' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {/* Telemetry Dashboard Panel */}
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', padding: '20px' }}>
          <h4 style={{ color: '#fff', marginBottom: '20px' }}>{t('diagnostics.skillsDist')}</h4>
          <div style={{ position: 'relative', height: '250px', width: '100%' }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        {/* System Telemetry Panel */}
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', padding: '20px' }}>
          <h4 style={{ color: '#fff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--sys-green)' }}>●</span> {t('diagnostics.systemTelemetry')}
          </h4>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: '4px' }}><span style={{ color: '#8b949e' }}>HOST:</span> <span style={{ color: '#fff' }}>nicolas-node-01</span></div>
            <div style={{ marginBottom: '4px' }}><span style={{ color: '#8b949e' }}>KERNEL:</span> <span style={{ color: '#fff' }}>v2026.06-devops</span></div>
            <div><span style={{ color: '#8b949e' }}>STATUS:</span> <span style={{ backgroundColor: '#238636', color: '#fff', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>ONLINE</span></div>
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#8b949e', marginBottom: '4px' }}>
              <span>{t('diagnostics.cpu')}</span><span>85%</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#0d1117', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', backgroundColor: 'var(--sys-green)' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#8b949e', marginBottom: '4px' }}>
              <span>{t('diagnostics.mem')}</span><span>78%</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#0d1117', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '78%', height: '100%', backgroundColor: 'var(--accent-blue)' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#8b949e', marginBottom: '4px' }}>
              <span>{t('diagnostics.net')}</span><span>92%</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#0d1117', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '92%', height: '100%', backgroundColor: '#ffc646' }}></div>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #30363d', paddingTop: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#8b949e' }}>{t('diagnostics.services')}</div>
              <div style={{ fontSize: '18px', color: '#fff', fontWeight: 'bold' }}>6 / 6</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#8b949e' }}>{t('diagnostics.loadAvg')}</div>
              <div style={{ fontSize: '18px', color: 'var(--sys-green)', fontWeight: 'bold' }}>0.45</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#8b949e' }}>{t('diagnostics.failures')}</div>
              <div style={{ fontSize: '18px', color: 'var(--accent-red)', fontWeight: 'bold' }}>0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Systemd Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        <ServiceCard 
          name="devops.service"
          icon={Network}
          status="running" 
          log={t('diagnostics.serviceLogs.devops')}
          skills={['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Git', 'ZFS', 'Helm', 'Istio', 'Docker Compose']}
          color="#58a6ff"
        />
        <ServiceCard 
          name="cloud-platforms.service" 
          icon={Cloud}
          status="running" 
          log={t('diagnostics.serviceLogs.cloud')}
          skills={['AWS', 'Azure', 'Proxmox', 'VMware/Hyper-V', 'Hybrid/on-prem', 'AIDX Flight Feeds', 'SAM System']}
          color="#2f81f7"
        />
        <ServiceCard 
          name="programming.service" 
          icon={Code}
          status="running" 
          log={t('diagnostics.serviceLogs.prog')}
          skills={['Python', 'PowerShell', 'Bash', 'SQL']}
          color="#3fb950"
        />
        <ServiceCard 
          name="monitoring.service" 
          icon={LineChart}
          status="running" 
          log={t('diagnostics.serviceLogs.mon')}
          skills={['Zabbix', 'Prometheus', 'Grafana', 'VPC Flow Logs']}
          color="#ffc646"
        />
        <ServiceCard 
          name="security.service" 
          icon={Shield}
          status="running" 
          log={t('diagnostics.serviceLogs.sec')}
          skills={['IAM/SSO', 'Keycloak', 'TLS/SSL', 'VPNs', 'VLANs', 'Firewalls', 'Wireshark', 'SIEM', 'Ubiquiti/Unifi']}
          color="#ffc646"
        />
        <ServiceCard 
          name="mlops-ai.service" 
          icon={Brain}
          status="running" 
          log={t('diagnostics.serviceLogs.ml')}
          skills={['MLOps', 'GPU Acceleration', 'Ollama', 'llama.cpp', 'OpenWebUI', 'MLflow']}
          color="#eb4470"
        />

      </div>
    </div>
  );
};

const ServiceCard = ({ name, icon: Icon, status, log, skills, color }) => (
  <div className="systemd-service-card" style={{ 
    backgroundColor: '#161b22', 
    border: '1px solid #30363d', 
    borderRadius: '8px', 
    padding: '16px', 
    display: 'flex', 
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', backgroundColor: 'var(--sys-green)' }} />
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <span style={{ color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon color={color} size={16} />
        {name}
      </span>
      <span style={{ backgroundColor: 'rgba(63, 185, 80, 0.15)', border: '1px solid rgba(63, 185, 80, 0.3)', color: 'var(--sys-green)', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
        {status}
      </span>
    </div>
    
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', flex: 1 }}>
      {skills.map(skill => (
        <span key={skill} style={{ backgroundColor: `${color}33`, border: `1px solid ${color}`, color: '#c9d1d9', padding: '4px 10px', borderRadius: '16px', fontSize: '12px' }}>
          {skill}
        </span>
      ))}
    </div>
    
    <div style={{ color: '#8b949e', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px' }}>
      {log}
    </div>
  </div>
);

export default DiagnosticsApp;
