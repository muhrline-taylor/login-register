import React, { useState } from 'react'
import LoginUserForm from "../components/LoginUserForm";
import axios from 'axios';
import { navigate } from '@reach/router';


const LoginUser = props => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
    })

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.get(`http://localhost:3001/api/users/email/${form.email}`)
            .then(res => {
                if(form.email === ""){
                    setError({
                        emailError: "Enter your email",
                        passwordError: "Enter your password",
                    })
                } else {
                    if(res.data.Users !== null){
                        if(form.password === res.data.Users.password){
                            if(localStorage.getItem("loggedInUser") !== null){
                                localStorage.removeItem("loggedInUser")
                            }
                            localStorage.setItem("loggedInUser", res.data.Users.username)
                            navigate("/")
                            window.location.reload()
                        } else {
                            setError({
                                emailError: "",
                                passwordError: "Incorrect password"
                            })
                        }
                    } else {
                        setError({
                            emailError: "Email not registered",
                            passwordError: "",
                        })
                    }
                }
                
                
            })
    }

    return (
        <div>
            <LoginUserForm 
                form={form} 
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                error={error}
            />
        </div>
    )
}

export default LoginUser;
