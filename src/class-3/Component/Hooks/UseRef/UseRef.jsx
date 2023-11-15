import React, { useEffect, useRef } from 'react';
import Input from './ForwardedRef';

const UseRef = () => {

    const ref = useRef(null)

    useEffect(() =>{
        ref.current.focus()
    },[] )

    return (
        <div>
            {/* <p>
                <input ref={ref} type="text" placeholder='enter text' />
            </p> */}

            <Input ref={ref} type='text' placeholder='enter text'></Input>
        </div>
    );
};

export default UseRef;