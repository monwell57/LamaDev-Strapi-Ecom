import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import './Slider.scss'


function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1093926/pexels-photo-1093926.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1) 
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1) 
    }
  return (
    <div className='slider'>
        <div className='container' style={{transform: `translatex(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt='' />
            <img src={data[1]} alt='' />
            <img src={data[2]} alt='' />
        </div>
        <div className='icons'>
            <div className='icon' onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className='icon' onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider