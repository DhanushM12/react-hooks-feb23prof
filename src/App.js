import React from 'react';
import './App.css';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import UseRef from './hooks/UseRef';
import UseMemo from './hooks/UseMemo';
import UseCallback from './hooks/UseCallback';
import UseContext from './hooks/UseContext';

function App() {
  return (
    <div className='App'>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <UseContext />
    </div>
  )
}

export default App