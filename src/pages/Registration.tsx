import InputText from "../components/InputText";
import EnterWithGoogle from "../components/EnterWithGoogle";
import { Link} from "react-router-dom";
import { useContext} from "react";
import { ContextPags } from "../context/CreateContext";
import {Checkbox} from "@mui/material"
import {useState} from "react"


import "../styles/pages/registration.sass"
import cars from "../../public/imgs/cars2.png"

const Registration = () => {
    const [ useEmail, setUseEmail ] = useState();
    const [ usePassword, setUsePassword ] = useState();
    const [nameRegis, setNameRegis] = useState();
    const [secondName, setSecondName] = useState();

    const { newUser } = useContext(ContextPags);
    const createUser = () =>{ newUser(nameRegis, secondName, useEmail, usePassword )}

    return ( 
        <section className="container-registration">    
            <h1 className="logoType"> <img src={cars}/> Ecommerce</h1>

            <section className="welcome">
                <h1>Inscreva-se</h1>
                <span> Digite suas credenciais para continuar</span>
            </section>

            <EnterWithGoogle/>
    
            <section className="input-container">

                <span>Ou acesse com seu usuario e senha </span>

                <div className="input-name">
                    <InputText children="Nome" type="text" val="" id="name" onChange={setNameRegis}/>
                    <InputText children="Sobrenome" type="latsname" val="" id="latsname" onChange={setSecondName}/>
                </div>
            
                <InputText children="E-mail / Usuario" type="email" val="exemplo@gmail.com" id="email" onChange={setUseEmail}/>
                <InputText children="Senha" type="password" val="******" id="password" onChange={setUsePassword}/>

            </section>

            <div className="checkInput">
                <span> <Checkbox size="small"sx={{color:"#914199"}}/> Corcordo com <a href="">Termos e condições</a> </span>
            </div>

            <button className="button-registr" onClick={createUser}>Inscreva-Se </button>

            <hr />
            <Link to={`/login`} className="login">Já tem uma conta?</Link>
        </section>
     );
}
 
export default Registration;