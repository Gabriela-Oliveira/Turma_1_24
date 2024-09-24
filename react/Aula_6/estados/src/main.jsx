import React from 'react'
import ReactDOM from 'react-dom/client'
import SorteioRender from './SorteioRender'
import Sorte from './Sorte'
import Paginacao from './Paginacao'
import SeletorCores from './SeletorCores'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SorteioRender /> */}
    {/* <Sorte /> */}
    {/* <Paginacao /> */}
    <SeletorCores />
  </React.StrictMode>
)
