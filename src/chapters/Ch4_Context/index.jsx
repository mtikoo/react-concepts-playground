import ChapterLayout from '../../components/ChapterLayout';
import { ThemeProvider } from './ThemeContext';
import ThemedCard from './ThemedCard';
import CodeBlock from '../../components/CodeBlock';

export default function Ch4() {
  return (
    <ChapterLayout
      title="Chapter 4: Context API"
      description="Share state across deeply nested components without prop drilling using createContext, Provider, and useContext."
    >
      <div className="demo-section">
        <h3>How it works</h3>
        <p>
          A <code>ThemeProvider</code> wraps the tree and exposes a
          <code> theme</code> value plus a <code>toggle</code> function.
          Any descendant can call <code>useTheme()</code> to read or
          change the theme.
        </p>
        <CodeBlock>{`const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggle = () =>
    setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}`}</CodeBlock>
      </div>

      <ThemeProvider>
        <div className="demo-section">
          <h3>Live Demo</h3>
          <p>The button inside the card is deeply nested -- it uses context, not props.</p>
          <div className="demo-area">
            <ThemedCard />
          </div>
        </div>
      </ThemeProvider>
    </ChapterLayout>
  );
}
