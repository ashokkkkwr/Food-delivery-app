import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const json = await response.json();
                throw new Error(json.error || 'Login failed');
            }

            const json = await response.json();

            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update the auth context
            dispatch({ type: 'LOGIN', payload: json });

            // Clear loading state and error
            setIsLoading(false);
            setError(null);

            // Redirect user to home page or any other desired page
            // history.push('/home');
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return { login, isLoading, error };
};
