import { useState } from "react";

function App() {
  const [nome, setNome] = useState("Gabriela Oliveira");

  const handleChange = (evento) => setNome(evento.target.value);

  const handleEnvio = (evento) => {
    evento.preventDefault();
    const form = evento.target;
    console.log(evento);
    console.log('entrou');
  };

  console.log(nome);
  
  return (
    <>
      <form name="filmes" onSubmit={handleEnvio}>
      <input type="text" value={nome} onChange={handleChange} />
      <p>{nome}</p>

        <button type="submit">Clique aqui</button>
      </form>
    </>
  )
}

export default App
