import React from 'react'
import './footer.css';
import gpt3logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="gpt3__footer section_padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient-text">Do you want to step into future before others?</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3logo} alt="logo"></img>
                    <p>NetQuest Software Inc, Bangalore, Karnataka. All Rights Reserved</p>
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
                    <p>Terms & conditions</p>
                    <p>Privacy policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>132, Seshore Avenue, Palo Alto, California,USA</p>
                    <p>085-1376532</p>
                    <p>info@payme.co.uk</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@c 2021 GPT-3, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
