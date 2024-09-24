import React from 'react';
import FilmeFilho from './FilmeFilho';

class Filme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listaFilmes: []
    };
  }

  componentDidMount() {
    this.obterFilmes();
  } 

  obterFilmes = async () => {
    const resposta = await fetch('http://localhost:3000/filmes');
    this.setState({ listaFilmes: await resposta.json() });
  }

  atualizarTipo = (indice, evento) => {
    const novaListaFilmes = [...this.state.listaFilmes];
    novaListaFilmes[indice].tipo = evento.target.value;
    this.setState({ listaFilmes: novaListaFilmes });
  };

  render() {
    return (
      <div>
        <FilmeFilho 
          listaFilmes={this.state.listaFilmes} 
          atualizarTipoFunc={this.atualizarTipo} 
        />
      </div>
    );
  }
}

export default Filme;
