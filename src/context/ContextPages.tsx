import { auth } from "../services/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";
import { ContextPags } from "./CreateContext";
import {useState , useEffect} from "react"
import { User } from "../types/type";
import {AuthUser}  from "../hook/AuthUser";
import React from "react";


export const ContextPagsProvider = ({children}: {children: JSX.Element})=> {

    const [user , setUser] = useState<User | null>(null);
    const userApi = AuthUser();
    const [open, setOpen] = React.useState(false);

    
    const setLocalStronge = (token: string) => localStorage.setItem('user_token', token);

    const removeLocalStronge = () => localStorage.removeItem('user_token');
    
    const modalFunction = (text: string, bollean: boolean) => {
        setOpen(bollean);
        setTextModal(text);
    }

    const creteToken = () => {
        const token = Math.random().toString(36).substr(2);
        return token;
    }

    const singinEmail = async (result: any ) => {

        const data = await userApi.singinEmail(result);

        if(data) {setInterval( () => { 
            setUser(data)
            setLocalStronge(data.token)
            window.location.href='/'
        },1000)}else{
            return alert('Usuario não cadastrado');
        }

        
    }

    const singInFacebook = () =>{
        const provider = new FacebookAuthProvider
        signInWithPopup(auth, provider).then(result =>{
            singinEmail(result.user.email); 
        })
        .catch(err => console.log(err))
    };
    
    const singInGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(result => { 
            singinEmail(result.user.email);
        }).catch(err => console.log(err));
    };

    useEffect(() =>{

        const validadeToken = async () =>{
            const token = localStorage.getItem('user_token');
            if(token){      
                const data = await userApi.validateToken(token);
                
                if(data){setUser(data)}
                else if(user == null || user == undefined){
                    localStorage.removeItem('user_token');              
                }
            }
        }
        validadeToken();
        setOpen(false);
    },[]);

    const [textModal, setTextModal] = useState<string>('');

    async function signin(email: string , password: string){
        
        const data = await userApi.signin(email, password);

        if(data.email == email && data.password == password){
            setUser(data);
            setLocalStronge(data.token)
            return true;

        }else{
            modalFunction('Usuario não cadastrado', true);
           return false
        }
    }

    async function newUser (name: string, secodName: string, email: string, password: string){

        const token = creteToken();
        const create = await userApi.newUser(name, secodName, email, password , token);

        if(create == true){
            modalFunction('Usuario cadastrado com sucesso', true);

        }else{
            modalFunction('Usuario já cadastrado', true)
        }
    };

    async function logoutUser(){
        // await userApi.logoutUser()
        setUser(null);
        removeLocalStronge();
        return true
    };

    async function  resetUser (email: string){
       const reset =  await userApi.resetUser(email);

       if(reset){
            modalFunction('Email enviado com sucesso', true)
        }else{
            modalFunction('Email não encontrado', true)
       }

   };

    return (

        <ContextPags.Provider value={{ 
            singInFacebook, 
            singInGoogle, 
            signin, 
            newUser, 
            resetUser, 
            logoutUser, 
            user,
            setOpen,
            open,
            setTextModal,
            textModal,
            modalFunction,
            }}>
            {children}
        </ContextPags.Provider>
    );

}