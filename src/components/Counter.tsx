import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, reset, incrementByAmount } from '../store/counterSlice';
import { AppDispatch } from '../store/storeConfig';

const Counter: React.FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Redux Toolkit Counter</h2>
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>
        Count: {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={() => dispatch(increment())}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          Increment
        </button>
        <button 
          onClick={() => dispatch(decrement())}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => dispatch(reset())}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          Reset
        </button>
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          Add 5
        </button>
      </div>
      <p style={{ marginTop: '20px', color: '#666' }}>
        This counter state is persisted using Redux Persist. Try refreshing the page!
      </p>
    </div>
  );
};

export default Counter; 