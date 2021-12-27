import React from 'react'
import './brand.css';
import {google,dropbox,atlassian,shopify,slack} from './import';

const Brand = () => {
    return (
        <div className="gpt3__brand">
            <div><img src={google} alt="google"></img></div>    
            <div><img src={dropbox} alt="dropbox"></img></div>       
            <div><img src={atlassian} alt="atlassian"></img></div>       
            <div><img src={shopify} alt="shopify"></img></div>       
            <div><img src={slack} alt="slack"></img></div>               
       </div>
    )
}

export default Brand;
