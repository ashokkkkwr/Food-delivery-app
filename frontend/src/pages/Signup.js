import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="signup" onSubmit={handleSubmit}>
                        
                        <div className="signup__field">
                            
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="signup__field">
                           
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        
                        <button disabled={isLoading}>Signup</button>
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

export default Signup;
