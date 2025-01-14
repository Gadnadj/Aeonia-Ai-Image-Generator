import { createContext, useState } from 'react';
import { AppContextProviderProps } from '../types';

export const AppContext = createContext({
    user: false,
    setUser: (user: boolean) => { }
});

const AppContextProvider = (props: AppContextProviderProps) => {
    const [user, setUser] = useState<boolean>(false);

    const value = {
        user,
        setUser
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;