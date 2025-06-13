import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ListPost from "./pages/ListPost"
import ShowPost from "./pages/showPost"
import GuestLayout from "./layouts/GuestLayout"
import Page404 from "./pages/Page404"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/posts"/>
              <Route path="" element={<ListPost/>}/>
              <Route path=":id" element={<ShowPost/>}/>              
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
