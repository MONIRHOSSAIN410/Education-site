import React,{result,setResult} from 'react';
import './Contact.css';
import { FaArrowRight } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

export const Contact =()=>{
     const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "11cd162b-56b2-4b6d-bdfc-481ca6f8c5bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
        <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message<TfiEmail className='message1'/></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis numquam nobis necessitatibus, nisi ipsa modi esse vel aspernatur blanditiis praesentium eaque ut laudantium! Perspiciatis porro nesciunt omnis eaque autem, eveniet quibusdam veritatis error dolorem temporibus, necessitatibus voluptas laboriosam corrupti impedit natus eius nostrum eos, quia deserunt quas odio. Porro, consectetur?</p>
            <ul>
            <li><MdAttachEmail className='message2' />Contact@gmail.com</li>
            <li><FaPhoneVolume className='phone1'/>+16454522221</li>
            <li><IoLocationSharp className='location1'/>House:kha/17,Block-G,Road-35,Uttara</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                  <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Phone Number'
                required/>
                <label>Write your message here</label>
                <textarea name=""  rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <FaArrowRight className='white2'/></button>
            </form>
            <span>{result}</span>
        </div>
        
        
        </div>
    )
}