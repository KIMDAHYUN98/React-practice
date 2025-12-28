import './App.css';
import { useState } from 'react'
import Counter from './components/Counter.js';
import Info from './components/Info.js';
import Average from './components/Average.js';

function App() {
  const [visible, setVisible] = useState('');

  return (
    <>
      <Counter />
      <br></br>

      <Average />
      <br></br>

      <br></br>
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          { visible ? '숨기기' : '보이기' }
        </button>
        <hr />
        {visible && <Info />}
      </div>
    </>
  );
}

export default App;
