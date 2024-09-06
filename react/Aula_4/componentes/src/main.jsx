import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import BemVindo from './BemVindo'
// import Cabecalho from './SPA/Cabecalho'
// import Conteudo from './SPA/Conteudo'
// import Rodape from './SPA/Rodape'
import ComponentesFilhos from './ComponentesFilhos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BemVindo /> */}
    {/* <Conteudo /> */}
    <ComponentesFilhos />
  </StrictMode>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <BemVindo /> */}
//     <Cabecalho />
//     <Conteudo />
//     <Rodape />
//   </StrictMode>
// )
