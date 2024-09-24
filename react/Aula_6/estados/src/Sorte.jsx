import React from "react";

class Sorteio extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            numero: 0
        }
    }

    sorteio = () => {
        this.setState({numero: Math.random()});
    }

    render() {
        return( 
            <div>
                <button onClick={this.sorteio}>Sortear</button>
                <h2>Número {this.state.numero}</h2>
            </div>
        )
        
    }
}

export default Sorteio;