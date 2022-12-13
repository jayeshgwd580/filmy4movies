// import { useGlobalContext } from './context'
// import { useNavigate } from 'react-router-dom'
import './firstslider.css'
import Slider from "react-slick";
import Mcard from './Mcard';
import { moviesData } from '../moviesApi';


export default function Firstslider() {
    // const data = useGlobalContext()
    // const navigation = useNavigate()

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 4,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
    <>
      <div className='cardContainer'>
          <div className='sliderContainer'>
            <h2>Recommended Movies</h2>
            <div className='slidCntr'>
              <Slider {...settings}>
                  {moviesData.map((item, index) => (
                          <Mcard key={index} id={index} category={item.categories} title={item.name} img={item.imgSrc} likes={item.likes}/>
                      ))}
              </Slider>
            </div>
          </div>
      </div>
  </>
  )
}
