import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ListPost from "./pages/ListPost"
import GuestLayout from "./layouts/GuestLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/posts" element={<ListPost />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
