import React from "react";

class Email extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            titulo: 'Processo Seletivo',
            produtos: []
        }

        console.log(this.state.titulo);
        
    }

    componentDidMount() {
        getProdutos();
    }

    getProdutos = async () => {
        const response = await fetch('ENDPOINT');
        this.setState({produtos: await response.json()});
    }

    render() {
        return (
            <p>Título do email: <strong>{this.state.titulo}</strong></p>
        );
    }
}

export default Email;