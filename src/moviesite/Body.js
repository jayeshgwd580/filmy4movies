import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import Mhome from "./Mhome";
import Thome from "./Thome";

export const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="mhome/:id" element={<Mhome />}/>
          <Route path="thome" element={<Thome />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
