import { auth } from "../services/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";
import { ContextPags } from "./CreateContext";
import {useState , useEffect} from "react"
import { User } from "../types/type";
import {AuthUser}  from "../hook/AuthUser";


export const ContextPagsProvider = ({children}: {children: JSX.Element})=> {

    const singInFacebook = () =>{
        const provider = new FacebookAuthProvider
        signInWithPopup(auth, provider)
        .then(e => {if(e.user.emailVerified == false)console.log("problema de autenticação")})
        .catch(e => console.log(e))
    };
    
    const singInGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(result => { 
            singinEmail(result);
        }).catch(e => console.log(e));
    };

    const singinEmail = async (result: any) => {
        
        const data = await userApi.singinEmail(result.user.email);
        console.log(data)
        console.log(result.user)

        if(!data) setTimeout(() => { 
            window.location.href='/'
        },2000)
    }

    useEffect(() =>{
        const validadeToken = async () =>{
            const storage = localStorage.getItem('user_token');

            if(storage){     
                const data =  await userApi.validateToken(storage);

                if(data){
                    setUser(data);
                }
            }
        }
        validadeToken();
    },[]);

    const [user , setUser] = useState<User | null>(null);
    const userApi = AuthUser();

    async function signin(email: string , password: string){
        
        const data = await userApi.signin(email, password);

        console.log(data)

        if(data.email == email && data.password == password){
            setUser(data);
            setLocalStronge(data.token)
            return true;

        }else{
           alert('Email ou senha incorretos');
           return false
        }
    }

    const setLocalStronge = (token: string) => {
        localStorage.setItem('user_token', token);
    }

    async function logoutUser(){

        // await userApi.logoutUser()

        setUser(null);
        setLocalStronge('');
        return true
    };

    async function newUser (name: string, secodName: string, email: string, password: string){

        const creteToken = () => {
            const token = Math.random().toString(36).substr(2);
            return token;
        }

        const token = creteToken();
        const create = await userApi.newUser(name, secodName, email, password , token);
        
        console.log(create);

        if(typeof create == 'string') alert(create);
        
    };

    async function  resetUser (email: string){
       const reset =  await userApi.resetUser(email);

       alert(reset)
    };

    return (

        <ContextPags.Provider value={{ singInFacebook, singInGoogle, signin, newUser, resetUser, logoutUser, user}}>
            {children}
        </ContextPags.Provider>
    );

}