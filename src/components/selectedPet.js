import React from "react"

function SelectedPet({pet}) {
    return (
        <div>
            <img src={pet.picture} alt="your selection"/>
            <p>{pet.price}</p>
            {console.log(pet.description)}
        </div>
    )
}

export default SelectedPet