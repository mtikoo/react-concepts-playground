import { useReducer, useState } from 'react';

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: crypto.randomUUID(), text: action.text, done: false },
      ];
    case 'TOGGLE':
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    case 'DELETE':
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

const INITIAL_TODOS = [
  { id: '1', text: 'Learn useReducer', done: false },
  { id: '2', text: 'Build a todo app', done: true },
];

export default function ReducerDemo() {
  const [todos, dispatch] = useReducer(todoReducer, INITIAL_TODOS);
  const [text, setText] = useState('');

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch({ type: 'ADD', text: trimmed });
    setText('');
  };

  return (
    <div className="demo-section">
      <h3>useReducer <span className="badge">Todo List</span></h3>
      <p>
        Actions: <code>ADD</code>, <code>TOGGLE</code>, <code>DELETE</code>.
        The reducer is a pure function that returns the next state.
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <input
            style={{ flex: 1 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="New todo..."
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((t) => (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => dispatch({ type: 'TOGGLE', id: t.id })}
              />
              <span className={t.done ? 'done' : ''}>{t.text}</span>
              <button
                style={{
                  marginLeft: 'auto',
                  background: 'var(--danger)',
                  padding: '4px 10px',
                  fontSize: '0.8rem',
                }}
                onClick={() => dispatch({ type: 'DELETE', id: t.id })}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
