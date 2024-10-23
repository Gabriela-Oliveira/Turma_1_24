// src/pages/Filmes.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Filmes = () => {
  return (
    <div>
      <h1>Página de Filmes</h1>
      <nav>
        <ul>
          <li><Link to="categoria/acao">Filmes de Ação</Link></li>
          <li><Link to="categoria/comedia">Filmes de Comédia</Link></li>
          <li><Link to="categoria/romance">Filmes de Romance</Link></li>
        </ul>
      </nav>
      
      {/* O Outlet renderiza as rotas filhas */}
      <Outlet />
    </div>
  );
};

export default Filmes;
