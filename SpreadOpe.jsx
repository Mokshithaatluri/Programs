import React from 'react';
import { useState } from 'react';

const SpreadOpe = () => {
    const [Items,setItem] = useState([]);
    const addItems=()=>{
        setItem([
            ...Items,
            {
                id:Items.length,
                value:'mokshitha'
            }
        ])
    }
    return (
        <div>
            <h1>With arrays</h1>
            {
                Items.map((i)=>{
                    return <li key={i.id} >{i.value}</li>
                })
            }
            <button onClick={addItems}>Add</button>
        </div>
    );
};

export default SpreadOpe;