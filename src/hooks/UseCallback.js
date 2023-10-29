import React, {useCallback, useState} from 'react'
import List from '../components/List';

function UseCallback() {
    const [number, setNumber] = useState('');
    const [dark, setDark] = useState(false);
    const themeStyles = {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    const getItems = useCallback(() => {
        return [number, number+1, number+2];
    }, [number])
  return (
    <div style={themeStyles}>
        <h1>Use Callback</h1>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
        <List getItems={getItems} />
    </div>
  )
}

export default UseCallback