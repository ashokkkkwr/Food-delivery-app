import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleSubmit}>
                        <div className="login__field">
                            <i className="login__icon fas fa-envelope"></i> {/* Icon for email */}
                            <input
                                type="text"
                                className="login__input"
                                placeholder=" Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i> {/* Icon for password */}
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <button disabled={isLoading} className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
