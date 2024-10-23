import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './Ex1.jsx'
// import App from './Ex2.jsx'
import AgendaTelefonica from './AgendaTelefonica.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgendaTelefonica />
  </StrictMode>
)
