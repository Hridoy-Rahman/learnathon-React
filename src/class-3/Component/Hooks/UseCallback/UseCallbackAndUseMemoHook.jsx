import React, { useCallback, useState } from 'react';
import ShowCount from './ShowCount';
import Button from './Button';
import Heading from './Heading';


const UseCallbackAndUseMemoHook = () => {

    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    const incrementByOne = useCallback(() =>{
        setCount1((x) => x+1 )
    },[])
    
    const incrementByFive = useCallback(() =>{
        setCount2((x) => x+5 )
    },[])

    return (
        <div>
            <Heading></Heading>
            <ShowCount title={'Counter1'} count={count1}></ShowCount>
            <Button handleClick={incrementByOne}>Increment by One</Button>
            
            <ShowCount title={'Counter2'} count={count2}></ShowCount>
            <Button handleClick={incrementByFive}>Increment by Five</Button>
            
        </div>
    );
};

export default UseCallbackAndUseMemoHook;