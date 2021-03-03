import React, {useContext, useState} from "react"
import {Context} from "../../appContext"
import SelectedPet from "../selectedPet"


function ShoppingList () {
    const {selectedItems, emptyList} = useContext(Context)
    const totalAmount = selectedItems.length> 0 ? selectedItems.map(item => item.price).reduce((a,b) => a + b) : 0
    const shippingCosts = selectedItems.length* 2
    const [buttonText, setButtonText] = useState("Complete your order")
    const [btnText, setBtnText] = useState("Proceed?")
    const [comleteMessage, setCompleteMessage] = useState("")
    const [imageClass, setImageClass] = useState("img")
    
    const selectedPetList = selectedItems.map(pet => (
        <SelectedPet key={pet.id} pet={pet} />
    ))
function completeOrder () {
        
        setImageClass("hidden")
        setCompleteMessage(`Your total costs are ${totalAmount} € + ${shippingCosts} € for shipping`)  
        setButtonText("")
        emptyList()
    }
function takeOrder () {
    setBtnText("Processing...")
    setTimeout(() => {
        setBtnText("Order will be delivered in 2 days!")  
    }, 3000)
}

    return (
        <>
        <div className="main">
            {selectedItems.length === 0 ? null :
           <> <h2>Your selected pet list</h2>
            <div className="cartGallery">
            {selectedPetList}
            </div>
            </> }
            <p className="amount-to-pay">{selectedItems.length> 0 ? `Total ammount to pay: ${totalAmount}` : null}</p>
            <p>{comleteMessage}</p>
            {selectedItems.length> 0 ? <button className={imageClass} onClick={completeOrder}>{buttonText}</button> : null}
            <button className={imageClass === "img"? "hidden" : "img"} 
            onClick={takeOrder}>{btnText}</button>
        
        </div>
        </>
    )
}


export default ShoppingList
