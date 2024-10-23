import { Link } from 'react-router-dom';

function Home() {
 return (
    <>
      <p>Página Home</p>
      <nav>
        <Link to="/sobre">Sobre</Link>
        <br />
        <Link to="/usuario">Usuário</Link>
      </nav>
    </>
  )
}

export default Home
