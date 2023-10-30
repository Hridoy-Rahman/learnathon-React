import React, { useState } from 'react';

const ControlledUncontrolled = () => {
    const [email,setEmail]=useState('')
    const [userInfo,setUserInfo] = useState({
        email : '',
        password : ''
    })

    const handleUpdateEmail = () =>{
        setEmail('abc@gmail.com')
    }

    const handleEmailChange = (event) =>{
        setUserInfo({
            email : event.target.value,
            password : userInfo.password
        })
    }
    const handlePasswordChange = (event) =>{
        setUserInfo({
            email : userInfo.password,
            password :  event.target.value 
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(userInfo)
    }


    return (
        <div>
            <form onSubmit={(e)=>{
                handleSubmit(e)
            }}>
                <p>Email : <input onChange={(e)=> handleEmailChange(e)} type="email" value={email} /></p>
                <p>Password : <input onChange ={(e)=>handlePasswordChange(e)} type="password" /></p>
                <button type='submit'>Login</button>
                <button onClick={handleUpdateEmail}>Update Email</button>
            </form>
        </div>
    );
};

export default ControlledUncontrolled;