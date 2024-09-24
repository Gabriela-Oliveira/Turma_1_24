import React, { useState } from 'react';
import AdicionarTarefa from './components/AdicionarTarefa';
import ListaTarefas from './components/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, { texto: tarefa, concluida: false }]);
  };

  const removerTarefa = (indice) => {
    const novasTarefas = tarefas.filter((_, i) => i !== indice);
    setTarefas(novasTarefas);
  };

  const marcarConcluida = (indice) => {
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === indice ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novasTarefas);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        removerTarefa={removerTarefa}
        marcarConcluida={marcarConcluida}
      />
    </div>
  );
}

export default App;
