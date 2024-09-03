import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ListaDoces from './lista.jsx'
import TabelaDoces from './ListaDoceMaterialUi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <ListaDoces /> */}
    <TabelaDoces />
  </StrictMode>,
)
