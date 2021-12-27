import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData=[
    {title:"Ricky Ponting Hits Back At Kevin Pietersen ",
     text:"img elements must have an alt prop, either with meaningful text, or an empty string for decorative images"
    },
    {
        title:"Spider-Man: No Way Home Is All Set To Beat Sooryavanshi",
        text:"Spider-Man: No Way Home has stormed Indian theatres. The reception is so good that it is surpassing Akshay Kumar’s Sooryavanshi right from day 1. Now, it has achieved a new feat!"
    }, 
    {
        title:"BWF  2021 Final Highlights: Kidambi Srikanth Loses In Title Clash",
        text:"Badminton World Championships final highlights: India's Kidambi Srikanth lost 15-21, 20-22 to Singapore's Loh Kean Yew in the men's singles final of the BWF World Championships in Huelva, Spain on Sunday."
    },    
    {
        title:"Ashes: Joe Root Excellent Batter But A Poor Captain",
        text:"Former Australia captain Ian Chappell labelled Pat Cummins as the most inspirational leader and he termed Joe Root's leadership as poor. "
   },

];

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Future is now and you need to realize it. The Future is today and you need to make it happen</h1>
            <p>Request early action to get statrted</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item,index) => (
                    <Feature title={item.title} text={item.text} key={item.title+index}/>
                ))}
            </div>
        </div>
    )
}

export default Features;
