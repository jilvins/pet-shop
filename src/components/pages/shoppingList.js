import React, {useContext} from "react"
import {Context} from "../../appContext"
import SelectedPet from "../selectedPet"

function ShoppingList () {
    const {selectedItems} = useContext(Context)
    const selectedPetList = selectedItems.map(pet => (
        <SelectedPet key={pet.id} pet={pet} />
    ))

    return (
        <div>
            <h2>Your selected pet list</h2>
            {selectedPetList}
            {console.log("it is working")}
        </div>
    )
}


export default ShoppingList
