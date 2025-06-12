import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ListPost from "./pages/ListPost"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/posts" element={<ListPost />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
