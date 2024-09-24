import React from "react";

class Paginacao extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            paginacao: 1
        }
    }

    anterior = () => {
        this.setState({paginacao: this.state.paginacao - 1})
    }

    proximo = () => {
        this.setState({paginacao: this.state.paginacao + 1})
    }

    render(){
       return(
        <div style={{display: "flex"}}>
            <button onClick={this.anterior} style={{margin: "10px"}} disabled={this.state.paginacao === 1}>Anterior</button>
            <h3>{this.state.paginacao}</h3>
            <button onClick={this.proximo} style={{margin: "10px"}} disabled={this.state.paginacao === 10}>Próximo</button>
        </div>
       ) 
    }
}

export default Paginacao;