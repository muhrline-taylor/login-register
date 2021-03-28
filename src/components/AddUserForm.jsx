import React, { useState } from 'react';
import "../static/css/AddUserForm.css";

const AddUserForm = ({form, onChangeHandler, onSubmitHandler, error}) => {


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {
                    error.fname ?
                    <div className="addUserForm_error">
                        {
                            error.fname.message
                        }
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="First Name"
                    value={form.fname}
                    onChange={onChangeHandler}
                    name="fname"
                /> 
                {
                    error.lname ?
                    <div className="addUserForm_error">
                        {
                            error.lname.message
                        }
                    </div>
                    :""
                }
                <input 
                    type="text"
                    placeholder="Last Name"
                    value={form.lname}
                    onChange={onChangeHandler}
                    name="lname"
                />
                {
                    error.username ?
                    <div className="addUserForm_error">
                        {
                            error.username.kind === "unique" ?
                            <>Username already taken </>
                            :<>{error.username.message}</>
                        }
                        
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="Username"
                    value={form.username}
                    onChange={onChangeHandler}
                    name="username"
                />
                {
                    error.email ?
                    <div className="addUserForm_error">
                        {
                            error.email.kind === "unique" ?
                            <>Email already registered</>
                            :<>{error.email.message}</>
                        }
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="Email"
                    value={form.email}
                    onChange={onChangeHandler}
                    name="email"
                />
                {
                    error.password ?
                    <div className="addUserForm_error">
                        {
                            error.password.message
                        }
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="Password" 
                    value={form.password}
                    onChange={onChangeHandler}
                    name="password"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default AddUserForm
