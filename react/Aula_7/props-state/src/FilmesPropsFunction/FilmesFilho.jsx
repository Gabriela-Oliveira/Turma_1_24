function FilmeFilho(props) {
    return (
        <div>
            <p>Filme: {props.titulo}</p>
            <p>Já assistiu este filme?</p>
            <input  type="checkbox"
                    id="filme"
                    name="filme"
                    checked={props.assistido}
                    onChange={props.filmeAssistidoFunction}/> Sim

            <p>Você <strong>{props.filmeAssistido}</strong> assistiu o filme <strong>{props.titulo}</strong></p>
        </div>
    )
}

export default FilmeFilho;