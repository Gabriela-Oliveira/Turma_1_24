import { Link, useParams } from "react-router-dom";

function Blogs() {
    let { id } = useParams();

    return (
        <div>
            <h1>Recebemos por parâmetro na URL o id: {id}</h1>

            <Link to="/">Voltar para a tela Home</Link>
        </div>
    )
}

export default Blogs;