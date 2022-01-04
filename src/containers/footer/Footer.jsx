import React from 'react'
import gpt3Logo from '../../logo.svg';
import './Footer.css';
function Footer() {
    return (
        <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>
    
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
    
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3_logo" />
            <p>11 Sedgeway Heights, Woodbridge ON, L4H3B1, <br /> All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>11 Sedgeway Heights, Woodbridge ON, L4H3B1</p>
            <p>548-788-6673</p>
            <p>brandon.florian@protonmail.com</p>
          </div>
        </div>
    
        <div className="gpt3__footer-copyright">
          <p>@2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer
