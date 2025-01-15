import { ReactNode } from 'react';

export interface AppContextProviderProps {
    children: ReactNode;
}

export interface user {
    name: string;
    email: string;
    password: string;
}
