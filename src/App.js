import React from "react";
import Titulo from "./components/Titulos.Sub/Titulo";
import Sub from "./components/Titulos.Sub/Sub";
import Paragrafos from "./components/Paragrafos/Parag";

export default function App(){
    return (
        <div>
            <div><Titulo/></div>
            <div><Sub/></div>
            <div><Paragrafos texto="O trabalho consite em"/></div>
            <div><Paragrafos texto="em uma lista"/></div>
            <div><Paragrafos texto="dos melhores jogos (na minha opinão)."/></div>
        </div>
    )
}