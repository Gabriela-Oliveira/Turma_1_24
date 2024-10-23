import { Link, Outlet } from "react-router-dom";

function Home() {

  return (
    <div>
        <h1>Página Inicial</h1>

        <nav>
            <ul>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/usuario">Usuário</Link>
                </li>
            </ul>
        </nav>
        
        <Outlet/>
      </div>
  )
}

export default Home;
