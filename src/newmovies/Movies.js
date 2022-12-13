import React from "react";
import HeroSlider from "./components/HeroSlider";
import './movies.css'



export default function Movies() {
  return (
    <div className="thiscontainer bor">
      <h2>Center Mode</h2>
      <div className="inheritcontainer bor">
        <HeroSlider />
      </div>
    </div>
  )
}
