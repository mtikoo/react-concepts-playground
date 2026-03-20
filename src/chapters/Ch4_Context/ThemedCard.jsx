import { useTheme } from './ThemeContext';

function DeeplyNestedToggle() {
  const { toggle, theme } = useTheme();
  return (
    <button onClick={toggle}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}

export default function ThemedCard() {
  const { theme } = useTheme();

  return (
    <div className={`themed-card ${theme}`}>
      <h4 style={{ marginBottom: 8 }}>I am a themed card ({theme})</h4>
      <p style={{ fontSize: '0.9rem', marginBottom: 12 }}>
        This card reads the theme from context -- no props were drilled
        through intermediate components.
      </p>
      <DeeplyNestedToggle />
    </div>
  );
}
