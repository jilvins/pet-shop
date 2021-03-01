import React, {useContext} from "react"
import Petimage from "../petImg"
import {Context} from "../../appContext"


function TraditionalPets () {
    const {allPets} = useContext(Context)
    
  const pictureElements = allPets.filter(tradPets => tradPets.type === "simple").map((img) => (
         
         <Petimage key={img.id} img={img} /> 
         
         
     )
    )
     return (
         <>
         <div className="petGallery main">
            
             {pictureElements}
           
         </div>
         </>
        
     )
}

export default TraditionalPets