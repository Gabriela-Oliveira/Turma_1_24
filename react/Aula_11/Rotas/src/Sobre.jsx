import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <>
      <p>Página Sobre</p>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/usuario">Usuário</Link>
        <br />
        <Link to="/">Voltar</Link>
      </nav>
    </>
  )
}

export default Sobre
