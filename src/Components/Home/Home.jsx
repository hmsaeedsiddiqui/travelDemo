import React from 'react'
import './Home.css'
import video1 from '../../assets/video1.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Home = () => {


    useEffect(()=>{
        Aos.init({duration:2000})

    }, [])



  return (
   <section className="home">
    <div className="overlay"> </div>
        <video src={video1} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
            <div className="textDiv">
                <span data-aos="fade-up" className="smallText">
                    Our Packages
                </span>
                <h1 data-aos="fade-up" className="homeTitle">
                    Search Your Holidays
                </h1>
            </div>
            <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlfor="city">Search Your Destination</label>
                    <div className="input flex">
                        <input type="text" placeholder='Enter Your Name Here...'/>
                        <GrLocation className='icon' />
                    </div>
                </div>

                <div className="dateInput">
                    <label htmlfor="date">Select Your Date:</label>
                    <div className="input flex">
                        <input type="date"/>
                    </div>
                </div>

                 <div className="priceInput">
                  <div className="label_total flex">
                     <label htmlfor="price">Max Price:</label>
                     <h3 className="total">$5000</h3>
                  </div>
                  <div className="input flex">
                    <input type="range" max="5000" min="1000"/>
                  </div>
                </div>
                <div className="searchOption flex">
                   <HiFilter className="icon"/>
                   <span>MORE FILTERS</span>
                </div>
            </div>
            <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="rightIcons">
                   <FiFacebook className="icon" />
                   <FaInstagram className="icon" />
                   <FaTripadvisor className="icon" />
                </div>
                <div className="leftIcons">
                  <FaTripadvisor className="icon" />
                  <FaListUl className="icon"/>
                  <TbApps className="icon"/>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Home
