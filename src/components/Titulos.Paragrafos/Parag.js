import React from "react";
import "./Parag.css";

export default function Obs(props) {
    return <p>{props.texto}</p>
}

export function Sinopse() {
    return (
        <div>
        <Obs texto=""/>
        </div>
    )
}