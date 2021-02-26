import React from "react"
import ShopImg from '../../pictures/shopping-1900995_1920.jpg'


function InfoPage () {
    return (
        <>
        <div className="info-main">
        <img src={ShopImg} alt="pet shop" className="main-img"/>
        <h2 className="main-img-text"></h2>
        </div>
        </>
    )
}

export default InfoPage