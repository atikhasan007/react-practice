import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

let states = [];
let stateIndex = -1;

function useCustomState(defaultValue) {
  const index = ++stateIndex;

  if (states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue;
    renderWithAtik();
  };

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

function App() {
  const [todo, setTodo] = useCustomState('');
  const [warning, setWarning] = useCustomState('');

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updateWarning = inputValue.includes('.js')
      ? 'You need JavaScript skills to complete the task. Do you have it?'
      : null;

    setTodo(inputValue);
    setWarning(updateWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <h2>{warning || 'Good choice'}</h2>
    </div>
  );
}

function renderWithAtik() {
  stateIndex = -1;

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// React 18+ এর জন্য createRoot() ব্যবহার করা হচ্ছে
const root = createRoot(document.getElementById('root'));
renderWithAtik();
