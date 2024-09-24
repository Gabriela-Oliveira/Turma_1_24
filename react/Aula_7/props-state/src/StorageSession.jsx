import React from "react"

class StorageSession extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     usuario: localStorage.getItem('usuario')
        // }
    }

    adicionar = () => {
        localStorage.setItem('usuario', 'Gabys');
    }

    alterar = () => {
        localStorage.setItem('usuario', 'Matheus');
    }

    mostrar = () => {
        // this.setState(
        //     {
        //         usuario: localStorage.getItem('usuario')
        //     }
        // );

        // console.log(this.state.usuario);

        console.log(localStorage.getItem('usuario'));
    }

    render() {
        return (
            <>
                <button onClick={this.adicionar}>Adicionar</button>
                <button onClick={this.alterar}>Alterar</button>
                <button onClick={this.mostrar}>Mostrar</button>
            </>
        )
    }

}

export default StorageSession
