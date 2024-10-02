import React from 'react'
import './Footer.css'
import video from '../../assets/video.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div> 
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Keep in touch</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Your Email' />
            <button className='btn flex' type='submit'>
              SEND<FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
               <MdTravelExplore className='icon' />Travel.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
