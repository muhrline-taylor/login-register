import React, { useState } from 'react';
import AddUserForm from '../components/AddUserForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const AddUser = props => {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState({})
    const [dupeError, setDupeError] = useState({})
    const [temp, setTemp] = useState(0)

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/users/new", form)
            .then(res => {
                if(res.data.error) {
                    setError(res.data.error.errors)
                } else {
                    if(localStorage.getItem("loggedInUser") !== null){
                        localStorage.removeItem("loggedInUser")
                    }
                    localStorage.setItem("loggedInUser", res.data.Users.username)
                    navigate("/")
                    window.location.reload()
                }
            })
            
    }

    

    return (
        <div>
            <AddUserForm 
                form={form} 
                onChangeHandler={onChangeHandler} 
                onSubmitHandler={onSubmitHandler} 
                error={error}
            />
        </div>
    )
}

export default AddUser
