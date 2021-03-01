import React, {useContext} from 'react'
import {Context} from "../../appContext"
import {useHistory} from 'react-router-dom'

function Pet () {
    const {allPets, singlePet} = useContext(Context)
    let previousPage = useHistory();
    return (
        allPets.filter(onePet => onePet.id === singlePet).map(onePet => (
            <div className="pet" key={onePet.id}>
                <img src={onePet.picture} alt="animal" className="petImg"/>
               <p>{onePet.name}</p>
               <p>{onePet.price}</p>
               <p><em>More about this pet:</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sem. Proin tempus commodo dui non vulputate. Quisque felis eros, pharetra a porttitor eu, hendrerit vitae quam. Nam at ullamcorper leo, ac vestibulum mi. Etiam eu finibus justo. Nam gravida purus metus, eu suscipit justo fringilla id. Donec nec nisl vitae ipsum luctus efficitur. Donec arcu diam, laoreet vitae urna ac, tempus consequat mauris. Curabitur maximus elementum lorem in laoreet. Cras vulputate ac metus ac porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus dui. Morbi pretium facilisis augue, vitae varius orci malesuada in. Integer euismod ut augue at pharetra. Maecenas est massa, iaculis a neque quis, mollis rutrum nisl.</p>
               <button onClick={() => previousPage.goBack()}>Back</button>
        </div>
        )

        )
        
    )
}

export default Pet