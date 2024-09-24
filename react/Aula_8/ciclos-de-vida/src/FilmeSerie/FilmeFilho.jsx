import '../FilmeSerie/style.css';

function FilmeFilho(props) {
  return (
    <div>
      <div className="columns card is-12">
        <header className="column is-4 card-header">
          {props.listaFilmes.map((filme, indice) => (
            <div key={indice} className="filme-item">
              <span>{filme.nome}</span>
              <div className="input-container">
                <input
                  className='inputFilmeFilho' 
                  type="text" 
                  name='tipo' 
                  onChange={(evento) => props.atualizarTipoFunc(indice, evento)} 
                  value={filme.tipo || ''}
                />
                <strong><p className='stateFilho'>{filme.tipo}</p></strong>
              </div>
            </div>
          ))}
        </header>
      </div>
    </div>
  )
}

export default FilmeFilho;
