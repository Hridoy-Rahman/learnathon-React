import React from 'react';
import { useState } from 'react';

const UseStateHook = () => {
    let [count,setCount] = useState(0)
    
    
   
    const handledecreaseValue = () =>{
        setCount(count - 1)
    }
    const handleIncreaseValue = () =>{
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Value : {count}</h1>
            <button onClick={handleIncreaseValue}>Increase Value</button>
            <button onClick={handledecreaseValue}>Decrease Value</button>
        </div>
    );
};

export default UseStateHook;