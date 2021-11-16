import React from 'react'
import Form from '../components/Form'

const Login = () => {
    const onAddHandler=(data)=>{
        console.log(data)

    }
    return (
        <div>
            <h1>login page</h1>
            <Form onAddForm={onAddHandler}/>
        </div>
    )
}

export default Login
