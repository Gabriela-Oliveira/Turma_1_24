/** @jsxImportSource @emotion/react */
import { useState } from 'react';

function Inverte() {
  // Estado para controlar o checkbox
  const [inverterCores, setInverterCores] = useState(false);

  // Função para alternar o estado do checkbox
  const handleChange = () => {
    setInverterCores(!inverterCores);
  };

  // Definição das cores
  const corFonte = { color: inverterCores ? "blue" : "red" };
  const corFundo = { background: inverterCores ? "red" : "blue" };

  return (
    <>
      <h1>Inverter Cores</h1>
      {/* Checkbox para inverter as cores */}
      <label>
        <input type="checkbox" checked={inverterCores} onChange={handleChange} />
        Inverter Cores
      </label>

      {/* Div com as cores aplicadas com base no estado do checkbox */}
      <div
        css={[
          corFonte,
          corFundo,
          { padding: "20px", marginTop: "20px", fontSize: "18px" }
        ]}
      >
        Fonte {inverterCores ? "Azul" : "Vermelha"} e Fundo {inverterCores ? "Vermelho" : "Azul"}
      </div>
    </>
  );
}

export default Inverte;
