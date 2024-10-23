// src/pages/FilmesPorGenero.js
import React from 'react';
import { useParams } from "react-router-dom";
import { filmes } from '../data/filmes';

const FilmesPorGenero = () => {
  // Filtra os filmes pelo gênero passado como prop

  const { genero } = useParams();
  console.log(genero);
  
  
  const filmesFiltrados = filmes.filter(filme => filme.genero === genero);

  return (
    <div>
      <h2>Filmes de {genero.charAt(0).toUpperCase() + genero.slice(1)}</h2>
      <ul>
        {filmesFiltrados.length > 0 ? (
          filmesFiltrados.map(filme => (
            <li key={filme.id}>{filme.titulo}</li>
          ))
        ) : (
          <p>Nenhum filme encontrado para esse gênero.</p>
        )}
      </ul>
    </div>
  );
};

export default FilmesPorGenero;

