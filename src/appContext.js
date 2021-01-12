import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider(props) {
    const [myPets, setMyPets] = useState([])
    const petImages = "./petCatalog.json"

    useEffect(() => {
        fetch(petImages)
            .then(res => res.json())
            .then(data => setMyPets(data))
    }, [])
    console.log(myPets)
    return (
        <Context.Provider value={{myPets}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}