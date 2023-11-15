import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {

    const [count,setCount] = useState(0)
    const [date,setDate] = useState(new Date())

    const tick = () =>{
        setDate(new Date())
    }

    useEffect(() => {
        console.log("i am in use effect!")

        
        return () => {
        console.log("This is my clean up")
        }
       },[])
 
    useEffect(()=>{
        document.title = `Clicked ${count} times`
    },[count])

    useEffect(()=>{

        setInterval(tick,1000)

    },[])

    const handleClick = () =>{
        setCount (count => count + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <p>{count} times Clicked</p>
            <h1>Timer : {date.toLocaleTimeString()}</h1>
        </div>
    );
};

export default UseEffectHook;