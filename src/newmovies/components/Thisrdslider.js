import './firstslider.css'
import Slider from "react-slick";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Pcard from './Pcard';
// import Mcard from './Mcard';
import { premierMovies } from '../moviesApi';

export default function Thisrdslider() {
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
        className: "slider variable-width",
        slidesToScroll: 5,
        slidesToShow: 5,
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
        <div className='tcardContainer'>
            <div className='premier'>
                <div className='playicon'>
                    <PlayCircleIcon />
                </div>
                <div className='pcont'>
                    <h2>PREMIER</h2>
                    <p>Watch new movies at home, every Friday</p>
                </div>
            </div>
            <div className='psliderContainer'>
                <Slider {...settings}>
                        {premierMovies.map((item, index) => (
                        //   <Mcard key={index} id={index} category={item.categories} title={item.name} img={item.imgSrc} likes={item.likes}/>
                          <Pcard key={index} img={item.cimg} name={item.name} language={item.lan} />
                        ))}
                </Slider>
            </div>

        </div>
  )
}
