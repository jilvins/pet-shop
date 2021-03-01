import React, {useState, useContext} from "react"
import {Context} from "../appContext"
import {Link} from 'react-router-dom'



function Petimage({img}) {
    const [isClicked, setIsClicked] = useState(false)
    const {addToCart, selectedItems, setSinglePet} = useContext(Context)
    const alreadyInCart = selectedItems.some(item => item.id === img.id)
    return (
        <div className="petContainer">
            <img src={img.picture} alt="animal" className="petImg"/>
            <div className="petInfoSection">
            <Link to={`/pet/${img.id}`} key={img.id} onClick={()=> setSinglePet(img.id)}>
            <p>{img.description}</p>
            </Link>
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
        </div>
    )
}

export default Petimage
