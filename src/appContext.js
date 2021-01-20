import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [myPets, setMyPets] = useState([])
    const [selectedItems, setSelectedItems] = useState([])

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
    
    function addToCart(newCart) {
        
        setSelectedItems(prevCart => [...prevCart, newCart])
        console.log(selectedItems)
    }
    
    return (
        <Context.Provider value={{myPets, addToCart, selectedItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}