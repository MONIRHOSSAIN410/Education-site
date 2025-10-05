import React, { useRef } from 'react'
import './Testimonials.css';
import next_icon from '../../assets/icons3.png';
import back_icon from '../../assets/icons5.png';
import user_1 from '../../assets/download 9.jpeg';
import user_2 from '../../assets/download 2.jpeg';
import user_3 from '../../assets/download.jpeg';
import user_4 from '../../assets/download 7.jpeg';


const Testimonials =()=>{

  const slider = useRef();
  let tx =0;

 const slideForward = ()=>{
  if(tx > -50){
    tx -=25;
  }
  slider.current.style.transform=`translateX(${tx}%)`;

 } 
 const slideBackward= ()=>{
    if(tx < 0){
    tx +=25;
  }
  slider.current.style.transform=`translateX(${tx}%)`;

 }
return(
  <div className='testimonials'>
    
  <span className='icoon'> <img src={next_icon} alt="" className='next-btn' onClick={slideForward} /></span> 

    <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
   
    <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt="" />
              <div>
                <h3>William Jackson 1</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, voluptates sequi minus fuga, alias eius repellendus corporis harum pariatur asperiores inventore ut aperiam sunt. Non!</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3>William Jackson 2</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, voluptates sequi minus fuga, alias eius repellendus corporis harum pariatur asperiores inventore ut aperiam sunt. Non!</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3>William Jackson 3</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, voluptates sequi minus fuga, alias eius repellendus corporis harum pariatur asperiores inventore ut aperiam sunt. Non!</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3>William Jackson 4</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, voluptates sequi minus fuga, alias eius repellendus corporis harum pariatur asperiores inventore ut aperiam sunt. Non!</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
)
}
export default Testimonials;