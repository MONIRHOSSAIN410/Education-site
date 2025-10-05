import React from 'react'
import './Hero.css';

import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
<h1>We Ensure better education for a better world</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, voluptate eaque sequi quia officia amet </p>
<button className='btn'>Explore more<FaArrowRight  className='faArrow'/></button>

</div>
</div>
  )
}

export default Hero