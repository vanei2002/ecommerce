import { createContext} from "react";
import { User } from "../types/type";


export type UserContextType ={
    user: User | null ;

    open: boolean ;
    setOpen: (value: boolean) => void;
    textModal: string;
    modalFunction: (text: string, bollean: boolean) => void;
    setTextModal: (value: string) => void;
    resetUser: (email: string) => void;
    logoutUser: () => void;
    newUser: (name: string, secodName: string, email: string, password: string) => Promise<User | any>;
    signin: (email: string , password: string) => Promise<boolean>;
    singInFacebook: (value: object) => void;
    singInGoogle: (value: object) => void;
};

export const ContextPags = createContext<UserContextType>(null!);