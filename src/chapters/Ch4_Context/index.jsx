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
        <h3>How to study this chapter</h3>
        <p>
          Context is best understood as a broadcast channel for shared values.
          First read the provider code, then trace how deeply nested components
          consume the same value without intermediate props.
        </p>
        <p>
          While this is convenient, context should still be used deliberately.
          For frequently changing values, you should keep provider scope as small
          as possible so unrelated parts of the UI do not re-render.
        </p>
      </div>
      <div className="demo-section">
        <h3>How it works</h3>
        <p>
          A <code>ThemeProvider</code> wraps the tree and exposes a
          <code> theme</code> value plus a <code>toggle</code> function.
          Any descendant can call <code>useTheme()</code> to read or
          change the theme.
        </p>
        <p>
          Read the provider as a contract: it defines what shared values are
          available and where they come from. Consumers remain small because they
          only read the contract and do not need wiring props through layers.
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
          <p>
            Toggle the theme repeatedly and observe that both the parent card and
            nested control stay synchronized from one shared context value.
          </p>
          <div className="demo-area">
            <ThemedCard />
          </div>
        </div>
      </ThemeProvider>
    </ChapterLayout>
  );
}
