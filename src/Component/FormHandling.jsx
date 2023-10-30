import React, { useState } from 'react';

const FormHandling = () => {
    const [userInfo,setUserInfo] = useState({
        email : '',
        password : ''
    })

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

        if (userInfo.email === 'abc@abc' && userInfo.password === '123456') {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    }


    return (
        <div>
            <form onSubmit={(e)=>{
                handleSubmit(e)
            }}>
                <p>Email : <input onChange={(e)=> handleEmailChange(e)} type="email" /></p>
                <p>Password : <input onChange ={(e)=>handlePasswordChange(e)} type="password" /></p>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default FormHandling;