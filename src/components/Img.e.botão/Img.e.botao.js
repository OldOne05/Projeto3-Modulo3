import React, { useState } from "react";
import "./Img.css";

export default function ImgeBotao() {
  const [jogos, setJogos] = useState([
    {
      nome: "Dark Souls",
      imagemUrl:
        "https://cdn-products.eneba.com/resized-products/BjdEY6u_350x200_1x-0.jpg",
    },
    {
      nome: "The Last Of Us Parte 2",
      imagemUrl:
        "https://m.media-amazon.com/images/I/71UDXCGb8cL._AC_SY679_.jpg",
    },
    {
      nome: "Red Dead Redemption 2",
      imagemUrl:
        "https://assets.mycast.io/posters/red-dead-redemption-2-series-fan-casting-poster-120912-medium.jpg?1628378792",
    },
  ]);

  const [nomeJogo, setNomeJogo] = useState("");
  const [imagemJogo, setImagemJogo] = useState("");

  const handleNameChange = (e) => {
    setNomeJogo(e.target.value);
  };

  const handleImgChange = (e) => {
    setImagemJogo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      setJogos([
        ...jogos,
        {
          nome: nomeJogo,
          imagemUrl: imagemJogo,
        },
      ]);
      setNomeJogo("");
      setImagemJogo("");
    }
  };

  const handleDelete = (indice) => {
    setJogos(jogos.filter((jogos, indiceJogos) => indice !== indiceJogos));
  };

  return (
    <div>
      {jogos.map((jogos, indice) => (
        <ul className="li" key={indice}>
          <p className="nome">{jogos.nome}</p>
          <img className="img" src={jogos.imagemUrl} />
          <button type="button" onClick={() => handleDelete(indice)}>
            Excluir
          </button>
        </ul>
      ))}
      <div className="form">
        <h2>Adição de itens da lista</h2>
        <form onSubmit={handleSubmit}>
          <label>Digite o nome:</label>
          <input type="text" value={nomeJogo} onChange={handleNameChange} />
          <br />
          <label>Informe o link da imagem:</label>
          <input
            type="link"
            value={jogos.imagemJogo}
            onChange={handleImgChange}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}
