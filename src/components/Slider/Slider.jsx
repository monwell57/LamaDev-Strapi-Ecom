import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import './Slider.scss'


function Slider() {

    const data = [
        "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1093926/pexels-photo-1093926.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  return (
    <div className='slider'>
        <div className='container'>
            <img src={data[0]} alt='' />
            <img src={data[1]} alt='' />
            <img src={data[2]} alt='' />
        </div>
        <div className='icons'>
            <div className='icon'>
                <WestOutlinedIcon />
            </div>
            <div className='icon'>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider