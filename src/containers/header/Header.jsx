import React from 'react';
import './Header.css';
import People from '../../assets/people.png';
import Ai from '../../assets/ai.png';

function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
            <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
            <p>Morbi eget metus ut sapien malesuada consectetur. Quisque aliquet nisl et consectetur posuere. Pellentesque faucibus dolor tortor, ac consequat tortor mattis quis. Curabitur id gravida ex, fringilla elementum urna.</p>

            <div className="gpt3__header-content-input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content-people">
                <img src={People} alt="people" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
            </div>

            <div className="gpt3__header-image">
            <img src={Ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
