import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import SeletorCores from './SeletorCores.jsx'
// import Timer from './Temporizador.jsx'
import Quadrado from './Quadrado.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quadrado />
  </StrictMode>
)
