import { useContext } from "react";
import { ContextPags } from "../context/CreateContext";
import "../styles/components/hometxt.sass"
import Slide from "./Slide";


const HomeTxt = () => {

    const {} = useContext(ContextPags);

    return (
        <>
           <section id="home">

                <Slide/>
                
                <div id="payment">

                    <ul id="payment-list">

                        <li className="">   
                            <div className="payment-sub">
                                <h3>Pagamento rápido e seguro</h3>
                                <span>Sem perdas para o cliente </span>
                            </div>
                        </li>

                        <li className="">
                            <a href=""><img src="" alt="cartão" /></a>
                            <div className="payment-sub">
                                <h3>Até 10 parcelas sem juros</h3>
                                <button>Ver mais</button>
                            </div>
                        </li>

                        <li className="">
                            <a href=""><img src="" alt="cartão" /></a>
                            <div className="payment-sub">
                                <h3>Parcelamento sem cartãos</h3>
                                <a href="">Conheça nosso cartão</a>
                            </div>
                        </li >

                        <li className="">
                            <a href=""><img src="" alt="cartão" /></a>
                            <div className="payment-sub">
                                <h3>Via Pix</h3>
                                <button>Ver mais</button>
                            </div>
                        </li>
                    </ul>
                </div>
           </section>
        
        </>
    )
}

export default HomeTxt;