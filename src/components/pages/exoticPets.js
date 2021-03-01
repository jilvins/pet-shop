import React, {useContext} from "react"
import Petimage from "../petImg"
import {Context} from "../../appContext"




function ExoticPets () {
    const {allPets} = useContext(Context)
    
  const pictureElements = allPets.filter(exotPets => exotPets.type === "exotic").map((img) => (
      
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

export default ExoticPets