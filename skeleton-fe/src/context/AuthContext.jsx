import React from 'react'
import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    let [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('https://skeleton-a70q.onrender.com/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': e.target.username.value,
                'password': e.target.password.value
            })
        })
        let data = await response.json()
        console.log(data)
    }

    let contextData = {
        loginUser: loginUser
    }


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}