import HomeTxt from "../components/HomeTxt";
import Navbar from "../components/NavBar";

import "../styles/pages/homeprivate.sass"

const HomePrivete = () => {

    return (  
        <main>
            
            <Navbar/>

            <article className="Container-private">
            
                <HomeTxt/>
             
                <h1>Essa rotas é privada</h1>

            </article>


        </main>
    );
}   

export default HomePrivete;