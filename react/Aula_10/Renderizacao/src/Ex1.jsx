function App() {
  const handleEnvio = (evento) => {
    evento.preventDefault();
    const form = evento.target;
    console.log(evento);
    console.log('entrou');
  };


  return (
    <>
      <form name="filmes" onSubmit={handleEnvio}>
        <input type="text" />

        <button type="submit">Clique aqui</button>
      </form>
    </>
  )
}

export default App
