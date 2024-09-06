import ExProps from "./ExProps"
import Filmes from "./Filmes"
import Doces from "./Doces"
import Negrito from "./Negrito"

import React from "react"

class App extends React.Component {
  render() {
    return (
      <>
        <Doces nome="Pirulito"/>
        <Doces nome="Chiclete"/>
        <Doces nome="Bala"/>
        <Doces nome="Chocolate"/>
      </>
    )
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Filmes titulo="Todo mundo em pânico" genero="Comédia"/>
//       </>
//     )
//   }
// }

// function App() {
//   return (
//     <>
//       <Negrito>Este é o conteúdo entre tags.</Negrito>
//     </>
//   )
// }

// function App() {
//   let filmes = [
//     {id:1, titulo: "Cruela", genero:"Comédia"},
//     {id:2, titulo: "Todu mundo em pânico", genero:"Comédia"},
//     {id:3, titulo: "Uma vida sem limites", genero:"Drama"},
//   ]

//   let listaComponentes = []

//   for(const filme of filmes) {
//     listaComponentes.push(<Filmes key={filme.id} titulo={filme.titulo} genero={filme.genero}/>);
//   }

//   return listaComponentes;
// }

// function App() {
//   let nome = "Gabriela";

//   return (
//     <>
//       {/* <ExProps nome={nome} /> */}
//     </>
//   )
// }

export default App
