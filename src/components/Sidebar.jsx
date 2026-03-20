import { NavLink } from 'react-router-dom';

const chapters = [
  { path: '/ch1', label: '1. State & Props' },
  { path: '/ch2', label: '2. Filter, Map & Reduce' },
  { path: '/ch3', label: '3. Core Hooks' },
  { path: '/ch4', label: '4. Context API' },
  { path: '/ch5', label: '5. Async Patterns' },
  { path: '/ch6', label: '6. Custom Hooks' },
  { path: '/ch7', label: '7. Routing' },
  { path: '/ch8', label: '8. Forms & Events' },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2>React Playground</h2>
        <span className="sidebar-subtitle">Learn by doing</span>
      </div>
      <ul className="sidebar-nav">
        {chapters.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `sidebar-link${isActive ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
