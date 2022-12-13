import './firstslider.css'
import Slider from "react-slick";
import { Ccard } from './Mcard';
import { consertData } from '../moviesApi';
export default function Secondslider() {
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        className: "slider variable-width",
        slidesToScroll: 5,
        slidesToShow: 5,
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
    <div className='cardContainer'>
          <div className='sliderContainer'>
            <h2>The Best of Live Events</h2>
            <div className='slidCntr'>
              <Slider {...settings}>
                  {consertData.map((item, index) => (
                          <Ccard key={index} img={item.cimg}/>
                      ))}
              </Slider>
            </div>
          </div>
      </div>
  )
}
