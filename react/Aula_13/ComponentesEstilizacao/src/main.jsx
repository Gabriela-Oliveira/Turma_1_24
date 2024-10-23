import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Inverte from './Inverte.jsx'
// import StyleComponent from './StyleComponent.jsx'
// import StyleProps from './StyleProps.jsx'
// import TaggedComponent from './TaggedComponent.jsx'
// import App from './alternaClaroEscuro/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Inverte />
    {/* <StyleComponent /> */}
    {/* <StyleProps /> */}
    {/* <TaggedComponent /> */}
  </StrictMode>,
)
