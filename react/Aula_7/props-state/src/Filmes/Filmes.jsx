import React from "react";
import FilmesFilho from "./FilmesFilho";

class Filmes extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            titulo: 'Batman',
            assistido: false
        }
    }

    filmeAssistido = () => {
        this.setState({
            assistido: !!this.state.assistido ? false : true
        })
    }

    render() {
        return(
            <div>
                <p>Filme: <strong>{this.state.titulo}</strong></p>
                <p>Já assistiu este filme?</p>
                <input 
                    type="checkbox" 
                    name="filme"
                    checked={this.state.assistido}
                    onChange={this.filmeAssistido}
                /> Sim

                <FilmesFilho titulo={this.state.titulo} assistido={this.state.assistido}/>
            </div>
        )
    }
}

export default Filmes;