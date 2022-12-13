import Slider from "react-slick";
import '../movies.css'

export default function HeroSlider() {
    const settings = {
        centerMode: true,
        centerPadding: "90px",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      };
  return (
    <Slider {...settings}>
          <div className="thiscard">
            <div className="tcard bor">
              <h3>1</h3>
            </div>
          </div>
          <div className="thiscard">
            <div className="tcard bor">
              <h3>2</h3>
            </div>
          </div>
          <div className="thiscard">
            <div className="tcard bor">
              <h3>3</h3>
            </div>
          </div>
          <div className="thiscard">
            <div className="tcard bor">
              <h3>4</h3>
            </div>
          </div>
          <div className="thiscard">
            <div className="tcard bor">
              <h3>5</h3>
            </div>
          </div>
          <div className="thiscard">
            <div className="tcard bor">
              <h3>6</h3>
            </div>
          </div>
        </Slider>
  )
}
