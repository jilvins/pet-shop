import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [myPets, setMyPets] = useState([])
    const [myExoticPets, setMyexoticPets] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [singlePet, setSinglePet] = useState()

    useEffect(() => {
        fetch('data.json' , {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(res => res.json())
            .then(data => setMyPets(data))
            .catch((err) => {console.error(err) });
                
    }, [])

    useEffect(() => {
        fetch('exoticPets.json' , {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(res => res.json())
            .then(data => setMyexoticPets(data))
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
        <Context.Provider value={{myPets, myExoticPets, selectedItems, addToCart, removeFromCart, emptyList }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}