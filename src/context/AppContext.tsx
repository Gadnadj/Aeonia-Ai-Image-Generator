import { createContext, useState } from 'react';
import { AppContextProviderProps } from '../types';

export const AppContext = createContext({
    user: false,
    setUser: (user: boolean) => { },
    showLogin: false,
    setShowLogin: (showLogin: boolean) => { }
});

const AppContextProvider = (props: AppContextProviderProps) => {
    const [user, setUser] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [credit, setCredit] = useState<boolean>(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;