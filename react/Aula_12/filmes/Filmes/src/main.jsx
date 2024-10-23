import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilmesPorGenero from './pages/FilmesPorGenero';
import Filmes from './pages/Filmes';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Filmes />}/>
      <Route path="/categoria/:genero" element={<FilmesPorGenero/>} />
    </Routes>
  </BrowserRouter>
)
