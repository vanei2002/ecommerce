import {useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import { ContextPags } from "../context/CreateContext"

import "../styles/components/navbar.sass"

const Navbar = () =>{
   
    const {user , logoutUser} = useContext(ContextPags)
    const navegation = useNavigate();

    const userOff = async () => {
        await logoutUser();
        navegation('/')
    }

    return (
        <div className="Container-Navbar">
            <nav className="Navbar">
                        
                <img src="" alt="Logo"  className="imgNavbar"/>

                <ul className="listNavbar">
                    <Link to="/">Home</Link>
                    <Link to="">Produtos</Link>
                    <Link to="">Parcerias</Link>
                    <Link to="">Historia</Link>
                </ul>
                        
                {user ? 
                    <button className="button-navbar" onClick={userOff}>{`${user.name}`}</button> 
                        : 
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    )
}

export default Navbar;