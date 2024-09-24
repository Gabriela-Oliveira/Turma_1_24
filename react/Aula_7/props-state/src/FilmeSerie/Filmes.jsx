import React from "react";
import FilmeFilho from './FilmesFilho'

class Filmes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tipo: ""
        };
    }

    tipoTitulo = (event) => {
        console.log(event);
        this.setState({tipo: event.target.value})
    };

    render() {
        return (
            <div>
                <FilmeFilho tipo={this.state.tipo} tipoTituloFunction={this.tipoTitulo}/>
            </div>
        )
    }
}

export default Filmes