import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [allPets, setAllPets] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [singlePet, setSinglePet] = useState(1)
    
   
    useEffect(() => {
        fetch('allPets.json' , {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(res => res.json())
            .then(data => setAllPets(data))
            .catch((err) => {console.error(err) });
                
    }, [])
    
    
    function addToCart(newCart) {
        
        setSelectedItems(prevCart => [...prevCart, newCart])
    }
    function removeFromCart(id) {
        setSelectedItems(prevCart => prevCart.filter(pet => pet.id !== id))
    }

    function emptyList() {
        setSelectedItems([])
    }
    
    return (
        <Context.Provider value={{allPets, selectedItems, singlePet, setSinglePet, addToCart, removeFromCart, emptyList }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}