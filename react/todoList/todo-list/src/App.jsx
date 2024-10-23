import React, { useState } from 'react';
import AdicionarTarefa from './components/AdicionarTarefa';
import ListaTarefas from './components/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [detalhes, setDetalhes] = useState(false);

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

  const setaDetalhes = () => {
    setDetalhes(true);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        removerTarefa={removerTarefa}
        marcarConcluida={marcarConcluida}
      />
      <button onClick={setaDetalhes}>Detalhes</button>
    </div>
  );
}

export default App;
