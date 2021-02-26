import React, {useContext} from "react"
import {Context} from "../appContext"

function SelectedPet({pet}) {
    const {removeFromCart} = useContext(Context)

    return (
        <div className="cartContainer">
            <img src={pet.picture} alt="your selection" className="petImg"/>
            <p className="sel-pet-name">{pet.name}</p>
            <p className="sel-pet-price"> Euro: {pet.price}</p>
            <button onClick={()=> removeFromCart(pet.id)}>Cancel order</button>

        </div>
    )
}

export default SelectedPet