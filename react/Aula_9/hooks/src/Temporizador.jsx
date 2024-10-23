import { useEffect, useState } from "react";

function Timer() {
    const [contador, setContador] = useState(10);

    useEffect(() => {
        if (contador > 0) {
            setTimeout(() => {
                setContador(contador - 1)
            }, 1000);
        }
    }, [contador])

    return(
        <span>{contador}</span>
    )
}

export default Timer;