import React from "react";
import "./Parag.css";

export default function Texto(props) {
    return <p className="parag">{props.texto}</p>
};

export function Paragrafos(){
    return(
      <div>
        <Texto texto=""/>
        </div>
    );
};