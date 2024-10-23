import { Link } from 'react-router-dom';

function Usuario() {
  return (
    <>
      <p>Página Usuario</p>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/sobre">Sobre</Link>
        <br />
        <Link to="/">Voltar</Link>
      </nav>
    </>
  )
}

export default Usuario
