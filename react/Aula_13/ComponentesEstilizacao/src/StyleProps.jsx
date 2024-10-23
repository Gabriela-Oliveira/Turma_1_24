/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Componente estilizado Brasil que muda as cores com base na prop 'invertido'
const Brasil = styled.div`
  background: ${(props) => (props.invertido ? "yellow" : "green")};
  color: ${({ invertido }) => (invertido ? "green" : "yellow")};
  padding: 20px;
  font-size: 24px;
  text-align: center;
  border: 2px solid black;
  border-radius: 8px;
  margin-top: 20px;
  width: 200px;
`;

function StyleProps() {
  const [invertido, setInvertido] = useState(false);

  // Função que alterna o valor de 'invertido'
  const alternarCores = () => {
    setInvertido(!invertido);
  };

  return (
    <>
      <h1>Alternando as Cores com Props</h1>
      {/* Botão para alternar as cores */}
      <button onClick={alternarCores}>
        {invertido ? "Voltar para Verde e Amarelo" : "Inverter Cores"}
      </button>

      {/* Componente Brasil recebendo a prop 'invertido' */}
      <Brasil invertido={invertido}>
        {invertido ? "Amarelo e Verde" : "Verde e Amarelo"}
      </Brasil>
    </>
  );
}

export default StyleProps;
