import React, {useContext} from "react"
import Petimage from "../petImg"
import {Context} from "../../appContext"



function ExoticPets () {
    const {myExoticPets} = useContext(Context)
    
  const pictureElements = myExoticPets.map((img) => (
    //<Link to={`/pet/${img.id}`} key={img.id}>    
         <Petimage key={img.id} img={img} /> 
     // </Link>       
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