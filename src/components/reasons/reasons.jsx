import React from 'react'
import './reasons.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'




const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
        <div className="left">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="right">
            <span>some reasons</span>

            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>

            <div className='details'>
                <div>
                  <img src={tick} alt="" />
                  <span>over +140 expert coachs</span>
                </div>
                <div>
                  <img src={tick}  alt="" />
                  <span>train smarter and faster than before</span>
                </div>
                <div>
                  <img src={tick}  alt="" />
                  <span>1 free program for new member</span>
                </div>
                <div>
                  <img src={tick}  alt="" />
                  <span>reliable partners</span>
                </div>
            </div>
            <span style={{
                color: "var(--gray)",
                fontWeight: "normal",
                textTransform:"uppercase"
            }
            }>our partners</span>

            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons
