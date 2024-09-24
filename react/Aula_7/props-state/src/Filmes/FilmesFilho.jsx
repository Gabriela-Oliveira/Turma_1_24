function FilmesFilho(props) {
    return (
        <p>Você <strong>{props.assistido ? "já" : "nunca"}</strong> assistiu o filme <strong>{props.titulo}.</strong></p>
    )
}

export default FilmesFilho;