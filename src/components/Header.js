import React from "react"
import {Link} from "react-router-dom"

function Header () {
    return (
        <header>
            <Link to="/"><h1>Your pet shop</h1></Link> 
        </header>
    )

}


export default Header