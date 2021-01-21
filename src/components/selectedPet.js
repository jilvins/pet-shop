import React, {useContext} from "react"
import {Context} from "../appContext"

function SelectedPet({pet}) {
    const {removeFromCart} = useContext(Context)

    return (
        <div className="cartContainer">
            <img src={pet.picture} alt="your selection" className="petImg"/>
            <p>{pet.price}</p>
            <button onClick={()=> removeFromCart(pet.id)}>Cancel order</button>

            {console.log(pet.description)}
        </div>
    )
}

export default SelectedPet