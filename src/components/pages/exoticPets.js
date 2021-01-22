import React, {useContext} from "react"
import Petimage from "../petImg"
import {Context} from "../../appContext"
import Footer from "../footer"

function ExoticPets () {
    const {myExoticPets} = useContext(Context)
    
  const pictureElements = myExoticPets.map((img) => (
         
         <Petimage key={img.id} img={img} /> 
             
     )
    )
     return (
         <>
         <div className="petGallery main">
            
             {pictureElements}
           
         </div>
         <Footer />
         </>
        
     )
}

export default ExoticPets