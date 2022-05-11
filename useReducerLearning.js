import React, { useReducer, useState } from 'react';


const initialState = { num: 0 };

const reducer = (state, action) => {
  switch (action[0]) {
    case 'ADD':
      return { num: state.num + action[1].delta };

    default:
      return state;
  }
};

export default function App() {
  const [num, setNum] = useState('');
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <h2>{num}</h2>

      <h1>{state.num}</h1>
      <input type='number' onChange={(e) => setNum(+e.target.value)} />
      <button
        onClick={() => {
          // dispatch({ type: 'ADD', payload: { delta: num} });
          dispatch(['ADD', { delta: num }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
