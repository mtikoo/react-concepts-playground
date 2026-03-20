import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const chapters = [
  {
    id: 1,
    title: 'State & Props',
    desc: 'Component data flow, lifting state, and controlled updates',
    icon: '⚡',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'Filter, Map & Reduce',
    desc: 'map, filter, reduce, find, some, every — the JS toolkit for data',
    icon: '🔢',
    color: '#14b8a6',
  },
  {
    id: 3,
    title: 'Hooks Deep Dive',
    desc: 'useState, useEffect, useRef, useMemo and more',
    icon: '🪝',
    color: '#8b5cf6',
  },
  {
    id: 4,
    title: 'Context API',
    desc: 'Global state without prop drilling, providers & consumers',
    icon: '🌐',
    color: '#ec4899',
  },
  {
    id: 5,
    title: 'Async Patterns',
    desc: 'Data fetching, loading states, error boundaries',
    icon: '🔄',
    color: '#f59e0b',
  },
  {
    id: 6,
    title: 'Custom Hooks',
    desc: 'Extract and reuse stateful logic across components',
    icon: '🧩',
    color: '#10b981',
  },
  {
    id: 7,
    title: 'Routing',
    desc: 'Navigation, nested routes, params & programmatic routing',
    icon: '🗺️',
    color: '#0ea5e9',
  },
  {
    id: 8,
    title: 'Forms & Events',
    desc: 'Controlled inputs, validation, and event handling',
    icon: '📝',
    color: '#f43f5e',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="home-hero">
      <div className={`home-content ${visible ? 'home-visible' : ''}`}>
        <span className="home-badge">Interactive Workshop</span>
        <h1 className="home-title">React Fundamentals</h1>
        <div className="home-divider" />
        <h2 className="home-session">Session 2</h2>
        <p className="home-desc">
          A hands-on deep dive into the building blocks of modern React
        </p>
      </div>

      <div className={`home-grid ${visible ? 'home-visible' : ''}`}>
        {chapters.map((ch, i) => (
          <button
            key={ch.id}
            className={`home-card ${hoveredId === ch.id ? 'home-card--active' : ''}`}
            style={{ '--card-accent': ch.color, '--card-i': i }}
            onMouseEnter={() => setHoveredId(ch.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => navigate(`/ch${ch.id}`)}
          >
            <div className="home-card__glow" />
            <span className="home-card__number">
              {String(ch.id).padStart(2, '0')}
            </span>
            <span className="home-card__icon">{ch.icon}</span>
            <h3 className="home-card__title">{ch.title}</h3>
            <p className="home-card__desc">{ch.desc}</p>
            <span className="home-card__arrow">&rarr;</span>
          </button>
        ))}
      </div>

      <button
        className={`home-begin ${visible ? 'home-visible' : ''}`}
        onClick={() => navigate('/ch1')}
      >
        Begin Course
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
