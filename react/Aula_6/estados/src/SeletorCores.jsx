import React, { Component } from 'react';
import './SeletorCores.css'; // Importando o arquivo CSS

class SeletorCores extends Component {
  constructor(props) {
    super(props);

    // Inicializando o estado no constructor
    this.state = {
      corSelecionada: null
    };

    // Bind do método
    this.selecionarCor = this.selecionarCor.bind(this);
  }

  // Método para selecionar a cor
  selecionarCor(cor) {
    this.setState({ corSelecionada: cor });
  }

  render() {
    const cores = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#FF33A8'];

    return (
      <div>
        {/* Paleta de cores */}
        <div className="paleta-cores">
          {cores.map((cor, index) => (
            <div
              key={index}
              onClick={() => this.selecionarCor(cor)}
              className={`circulo-cor ${cor === this.state.corSelecionada ? 'circulo-selecionado' : ''}`}
              style={{ backgroundColor: cor }}
              title={`Selecionar cor ${cor}`}
            ></div>
          ))}
        </div>

        {/* Painel de conteúdo */}
        <div
          className="painel-conteudo"
          style={{ backgroundColor: this.state.corSelecionada || '#FFFFFF' }}
        >
          <p>
            {this.state.corSelecionada
              ? `Cor selecionada: ${this.state.corSelecionada}`
              : 'Nenhuma cor selecionada'}
          </p>
        </div>
      </div>
    );
  }
}

export default SeletorCores;
