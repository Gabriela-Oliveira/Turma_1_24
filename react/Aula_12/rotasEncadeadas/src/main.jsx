import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import Sobre from './Sobre.jsx'
import Usuario from './Usuario.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/sobre" element={<Sobre/>}></Route>
        <Route path="/usuario" element={<Usuario/>}></Route>
      </Route>
      
      {/* <Route path="/a" element={<A/>}></Route>
      <Route path="/b" element={<B/>}></Route>
      <Route path="/c" element={<C/>}></Route> */}
    </Routes>
  </BrowserRouter>
)
