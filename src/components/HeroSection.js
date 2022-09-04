import React from 'react'
import CustomImage from './CustomImage';

export default function HeroSection() {
    const images = [
         "/img/gallery/img_1.jpg",
         "/img/gallery/img_2.jpg",
         "/img/gallery/img_3.jpg",
         "/img/gallery/img_4.jpg",
         "/img/gallery/img_5.jpg",
         "/img/gallery/img_6.jpg",
         "/img/gallery/img_7.jpg",
         "/img/gallery/img_8.jpg",
         "/img/gallery/img_9.jpg",  
        ]
    
  return (
    <div className="section hero">
        <div className="col typography">
            <h1 className="title">What Are We About</h1>
            <p className="info">Foody hub is a piece where you can please your soul and tummy with delicious food recipes of all cuisine. And our services are absolutely free. So start exploring now. </p>
            <button className="btn">explore now</button>
        </div>

        <div className="col gallery">
             { images.map((src, index) => (
                 <CustomImage key ={index} imgSrc= {src} pt={"90%"} />
             ))}
        </div>
    </div>
  )
}
