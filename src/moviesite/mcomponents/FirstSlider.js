import React from 'react'
import Slider from "react-slick";
import './btn.css'
import Mcard from './Mcard';

export default function FirstSlider() {

  let moviesData = [
    {   
        id: 1,
        name: "Black Adam",
        likes: "127K",
        categories: "Action/Fantacy/Sc-Fi",
        imgSrc: "black-adam.PNG"
    },
    {
        id: 2,
        name: "Doctor G",
        likes: "8k",
        categories: "Comedy/ Drama",
        imgSrc: "doctorG.PNG"
    },
    {
        id: 3,
        name: "Kantara (Hindi)",
        likes: "26k",
        categories: "Adventure/Drama/Thriller",
        imgSrc: "kantara.PNG"
    },
    {
        id: 4,
        name: "Vikram Vedha",
        likes: "60k",
        categories: "Action/Crime/Thriller",
        imgSrc: "vikramvedha.PNG"
    },
    {
        id: 5,
        name: "Ponniyin Selvan - Part 1",
        likes: "26k",
        categories: "Action/Adventure/Drama/Historical",
        imgSrc: "ps1.PNG"
    }
]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='firstslider bor'>
        <h2>Recommended Movies</h2>
        <div className='mslider'>
            <Slider {...settings}>
                {moviesData.map((item, index) => (
                        <Mcard key={index} id={item.id} category={item.categories} title={item.name} img={item.imgSrc} likes={item.likes}/>
                    ))}
            </Slider>
        </div>
    </div>
  )
}
