import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from "../../data/testimonialsData"
import rightArrow from '../../assets/rightArrow.png'
import lefttArrow from '../../assets/leftArrow.png'
import {motion} from 'framer-motion'


const Testimonials = () => {
  const [selected, setSelected] = useState(0)
  const tLength = testimonialsData.length

  const transition = {
    type: 'tween',
    duration : 2
  }
  
  return (
    <div className="testimonials">
        <div className="left-t">
            <span>testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <motion.span
            key={selected}
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:100}}
            transition={transition}
            >
              {testimonialsData[selected].review}
            </motion.span>
            <span>
              <span style={{
                color: 'var(--orange)'
              }}>
                {testimonialsData[selected].name}
              </span>
              <span>{" "}
                - {testimonialsData[selected].status}
              </span>
            </span>
        </div>
        <div className="right-t">
          <motion.div
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={transition}
          ></motion.div>
          <motion.div
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={transition}
          ></motion.div>
          <motion.img
          key={selected}
          initial={{opacity:0, x:100}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:-100}}
          transition={transition}
          src={testimonialsData[selected].image} alt="" />

          <div className="arrows">
            <img 
            onClick={()=>{
              selected===0
              ? setSelected(tLength - 1)
              : setSelected((prev)=> prev -1)
            }}
            src={lefttArrow} alt="" />
            <img 
            onClick={()=>{
              selected===tLength - 1
              ? setSelected(0)
              : setSelected((prev)=> prev +1)
            }}
            src={rightArrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Testimonials
