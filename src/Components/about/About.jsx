import React from 'react'
import './About.css';
import about from '../../assets/download 17.jpeg';
import { FaCirclePlay } from "react-icons/fa6";
const About = ({setPlayState}) => {
  return (
    <div className='about'>
<div className="about-left">
    <img src={about} alt="" className='about-img'/>
    <FaCirclePlay className='play-icons'onClick={()=>{setPlayState(true)}} />
</div>
<div className="about-right">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Nurturing Tomorrow's Leaders Today</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla quam libero quisquam possimus ducimus vel, culpa tempore, et illum inventore labore quas illo atque vero autem odit perferendis quae. Voluptates fugiat illo dolor unde distinctio, impedit laudantium accusantium facere tempora possimus quia velit aperiam vel ut, modi delectus quasi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla quam libero quisquam possimus ducimus vel, culpa tempore, et illum inventore labore quas illo atque vero autem odit perferendis quae. Voluptates fugiat illo dolor unde distinctio, impedit laudantium accusantium facere tempora possimus quia velit aperiam vel ut, modi delectus quasi.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla quam libero quisquam possimus ducimus vel, culpa tempore, et illum inventore labore quas illo atque vero autem odit perferendis quae. Voluptates fugiat illo dolor unde distinctio, impedit laudantium accusantium facere tempora possimus quia velit aperiam vel ut, modi delectus quasi.</p>
 
  
</div>
    </div>
  )
}

export default About