import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const EMPLOYEES = [
  { name: 'Alice', dept: 'Engineering', salary: 120000 },
  { name: 'Bob', dept: 'Engineering', salary: 95000 },
  { name: 'Charlie', dept: 'Design', salary: 85000 },
  { name: 'Diana', dept: 'Engineering', salary: 110000 },
  { name: 'Eve', dept: 'Design', salary: 92000 },
  { name: 'Frank', dept: 'Marketing', salary: 78000 },
  { name: 'Grace', dept: 'Marketing', salary: 82000 },
];

const DEPTS = ['All', ...new Set(EMPLOYEES.map((e) => e.dept))];

export default function ChainingDemo() {
  const [dept, setDept] = useState('All');
  const [sortDir, setSortDir] = useState('desc');

  const result = EMPLOYEES.filter((e) => dept === 'All' || e.dept === dept)
    .map((e) => ({ ...e, display: `${e.name} ($${(e.salary / 1000).toFixed(0)}k)` }))
    .sort((a, b) => (sortDir === 'asc' ? a.salary - b.salary : b.salary - a.salary));

  const avgSalary =
    result.length > 0
      ? result.reduce((sum, e) => sum + e.salary, 0) / result.length
      : 0;

  return (
    <div className="demo-section">
      <h3>Chaining Methods Together</h3>
      <p>
        Because <code>filter</code>, <code>map</code>, and <code>sort</code>{' '}
        all return arrays, you can chain them into a readable pipeline.
        Add <code>reduce</code> at the end to aggregate.
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <span style={{ fontSize: '0.85rem' }}>Department:</span>
          {DEPTS.map((d) => (
            <button
              key={d}
              style={{
                background: dept === d ? 'var(--accent)' : 'var(--text-muted)',
                padding: '4px 12px',
                fontSize: '0.8rem',
              }}
              onClick={() => setDept(d)}
            >
              {d}
            </button>
          ))}
          <button
            style={{ marginLeft: 'auto', padding: '4px 12px', fontSize: '0.8rem' }}
            onClick={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
          >
            Sort: {sortDir === 'asc' ? '↑ Low→High' : '↓ High→Low'}
          </button>
        </div>
        {result.map((e) => (
          <div
            key={e.name}
            className="user-card"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span>
              <strong>{e.name}</strong>{' '}
              <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                {e.dept}
              </span>
            </span>
            <span style={{ fontWeight: 600 }}>
              ${e.salary.toLocaleString()}
            </span>
          </div>
        ))}
        <div
          style={{
            padding: '10px 14px',
            background: 'var(--code-bg)',
            borderRadius: 8,
            fontSize: '0.85rem',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          Average: ${Math.round(avgSalary).toLocaleString()} ({result.length}{' '}
          {result.length === 1 ? 'person' : 'people'})
        </div>
      </div>
      <CodeBlock>{`const result = employees
  .filter(e => dept === 'All' || e.dept === dept)
  .map(e => ({ ...e, display: \`\${e.name} ($\${e.salary / 1000}k)\` }))
  .sort((a, b) => b.salary - a.salary);

const avg = result.reduce((sum, e) => sum + e.salary, 0)
  / result.length;`}</CodeBlock>
    </div>
  );
}
