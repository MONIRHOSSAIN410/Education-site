import React from 'react'
import './Campus.css';
import gallery from '../../assets/campus18.jpg';
import gallery_2 from '../../assets/campus13.jpg';
import gallery_3 from '../../assets/campus7.jpg';
import gallery_4 from '../../assets/campus17.jpg';
import { FaArrowRight } from "react-icons/fa";
const Campus = () => {
  return (
<div className='campus'>
<div className="gallery">
<img src={gallery} alt="" />
<img src={gallery_2} alt="" />
<img src={gallery_3} alt="" />
<img src={gallery_4} alt="" />
    </div>
    <button className='btn dark-btn'>See more here <FaArrowRight className='iconss'/> </button>
    </div>
  )
}

export default Campus;