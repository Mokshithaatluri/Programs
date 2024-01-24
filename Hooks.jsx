import React from 'react';
import { useState } from 'react';

const Hooks = () => {
    const [count,setCount] = useState(0);
    const [msg,setMsg] = useState('hello');
    const increment=()=>{
        setCount(count+1);
    }
    const update=()=>{
        setMsg("You changed");
    }
    return (
        <div>
            <h1>count={count}</h1>
            <h1>Message;{msg}</h1>
            <button onClick={increment}>+</button>
            <button onClick={update}>name</button>
        </div>
    );
};

export default Hooks;