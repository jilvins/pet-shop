import React, {useState, useContext} from 'react'
import {Context} from "../appContext"
import {useHistory} from 'react-router-dom'

function Pet () {
    const {addToCart, selectedItems, allPets, singlePet} = useContext(Context)
    let previousPage = useHistory();
    const [isClicked, setIsClicked] = useState(false)
    
    return (
       
        allPets.filter(onePet => onePet.id === singlePet).map(onePet => (
            <div className="single-pet-container">
            <img src={`../${onePet.picture}`} alt={onePet.name} className="single-petImg"/>
            <div className="pet" key={onePet.id}>
                
               <p><b>Type of Pet:</b> {onePet.name}</p>
               <p><b>Price:</b> {onePet.price} Eur</p>
               <p><b>More about this pet:</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sem. Proin tempus commodo dui non vulputate. Quisque felis eros, pharetra a porttitor eu, hendrerit vitae quam. Nam at ullamcorper leo, ac vestibulum mi. Etiam eu finibus justo. Nam gravida purus metus, eu suscipit justo fringilla id. Donec nec nisl vitae ipsum luctus efficitur. Donec arcu diam, laoreet vitae urna ac, tempus consequat mauris. Curabitur maximus elementum lorem in laoreet. Cras vulputate ac metus ac porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus dui. Morbi pretium facilisis augue, vitae varius orci malesuada in. Integer euismod ut augue at pharetra. Maecenas est massa, iaculis a neque quis, mollis rutrum nisl.</p>
               <button
            onClick={()=> {setIsClicked(isClicked); addToCart(onePet)}}
            style={{ display: (selectedItems.some(item => item.id === onePet.id)) ? "none" : "block" }}>
                Buy
            </button>
            <button style={{ display: (selectedItems.some(item => item.id === onePet.id)) ? "block" : "none" }}>
                Order taken
            </button>
               <button onClick={() => previousPage.goBack()}>Back</button>
        </div>
        </div>
        )

        )
        
    )
}

export default Pet