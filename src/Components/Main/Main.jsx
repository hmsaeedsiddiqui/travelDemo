import React  from 'react'
import './Main.css'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'
import pic7 from '../../assets/pic7.jpg'
import pic8 from '../../assets/pic8.jpg'
import pic9 from '../../assets/pic9.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2CheckFill } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Data = [
  {
      id:1,
      imgSrc:pic1,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$100',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  }, 

  {
      id:2,
      imgSrc:pic2,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$200',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },

  {
      id:3,
      imgSrc:pic3,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$300',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },

  {
      id:4,
      imgSrc:pic4,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$400',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },

  {
      id:5,
      imgSrc:pic5,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$500',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },

  {
      id:6,
      imgSrc:pic6,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$600',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },

  {
      id:7,
      imgSrc:pic7,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$700',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },

  {
      id:8,
      imgSrc:pic8,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$800',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },

  {
      id:9,
      imgSrc:pic9,
      destTitle:'Bora Bore',
      location:'New Zealand',
      grade: 'Cultural Relax',
      fees: '$900',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})

}, [])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most visited destination
        </h3>
      </div>

      <div data-aos="fade-up" className="secContent grid">{
        Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
          return(
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{ location}</span>
                </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <BsClipboard2CheckFill className='icon' />
                  </button>
              </div>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Main