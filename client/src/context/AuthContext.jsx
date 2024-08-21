import { createContext, useContext, useState } from "react";
import { regsiterRequest } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const { user, setUser } = useState(null);

    const signup = async (user) => {
        const res = await regsiterRequest(values)
        console.log(res.data);
        setUser(res.data);
    };

    return (
        <AuthContext.Provider value={{
            signup,
            user,            
        }}>
            {children}
        </AuthContext.Provider>
    )
}