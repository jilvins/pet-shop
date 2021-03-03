import React from "react"
import ShopImg from '../../pictures/shopping-1900995_1920.jpg'
import {Link} from 'react-router-dom'


function InfoPage () {
    return (
       
        <div className="info-main">
        <img src={ShopImg} alt="pet shop" className="main-img"/>
        <div className="info-text">
            <h2>Wellcome to Your pet shop!</h2>
            <p>Choose from one of thouse two categories, according to your liking:</p>
            <Link to="/tradpets"><button>Traditional pets</button></Link>
            <Link to="/exopets"><button>Exotic pets</button></Link>
        </div>
        </div>
        
    )
}

export default InfoPage