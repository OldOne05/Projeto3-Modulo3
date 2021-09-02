import React from "react";
import "./Titulo.css";

export default function Texto(props) {
    return <p className="parag">{props.texto}</p>
};

export function Titulo(){
    return(
      <div>
        <Texto texto=""/>
        </div>
    );
};