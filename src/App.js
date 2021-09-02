import React from "react";
import Titulo from "./components/Titulos.Paragrafos/Titulo";
import Obs from "./components/Titulos.Paragrafos/Parag";
import Imagem from "./components/Img.e.Botão/Img";
import Botao from "./components/Img.e.Botão/botao";

export default function App(){
  const jogos = [
    {
      nome: "Dark Souls",
      imagemUrl:
        "https://cdn-products.eneba.com/resized-products/BjdEY6u_350x200_1x-0.jpg",
      loja: "https://www.amazon.com.br/s?k=dark+souls&i=videogames&ref=nb_sb_ss_ts-doa-p_1_5",
      genero: "RPG eletrônico de ação"
    },
    {
      nome: "The Last Of Us Parte 2",
      imagemUrl:
        "https://m.media-amazon.com/images/I/71UDXCGb8cL._AC_SY679_.jpg",
      loja: "https://www.amazon.com.br/s?k=the+last+of+us+part+2&i=videogames&ref=nb_sb_ss_ts-doa-p_1_9",
      genero: "Furtividade, Survival horror"
    },
    {
      nome: "Red Dead Redemption 2",
      imagemUrl:
        "https://assets.mycast.io/posters/red-dead-redemption-2-series-fan-casting-poster-120912-medium.jpg?1628378792",
      loja: "https://www.amazon.com.br/s?k=red+dead+redemption+2&i=videogames&ref=nb_sb_ss_ts-doa-p_1_4",
      genero: "Ação-aventura"
    },
    {
      nome: "God of War",
      imagemUrl:
        "https://http2.mlstatic.com/D_NQ_NP_972276-MLB26561922936_122017-O.jpg",
      loja: "https://www.amazon.com.br/s?k=god+of+war&i=videogames&ref=nb_sb_ss_ts-doa-p_1_3",
      genero: "Ação-aventura"
    },
    {
      nome: "Bloodborne",
      imagemUrl:
        "https://upload.wikimedia.org/wikipedia/pt/2/29/Bloodborne_capa.png",
      loja: "https://www.amazon.com.br/s?k=bloodborne&i=videogames&ref=nb_sb_ss_ts-doa-p_1_5",
      genero: "RPG eletrônico de ação, Survival horror"
    },
    {
      nome: "Spider Man",
      imagemUrl:
        "https://assets.mycast.io/posters/spider-man-ps4-fan-casting-poster-3154-medium.jpg?1563891847",
      loja: "https://www.amazon.com.br/s?k=spiderman+ps4&i=videogames&__mk_pt_BR=ÅMÅŽÕÑ&ref=nb_sb_noss_2",
      genero: "Ação-aventura"
    },
  ];

  return (
    <div>
      <h1 className="subTitle">Esse é o meu projeto em React</h1>
      {jogos.map((jogos) => (
        <ul className="li">
          <Titulo texto={jogos.nome}/>
          <Obs texto={jogos.genero}/>
          <Imagem texto={jogos.imagemUrl}/>
          <Botao href={jogos.loja}/>
        </ul>
      ))}
    </div>
  );
}