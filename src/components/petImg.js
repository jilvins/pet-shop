import React, {useState, useContext} from "react"
import {Context} from "../appContext"



function Petimage({img}) {
    const [isClicked, setIsClicked] = useState(false)
    const {addToCart, selectedItems} = useContext(Context)
    const alreadyInCart = selectedItems.some(item => item.id === img.id)
    return (
        <div className="petContainer">
            <h4>{img.name}</h4>
            <img src={img.picture} alt="animal" className="petImg"/>
            <div className="petInfoSection">
            <p>{img.description}</p>
            <p>{img.price} Euros</p>
            <button
            onClick={()=> {setIsClicked(isClicked); addToCart(img)}}
            style={{ display: alreadyInCart ? "none" : "block" }}>
                Buy
            </button>
            <button style={{ display: alreadyInCart ? "block" : "none" }}>
                Order taken
            </button>
            </div>
            {isClicked ? console.log("About to buy?") : console.log("Dont want to buy")}
        </div>
    )
}

export default Petimage
