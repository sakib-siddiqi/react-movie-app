import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthProvider=createContext();
const AuthContext = ({children}) => {
    return (
        <AuthProvider.Provider value={useFirebase()}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;