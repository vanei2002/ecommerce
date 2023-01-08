import InputText from "../components/InputText";
import EnterWithGoogle from "../components/EnterWithGoogle";
import { Link, useNavigate} from "react-router-dom";
import { useContext} from "react";
import {ButtonMain} from "../components/ButtonMain";
import { ContextPags } from "../context/CreateContext";
import {Checkbox, Modal} from "@mui/material"
import {useState} from "react"


import "../styles/pages/login.sass"
import ModalPage from "../components/Modal";


const Login= () => {
    const navegation = useNavigate();
    const [ useEmail , setUseEmail ] = useState();
    const [ usePassword , setUsePassword ] = useState();
    
    const {signin} = useContext(ContextPags)

    async function authUser () {
        if(useEmail && usePassword){
            const islogged = await signin(useEmail , usePassword);

            if(islogged){
                navegation('/')
            }   

        }else{
            alert('Campos não preenchidos')
        }
    };
   
    return ( 
        <section className="container">    
            <ModalPage>
                <h2>Usuario ou senha estão incorretos</h2>
            </ModalPage>    
           
            <h1 className="logoType">Ecommerce</h1>

            <div className="welcome">
                <h1>Bem-vindo</h1>
                <span> Digite suas credenciais para continuar</span>
            </div>

            <EnterWithGoogle/>
    
            <div className="input-container">
                <span>Ou acesse com seu usuario e senha </span>
                <InputText children="E-mail / Usuario" type="email" val="exemplo@gmail.com" id="email" onChange={setUseEmail}/> 
                <InputText children="Senha" type="password" val="******" id="password" onChange={setUsePassword}/>             
            </div>

            <div className="checkInput">
                <span> <Checkbox size="small"sx={{color:"#914199"}}/> Lembre de mim</span>
                <Link to={`/reset`} className="reset">Esqueceu a senha?</Link>
            </div>

            <ButtonMain authUser={authUser}> Entrar</ButtonMain>
                
            <hr />
            <Link to={`/cadastro`} className="registration">Não tem uma conta?</Link>

        </section>
     );
}
 
export default Login;