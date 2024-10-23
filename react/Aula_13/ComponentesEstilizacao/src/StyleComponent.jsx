/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Definindo o componente estilizado Botao
const Botao = styled.button`
  border: 1px solid chocolate;
  border-radius: 4px;
  padding: 5px;
  font-size: 20px;
  margin: 5px;
  background-color: lightblue;
  cursor: pointer;

  &:hover {
    background-color: lightcoral;
  }
`;

function StyleComponent() {
  const [contador, setContador] = useState(0);

  // Função que incrementa o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>Exemplo de uso do Botão Estilizado</h1>
      <p>Contador: {contador}</p>
      {/* Usando o componente estilizado Botao */}
      <Botao onClick={incrementar}>Clique para Incrementar</Botao>
    </>
  );
}

export default StyleComponent;
