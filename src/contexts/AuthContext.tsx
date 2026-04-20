import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContext {
    token: string
    login: (token : string) => void,
    logout: () => void
}

const AuthUserContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children } : { children : ReactNode }) => {

    const [token, setToken] = useState('')

    const login = (token : string) => {
        setToken(token)
        localStorage.setItem('token', token);
    }

    const logout = () => {
        setToken('')
        localStorage.removeItem('token');
    }

    console.log("Auth token state:", token);
    
    return (
        <AuthUserContext.Provider value={{ token, login, logout}}>
            {children}
        </AuthUserContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthUserContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};