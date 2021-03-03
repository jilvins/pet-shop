import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../appContext"


function Navbar () {
    const {selectedItems} = useContext(Context)
    return (
        
        
        <div className="navbar">
            <h1 className="page-logo">Your pet shop</h1> 
            <Link to="/"><p>Home</p></Link>
            <Link to="/tradpets"><p>Traditional Pets</p></Link>
            <Link to="/exopets"><p>Exotic Pets</p></Link>
            <Link to={selectedItems.length>0?"/shoplist":"#"}>
            {selectedItems.length>0 ? <p className="shopping-cart" style={{color: "lightgreen"}}>Ready to proccede</p> : 
            <p className="shopping-cart" style={{color: "grey"}}>Empty cart</p>}
            </Link>
        </div>
    
    )

}


export default Navbar