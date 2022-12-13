import React from 'react'
import Slider from "react-slick";
import './slider.css'

export default function SecondSlider() {
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
        <h2>The Best of Live Events</h2>
        <div className='mslider'>
            <Slider {...settings}>
                <div className='firstslider1 bor'>
                  <div className='slider-container bor'>1</div>
                </div>
                <div className='firstslider1 bor'>2</div>
                <div className='firstslider1 bor'>1</div>
                <div className='firstslider1 bor'>2</div>
                <div className='firstslider1 bor'>1</div>
                <div className='firstslider1 bor'>2</div>
                <div className='firstslider1 bor'>1</div>
                <div className='firstslider1 bor'>2</div>
            </Slider>
        </div>
    </div>
  )
}
