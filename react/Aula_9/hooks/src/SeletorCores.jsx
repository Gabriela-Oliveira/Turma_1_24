import { useState } from "react";

function SeletorCores() {
    const [cor, setCor] = useState("Cor ainda não selecionada!");
    
    return(
        <div>
            <button onClick={() => setCor("Vermelho")}>Vermelho</button>
            <button onClick={() => setCor("Verde")}>Verde</button>
            <button onClick={() => setCor("Azul")}>Azul</button>

            <p>{cor}</p>
        </div>
    )
}

export default SeletorCores;