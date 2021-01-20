import React, {useState, useContext} from "react"
import {Context} from "../appContext"


function Petimage({img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {addToCart} = useContext(Context)
    return (
        <div className="petContainer">
            <h4>{img.name}</h4>
            <img src={img.picture} alt="animal" className="petImg"/>
            <div className="petInfoSection">
            <p>{img.description}</p>
            <p>{img.price} Euros</p>
            <button
            onClick={()=> {setIsHovered(!isHovered); addToCart(img)}}
            >
                {isHovered? "cancel" : "Buy"}
            </button>
            </div>
            {isHovered ? console.log("About to buy?") : console.log("Dont want to buy")}
        </div>
    )
}

export default Petimage
