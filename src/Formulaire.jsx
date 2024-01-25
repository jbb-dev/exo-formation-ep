import { useState } from "react"

export const Formulaire = () => {

    const [ prenom, setPrenom ] = useState("");

    const changePrenom = (evenement) => {
        console.log('changePrenom => ', evenement.target.value)
        setPrenom(evenement.target.value)
    }

    return (
        <div>
            <label>Prénom :</label>
            <input 
                type="text" 
                value={prenom} 
                onChange={event => changePrenom(event)}
            />
        </div>
    )
}