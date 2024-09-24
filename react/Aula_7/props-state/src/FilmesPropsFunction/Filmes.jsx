import React from "react";
import FilmeFilho from './FilmesFilho'

class Filmes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            titulo: "Batman",
            assistido: false,
            filmeAssistido: "nunca"
        };
    }

    filmeAssistido = () => {
        this.setState({assistido: !!this.state.assistido ? false : true});
        this.setState({filmeAssistido: !!this.state.assistido ? "nunca" : "já"});
    };

    render() {
        return (
            <div>
                <FilmeFilho titulo={this.state.titulo} assistido={this.state.assistido} filmeAssistido={this.state.filmeAssistido} filmeAssistidoFunction={this.filmeAssistido}/>
            </div>
        )
    }
}

export default Filmes