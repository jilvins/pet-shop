import React, {useContext} from "react"
import Petimage from "../petImg"
import {Context} from "../../appContext"

function TraditionalPets () {
    const {myPets} = useContext(Context)
    
  const pictureElements = myPets.map((img) => (
         
         <Petimage key={img.id} img={img} /> 
         
         
     )
    )
     return (
         <div className="photos">
             <h1>Images go here</h1>
             {pictureElements}
           
         </div>
        
     )
}

export default TraditionalPets