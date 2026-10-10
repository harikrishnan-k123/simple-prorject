import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <section className="card">
        <div className="logo" aria-hidden="true">⚛</div>
        <p className="eyebrow">YOUR FIRST REACT PROJECT</p>
        <h1>Hello, React!</h1>
        <p className="description">
          Welcome to your simple React app. Click the button to try a little
          interactive counter.
        </p>
        <div className="counter" aria-live="polite">{count}</div>
        <button onClick={() => setCount((value) => value + 1)}>
          Click me · {count}
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset counter
        </button>
        <p className="footer">Built with React + Vite</p>
      </section>
    </main>
  );
}
