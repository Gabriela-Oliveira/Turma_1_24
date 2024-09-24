import React from  'react';

class Filme extends React.Component{
constructor(props) {
    super(props);

    this.state = {
      titulo: "Jardim Sercreto",
      listaFilmes:[]
    };
  }

  componentDidMount(){
    this.getFilmes();
  } 

  getFilmes = async () => {
    const response = await fetch('http://localhost:3000/filmes')
    this.setState({listaFilmes: await response.json()});
    console.log(this.state.listaFilmes);
  }

  render() {
    return (
      <div>
        {this.state.listaFilmes.map(home => <div>{home.nome}</div>)}
      </div>
    );
  }

}
export default Filme;