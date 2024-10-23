import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Sobre from './Sobre.jsx'
import Usuario from './Usuario.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/sobre" element={<Sobre/>}></Route>
      <Route path="/usuario" element={<Usuario/>}></Route>
    </Routes>
  </BrowserRouter>
)
