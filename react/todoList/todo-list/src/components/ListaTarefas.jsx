import React from 'react';
import Tarefa from './Tarefa';

function ListaTarefas({ tarefas, removerTarefa, marcarConcluida }) {
  return (
    <ul className="lista-tarefas">
      {tarefas.map((tarefa, index) => (
        <Tarefa
          key={index}
          tarefa={tarefa}
          index={index}
          removerTarefa={removerTarefa}
          marcarConcluida={marcarConcluida}
        />
      ))}
    </ul>
  );
}

export default ListaTarefas;
