import React from 'react';

function Tarefa({ tarefa, index, removerTarefa, marcarConcluida }) {
  return (
    <li className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      <span onClick={() => marcarConcluida(index)}>{tarefa.texto}</span>
      <button style={{ marginLeft: 10 }} onClick={() => removerTarefa(index)}>Remover</button>
    </li>
  );
}

export default Tarefa;
