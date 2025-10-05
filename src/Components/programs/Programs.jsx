import React from 'react'
import "./Programs.css";
import download_1  from'../../assets/girls.jpg'
import download_2  from'../../assets/man6.jpg'
import download_3 from'../../assets/girls2.jpeg'
import { FaReadme } from "react-icons/fa6";
import { PiCertificateLight } from "react-icons/pi";
import { FaBookOpenReader } from "react-icons/fa6";
const Programs = () => {
  return (
    <div className='programs'>
<div className="program">
    <img src={download_1}  />
    <div className="caption">
      
      <div className="caption">
      < PiCertificateLight style={{fontSize:'60px',marginBottom:"10px"}} />
      <p>Graduation Degree</p>
    </div>
      
    </div>
    </div>
    <div className="program">
    <img src={download_2}  />
      <div className="caption">
      <FaReadme  style={{fontSize:'60px',marginBottom:"10px"}} />
     <p>Master Degree</p>
    </div>
</div>
    <div className="program">
    <img src={download_3}  />
    <div className="caption">
   <FaBookOpenReader style={{fontSize:'60px',marginBottom:"10px"}}/>
      <p>Post Graduation</p>
    </div>
    </div>


    </div>
  )
}

export default Programs