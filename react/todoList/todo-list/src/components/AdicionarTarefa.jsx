import React, { useState } from 'react';

function AdicionarTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      adicionarTarefa(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="adicionar-tarefa">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AdicionarTarefa;
