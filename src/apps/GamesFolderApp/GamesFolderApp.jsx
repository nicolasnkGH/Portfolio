import React, { useState } from 'react';
import { useWindowManager } from '../../components/WindowManager/WindowManagerContext';
import GameViewerApp from '../GameViewerApp/GameViewerApp';
import { Gamepad2, FolderOpen, MousePointerClick } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const GAMES = [
  {
    id: 'game-bloxd',
    title: 'Bloxd io',
    url: 'https://www.onlinegames.io/bloxd-io/',
    icon: Gamepad2,
    color: '#3fb950'
  },
  {
    id: 'game-paperio',
    title: 'Paper io 2',
    url: 'https://www.onlinegames.io/paper-io-2/',
    icon: Gamepad2,
    color: '#58a6ff'
  },
  {
    id: 'game-minecraft',
    title: 'Minecraft Classic',
    url: 'https://www.onlinegames.io/minecraft-classic/',
    icon: Gamepad2,
    color: '#d29922'
  },
  {
    id: 'game-drifthunters',
    title: 'Drift Hunters 2',
    url: 'https://www.onlinegames.io/drift-hunters-2/',
    icon: Gamepad2,
    color: '#ff7b72'
  }
];

const GamesFolderApp = () => {
  const { openWindow } = useWindowManager();
  const { t } = useLanguage();
  const [hoveredGame, setHoveredGame] = useState(null);

  const handleGameClick = (game) => {
    openWindow({
      id: game.id,
      title: game.title,
      icon: game.icon,
      component: GameViewerApp,
      url: game.url, // custom prop passed to GameViewerApp via WindowManager
      width: 1000,
      height: 650,
      defaultMaximized: true
    });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#0d1117',
      color: '#c9d1d9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Folder Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px 20px',
        borderBottom: '1px solid #30363d',
        backgroundColor: '#161b22',
        gap: '12px'
      }}>
        <FolderOpen size={24} color="#58a6ff" />
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>
          {t('apps.games') || 'Games'}
        </h2>
      </div>

      {/* Info Banner */}
      <div style={{
        backgroundColor: 'rgba(88, 166, 255, 0.1)',
        borderBottom: '1px solid rgba(88, 166, 255, 0.2)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '0.9rem',
        color: '#58a6ff'
      }}>
        <MousePointerClick size={16} />
        <span>Double-click or tap a game to play it in a new window. Powered by onlinegames.io.</span>
      </div>

      {/* Grid of Games */}
      <div style={{
        flex: 1,
        padding: '24px',
        overflowY: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '24px',
        alignContent: 'flex-start'
      }}>
        {GAMES.map(game => (
          <div
            key={game.id}
            onClick={() => handleGameClick(game)}
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '16px',
              borderRadius: '12px',
              cursor: 'pointer',
              backgroundColor: hoveredGame === game.id ? '#21262d' : 'transparent',
              border: `1px solid ${hoveredGame === game.id ? '#30363d' : 'transparent'}`,
              transition: 'all 0.2s ease',
              transform: hoveredGame === game.id ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: hoveredGame === game.id ? '0 4px 12px rgba(0,0,0,0.2)' : 'none'
            }}
          >
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: `${game.color}20`,
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `1px solid ${game.color}40`
            }}>
              <game.icon size={32} color={game.color} />
            </div>
            <span style={{
              color: hoveredGame === game.id ? '#fff' : '#c9d1d9',
              fontSize: '0.9rem',
              fontWeight: hoveredGame === game.id ? '500' : 'normal',
              textAlign: 'center',
              lineHeight: 1.2
            }}>
              {game.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesFolderApp;
