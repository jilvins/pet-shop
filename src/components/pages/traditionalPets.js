import React, {useContext} from "react"
import Petimage from "../petImg"
import {Context} from "../../appContext"
import Footer from "../footer"

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
         <Footer />
         </>
        
     )
}

export default TraditionalPets