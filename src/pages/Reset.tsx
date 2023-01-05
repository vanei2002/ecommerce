
import { Link} from "react-router-dom";
import { useContext} from "react";
import { ContextPags } from "../context/CreateContext";
import {useState} from "react"

import "../styles/pages/reset.sass"
import InputText from "../components/InputText";

const Reset = () => {
    const [ useEmail, setUseEmail ] = useState();

    
    const {resetUser} = useContext(ContextPags);
    const resetPass = () => resetUser(useEmail);


    return ( 
        <section className="container-reset">    

            <h1 className="logoType">Ecommerce</h1>

            <section className="welcome">
                <h1>Inscreva-se</h1>
                <span> Digite seu endereço de e-mail abaixo e enviaremos a você uma redefinição de senha</span>
            </section>

            <section className="input-container">
                <InputText children="E-mail / Usuario" type="email" val="exemplo@gmail.com"
                id="reset"onChange={setUseEmail}
                />
            </section>

            <button className='button-reset' onClick={resetPass}type="button"> Enviar Email</button>
            
            <hr />
            <Link to={`/login`} className="login">Já tem uma conta?</Link>
            
        </section>
     );
}
 
export default Reset;