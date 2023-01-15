
import HomeTxt from "../components/HomeTxt"
import Navbar from "../components/NavBar"
import "../styles/pages/app.sass"

function App() {

  return (
      <main> 

        <Navbar/>

        <article>

          <HomeTxt/>
          
            <h1>
              teste de rota
            </h1>

            <p>Faça login para acessar as demais funções</p>          
        </article>
      </main>

     
  )
}

export default App
