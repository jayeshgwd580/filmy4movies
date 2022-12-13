import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Movie from "./Movie";
import Navbar from "./Navbar";
import Error from "./Error";
import Thome from "./Thome";


export const MainContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={ <Movies /> } />
          <Route path="*" element={ <Error /> } />
          <Route path="movie/:id" element={ <Movie /> } />
          <Route path="thome" element={ <Thome /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}