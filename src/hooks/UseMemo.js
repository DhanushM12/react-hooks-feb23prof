import React, {useState, useMemo} from 'react'

function UseMemo() {
    const [number, setNumber] = useState('');
    const [dark, setDark] = useState(false);
    const themeStyles = {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    const doubleNumber = useMemo(() => {
        return number *2;
    }, [number])
  return (
    <div>
        <h1>UseMemo</h1>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

export default UseMemo