import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'


const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: username,
            email: email,
            password: password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
            .then((response) => {
                const result=response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    alert('successfully created user')
                    props.history.push('/login')
                }
            }).catch((err) => {
                alert(err.message)
            })
    }

    const handleNameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div className="register">
            <h1>Register with us</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter username"
                    value={username}
                    onChange={handleNameChange}
                    name="username"
                /><br />

                <input
                    type="text"
                    placeholder="enter email"
                    value={email}
                    onChange={handleEmailChange}
                    name="email"
                /><br />

                <input
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={handlePassChange}
                    name="password"
                /><br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Register