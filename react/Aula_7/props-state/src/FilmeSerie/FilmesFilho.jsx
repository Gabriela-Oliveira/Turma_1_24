function FilmeFilho(props) {
    return (
        <div>
            <p>Locke and Key</p>
            <input type="text" name="tipo" onChange={props.tipoTituloFunction} />
            <p>{props.tipo}</p>
        </div>
    )
}

export default FilmeFilho;