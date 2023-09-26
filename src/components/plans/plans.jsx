import React from 'react'
import './plans.css'
import {plansData} from "../../data/plansData"
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container" id='plans'>
        <div className="blur blur-p1"></div>
        <div className="blur blur-p2"></div>

        <div className="programs-header">
            <span className='stroke-text'>ready to start</span>
            <span >yout journey</span>
            <span className='stroke-text'>now with us</span>
        </div>

        <div className="plans">
            {plansData.map((plan, i)=>{
              return  <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature ,i)=>{
                          return  <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}> {feature}</span>
                            </div>
                        })}
                    </div>

                    <div>
                        <span>See more benefits </span>
                    </div>
                    <button className='btn'>
                        Join now
                    </button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Plans
