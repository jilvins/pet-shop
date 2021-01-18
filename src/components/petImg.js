import React from "react"


function Petimage({img}) {
    return (
        <div className="">
            <p>{img.name}</p>
            <img src={img.picture} alt="animal"/>
            <p>{img.description}</p>
            <p>{img.price} Euros</p>
        </div>
    )
}

export default Petimage
