import {useContext} from "react"
import App from "../../pages/App";
import { ContextPags } from "../CreateContext";

export const RequireAuth = ({children}: { children: JSX.Element }) =>{

    const {user} = useContext(ContextPags);

    if(!user){
        return <App/>
    }

    return children

}