import React from "react"
import {Link} from "react-router-dom"

function Navbar () {
    return (
        <div className="navbar">
            <Link to="/"><p>Home</p></Link>
            <Link to="/tradpets"><p>Traditional Pets</p></Link>
            <Link to="/exopets"><p>Exotic Pets</p></Link>
            <Link to="/shoplist"><p>Shopping list</p></Link>

        </div>
    )

}


export default Navbar