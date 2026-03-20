export default function ChapterLayout({ title, description, children }) {
  return (
    <div className="chapter">
      <header className="chapter-header">
        <h1>{title}</h1>
        {description && <p className="chapter-desc">{description}</p>}
      </header>
      <div className="chapter-content">{children}</div>
    </div>
  );
}
