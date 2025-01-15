import { createContext, useEffect, useState } from 'react';
import { AppContextProviderProps } from '../types';
import { toast } from 'react-toastify';
import axios from 'axios';
import { user } from '../types';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext<{
    user: user | null;
    setUser: (user: user | null) => void;
    showLogin: boolean;
    setShowLogin: (showLogin: boolean) => void;
    token: string;
    setToken: (token: string) => void;
    credit: boolean;
    setCredit: (credit: boolean) => void;
    backendUrl: string;
    loadCreditsData: () => void;
    logout: () => void;
    generateImage: (prompt: string) => {};
}>({
    user: null,
    setUser: () => { },
    showLogin: false,
    setShowLogin: () => { },
    token: '',
    setToken: () => { },
    credit: false,
    setCredit: () => { },
    backendUrl: '',
    loadCreditsData: () => { },
    logout: () => { },
    generateImage: async (prompt: string) => ({})
});

const AppContextProvider = (props: AppContextProviderProps) => {
    const [user, setUser] = useState<user | null>(null);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
    const [credit, setCredit] = useState<boolean>(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', {
                headers: { token }
            });

            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        }

        catch (error) {
            console.log(error);
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error('An unknown error occurred');
            }
        }
    };

    const navigate = useNavigate();

    const generateImage = async (prompt: string) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } });

            if (data.success) {
                loadCreditsData();
                return data.resultImage;
            }

            else {
                toast.error(data.message);
                loadCreditsData();
                if (data.creditBalance === 0) {
                    navigate('/buy-credit');
                }
            }
        }

        catch (error) {
            console.log(error);
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error('An unknown error occurred');
            }
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    };

    useEffect(() => {
        if (token) {
            loadCreditsData();
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        generateImage
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;