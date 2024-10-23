import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Blogs from './Blogs';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs/:id" element={<Blogs/>}/> 

        {/* <Route path="/blog" element={<Blogs/>}>
          <Route path=":id"></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
