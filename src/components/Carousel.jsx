import { useState } from "react";
import "../styles/Carousel.scss";

function Carousel({data}) {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    

  return (
    <div className="carousel">
        <span className="carousel__icon-left" onClick={prevSlide}>{data.length > 1 ? '<' : ''}</span>
        {data.map((item, index) =>{
            return <img className={slide === index ? "carousel__img" : "hidden"} src={item} alt="" key={index}/>
        })}
        <span className="carousel__icon-right" onClick={nextSlide}>{data.length > 1 ? '>' : ''}</span>
        <div className="carousel__dots">
            {data.map((_, index) =>{
                return <span className={slide === index ? "" : "indicator-inactive"} key={index} onClick={() => setSlide(index)}>{data.length > 1 ? '.' : ''}</span>
            })}
        </div>
    </div>
  )
}

export default Carousel