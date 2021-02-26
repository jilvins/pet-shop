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
         <>
         <div className="petGallery main">
            
             {pictureElements}
           
         </div>
         </>
        
     )
}

export default TraditionalPets