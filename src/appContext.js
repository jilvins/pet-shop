import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [myPets, setMyPets] = useState([])
    //const petImages = "./petCatalog.json"

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
    console.log(myPets)
    
    return (
        <Context.Provider value={{myPets}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}