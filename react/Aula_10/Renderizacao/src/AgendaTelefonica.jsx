import { useState } from "react";

function AgendaTelefonica() {
    const [contatos, setContatos] = useState([]);
    
    function adicionarContato(evento) {
        evento.preventDefault();
        
        const nome = evento.target.nome.value;
        const telefone = evento.target.telefone.value;

        if (nome && telefone) {
            setContatos([...contatos, {nome, telefone}]);
            evento.target.reset();
        }
    }

    return (
        <div>
            <h1>Agenda telefônica</h1>
            <form onSubmit={adicionarContato}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" placeholder="Digite o seu nome" required/>
                </div>
                <div>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="text" name="telefone" placeholder="Digite o seu telefone" required/>
                </div>

                <button type="submit">Adicionar contato</button>
            </form>

            <ul>
                {contatos.map((contato, index) => (
                    <li key={index}>
                        <span>{contato.nome}</span> - <span>{contato.telefone}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AgendaTelefonica;