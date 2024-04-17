import React from 'react'
import './footer.css'
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"



const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={github} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
        </div>

        <div className="blur blur-f1"></div>
        <div className="blur blur-f2"></div>

        <span> &copy; 2022 Sahnoune Aya. All rights reserved.</span>
    </div>
  )
}

export default Footer
