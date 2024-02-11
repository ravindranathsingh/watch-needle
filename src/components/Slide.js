import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slide = ({slide}) => {
  const [ carousel, setCarousel ] = useState(0);
  const nextSlide = () => {
    setCarousel(carousel === slide.length-1 ? 0 : carousel+1)
  }
  const prevSlide = () => {
    setCarousel(carousel === 0 ? slide.length-1 : carousel-1)
  }
  return (
    <div className='slides'>
      <ArrowBackIosIcon className="arrow left-arrow" onClick={() => prevSlide()}/>
      <div>
        {slide.map((item, key) => {
          return (
          <>
            <img key={key} src={item.src} alt={item.alt} className={carousel === key ? 'carousel' : 'carousel carousel-hidden'}/>
          </>
          )
        })}
      </div>
      <ArrowForwardIosIcon className="arrow right-arrow" onClick={() => nextSlide()}/>
    </div>
  )
}

export default Slide