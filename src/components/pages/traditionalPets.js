import React, {useContext} from "react"
import Petimage from "../petImg"
import {Context} from "../../appContext"

function TraditionalPets () {
    const {myPets} = useContext(Context)
    
    const pictureElements = myPets.map((img) => (
         
         <Petimage key={img} img={img} />
         
         
     ))
     return (
         <main className="photos">
             <h1>Images go here</h1>
           {` /* {pictureElements}*/`}
         </main>
     )
}

export default TraditionalPets