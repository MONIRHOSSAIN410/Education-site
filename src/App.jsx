import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Programs from './Components/programs/Programs'
import Title from './Components/title/Title';
import About from './Components/about/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import { Contact } from './Components/Contact/Contact';
import Footer from './Components/footer/Footer';
import VideoPlayer from './Components/videoPlayer/Videoplayer';



const App = () => {
  const [playState , setPlayState]=useState(false);
  return (
    <div>
<Navbar/>
<Hero/>
<div className="container">
  <Title subTitle='Our PROGRAM' title='What We Offer'/>
<Programs/>
<About setPlayState={setPlayState}/>
 <Title subTitle='Gallery' title='Campus Photos'/>
<Campus/>
<Title subTitle='TESTIMONIALS' title='What Student Says'/>
<Testimonials/>
<Title subTitle='Contact Us' title='Get in Touch'/>
<Contact/>
<Footer/>
</div>
<VideoPlayer playState={playState}setPlayState={setPlayState}/>



  </div>
  )
}

export default App