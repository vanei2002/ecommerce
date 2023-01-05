import { useContext} from "react";
import { ContextPags } from "../context/CreateContext";

import "../styles/components/enterwithgoogle.sass"



const EnterWithGoogle = () => {

    const {singInFacebook, singInGoogle} = useContext(ContextPags)

    return ( 
        <div>
            <button onClick={singInGoogle} className="inputGoogle">
                <img src="./public/google.svg" alt="" /> 
                Entre com sua conta Goggle
            </button>
            
            <button onClick={singInFacebook} className="inputFacebook">
                <img src="./public/facebook.svg" alt="" /> 
                Entre com sua do facebook
            </button>
        </div>
    );
}
 
export default EnterWithGoogle;