import React from "react"
import {Link} from "react-router-dom"

function Navbar () {
    return (
        <Navbar class="navbar">
            <Link to="/"><p>Home</p></Link>
            <Link to="/tradpets"><p>Traditional Pets</p></Link>
            <Link to="/exopets"><p>Exotic Pets</p></Link>

        </Navbar>
    )

}


export default Navbar