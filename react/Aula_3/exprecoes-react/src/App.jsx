// const m1 = <em>pedras</em>;
// const m2 = <strong>sais</strong>;

// function App() {
//   return (
//     <p>Os minerais são compostos de {m1} e {m2}.</p>
//   )
// }

// export default App

const fusca = { ano: 1966, direcao: true };

function App() {
  return (
    <>
      <h2>Carro fabricado em {fusca.ano}</h2>
      <h3>Possui direção? {fusca.direcao ? "Sim" : "Não"}</h3>
    </>
  )
}

export default App
