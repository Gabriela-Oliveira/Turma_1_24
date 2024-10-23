import { useState, useEffect } from "react";

function Quadrado() {
    const [numero, setNumero] = useState(1);
    const [quadrado, setQuadrado] = useState(1);

    useEffect(() => {
        setQuadrado(numero * numero);
    }, [numero])
    
    function anterior() {
        setNumero(numero - 1);
    }

    function proximo() {
        setNumero(numero + 1);
    }

    return(
        <div style={{display:"flex"}}>
            <button onClick={anterior} style={{margin:"10px"}}>-</button>
            <h3>{numero}</h3>
            <button onClick={proximo} style={{margin:"10px"}}>+</button>
            <h2>O quadrado de {numero} é: {quadrado}</h2>
        </div>
    )
}

export default Quadrado;