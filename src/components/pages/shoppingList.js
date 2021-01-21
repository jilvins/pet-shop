import React, {useContext} from "react"
import {Context} from "../../appContext"
import SelectedPet from "../selectedPet"

function ShoppingList () {
    const {selectedItems} = useContext(Context)
    const totalAmount = selectedItems.length> 1 ? selectedItems.map(item => item.price).reduce((a,b) => a + b) : 0
    
    const selectedPetList = selectedItems.map(pet => (
        <SelectedPet key={pet.id} pet={pet} />
    ))
/*function completeOrder () {
    console.log("Your total cost, including shipping is" )
}*/

    return (
        <div>
            <h2>Your selected pet list</h2>
            {selectedPetList}
            <p>Ammount to pay: {totalAmount}</p>
            <button onClick={() => console.log("order placed")}>Complete your order</button>
        </div>
    )
}


export default ShoppingList
