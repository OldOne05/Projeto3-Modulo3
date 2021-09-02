import React from "react";
import "./Img.e.botao.css";

export default function Imagem(props) {
  return <img className="parag" src={props.texto}></img>
};

export function Img(){
  return(
    <div>
      <Img texto=""/>
      </div>
  );
};
