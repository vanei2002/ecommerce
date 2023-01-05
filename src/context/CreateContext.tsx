import { createContext} from "react";
import { User } from "../types/type";


export type UserContextType ={
    user: User | null ;

    resetUser: (email: string) => void;
    logoutUser: () => void;
    newUser: (name: string, secodName: string, email: string, password: string) => Promise<void>;
    signin: (email: string , password: string) => Promise<boolean>;
    singInFacebook: (value: object) => void;
    singInGoogle: (value: object) => void;
};

export const ContextPags = createContext<UserContextType>(null!);