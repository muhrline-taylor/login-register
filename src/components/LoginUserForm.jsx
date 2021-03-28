import React from 'react';
import "../static/css/LoginUserForm.css";

const LoginUserForm = ({ form, onChangeHandler, onSubmitHandler, error }) => {
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input 
                    type="text" 
                    placeholder="Email..."
                    value={form.email}
                    name="email"
                    onChange={onChangeHandler}
                />
                {
                    error.emailError ?
                    <div className="loginUserForm_error">
                        {
                            error.emailError
                        }
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="Password..." 
                    value={form.password}
                    name="password"
                    onChange={onChangeHandler}
                />
                {
                    error.passwordError ?
                    <div className="loginUserForm_error">
                        {
                            error.passwordError
                        }
                    </div>
                    :""
                }
                <button type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default LoginUserForm
