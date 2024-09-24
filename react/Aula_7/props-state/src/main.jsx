import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StorageSession from './StorageSession.jsx'
import Filmes from './Filmes/Filmes.jsx'
// import Filmes from './Filmes/Filmes'
// import Filmes from './FilmesPropsFunction/Filmes'
// import Filmes from './FilmeSerie/Filmes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StorageSession /> */}
    <Filmes />
  </StrictMode>,
)
