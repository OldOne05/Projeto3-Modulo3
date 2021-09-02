import React from "react";
import Titulo from "./components/Titulos.Sub/Titulo";
import Sub from "./components/Titulos.Sub/Sub";
import Paragrafos from "./components/Paragrafos/Lista";
import ImgeBotao from "./components/Img.e.botão/Img.e.botao";

export default function App(){
    return (
        <div>
            <div><Titulo/></div>
            <div><Sub/></div>
            <div><Paragrafos texto="O trabalho consite em"/></div>
            <div><Paragrafos texto="uma lista dos melhores jogos (na minha opinião),"/></div>
            <div><Paragrafos texto="e você pode adicionar seus jogos também."/></div>
            <div><ImgeBotao /></div>
        </div>
    )
}