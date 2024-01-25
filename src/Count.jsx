import { useEffect, useState } from "react";
import './Count.css';

export const Count = () => {

    const [ count, setCount ] = useState(0);
    const [ wantChange, setWantChange ] = useState(false);

    const changeColor = () => {
        setWantChange(!wantChange)
    }

    const add = () => {
        setCount(count + 1)
    }

    const substract = () => {
        setCount(count -1)
    }

    const reset = () => {
        setCount(0)
    }

    useEffect(() => {
        console.log('USE EFFECT')
    }, [count])

    return (
        <div className={wantChange ? "container-active" : "container-passive"}>
            <button onClick={changeColor}>Change color</button>
            <h1>LA valeur de mon compteur = {count}</h1>
            <button onClick={add}>Ajouter</button>
            <p>Le score est : {count}</p>
            <button onClick={substract}>Diminuer</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}