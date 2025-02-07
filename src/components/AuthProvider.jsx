import React, { createContext, useEffect, useState } from 'react'
import { checkLogin, userLogin, userLogout, userSignup } from '../apis';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null)

  // Feature : For Login   
    const login = ({ email, password }) => {
        const data = userLogin({ email, password });
        if(data) {
            setUser({ email, name: 'Akash Goswami' })
            return true;
        } else {
            setError('Email or password is incorrect.')
            return false;
            
        }
    }

// Feature : For Signup 
    const signup = ({ email, password }) => {
        console.log('Auth Provider==>',email, password)
        const isSignup = userSignup({ email, password })
        if(isSignup) {
            return true;
        } else {
            setUser({ email, name: 'Akash Goswami'})
            setError('Email already exists');
            return false;
        }
    }
// Feature : For Logout 
    const logout = () => {
        userLogout();
        setUser(null);
    }

    useEffect(() => {
        const user = checkLogin();
       
        if(user) {
            
            setUser({ email: user, name: 'Akash Goswami'});
        }
    }, [])

  return (
    <AuthContext.Provider value={{ user, error, login, signup, logout }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider