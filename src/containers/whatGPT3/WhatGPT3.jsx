import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin">
           <div className="gpt3__whatgpt3-feature">
             <Feature title="What is GPT-3" text="Rapidly build & deploy Virtual Personal Assistants using Alexa Custom Skills; Master Conversational/Voice User Interface"/>            
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are endless </h1>
                <p>Explore the library</p>
               
                
            </div>
            <div className="gpt3__whatgpt3-container" >
            <Feature title="Chatbots" text="There is a shift happening in the way we as a species communicate with machines. With the advent of Amazon Alexa, Google Assistant, Apple Siri, and Microsoft Cortana"/>
            <Feature title="Knowledgebase" text="In Remote Work Revolution for Everyone, you will learn to excel in the virtual-work landscape. You will learn how to build trust, increase productivity, use digital tools intelligently"/>
            <Feature  title="Education" text="Remote working has long been an option for many organizations and employees. However, with the COVID-19 pandemic, many more organizations were forced to rapidly shift to remote work"/>
             </div>
        </div>
    )
}

export default WhatGPT3;
