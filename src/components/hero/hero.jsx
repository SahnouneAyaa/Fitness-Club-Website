import React from 'react'
import './hero.css'
import Header from '../header/header'
import himg from '../../assets/hero_image.png'
import himgback from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'




const Hero = () => {
    const transition = {
        type: 'tween',
        duration : 2
    }
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='hero'>
        <div className="blur blur-h"></div>
        <div className="left-hero">
            <Header/>

            <div className="the-best-ad">
                <motion.div
                initial={{left : mobile? '165px': '238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span> <NumberCounter end ={140} start={100} delay='4' preFix = '+'/></span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span> <NumberCounter end ={978} start={800} preFix = '+'/></span>
                    <span>members joined</span>
                </div>
                <div>
                    <span> <NumberCounter end ={50} start={10} preFix = '+'/></span>
                    <span>fitness programs</span>
                </div>
            </div>

            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-hero">
            <button className="btn">Join Now</button>

            <motion.div 
            initial={{right:"-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}
            className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>
            <img src={himg} alt="" className='himg'/>
            <motion.img 
            initial={{right:"11rem"}}
            whileInView={{right: "20rem"}}
            transition={transition}
            src={himgback} alt="" className='himgback'/>

            <motion.div 
            initial={{right:"37rem"}}
            whileInView={{right: "28rem"}}
            transition={transition}
            className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
