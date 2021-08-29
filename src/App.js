import React, { useState, useEffect } from "react";

export default function App() {
    const [filmes, setFilmes] = useState([
        {
            nome: "Capitão América: O primeiro vingador",
            imagemUrl:
              "https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
        },
        {
            nome: "Capitã Marvel",
            imagemUrl:
              "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
        },
        {
            nome: "O incrivel Hulk",
            imagemUrl:
              "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
        }
    ]);

    const [nomeFilme, setNomeFilme] = useState("");
    const [imagemFilme, setImagemFilme] = useState("");
    const [editando, setEditando] = useState(false);
    const [indiceEditando, setIndiceEditando] = useState(null);

    useEffect(() => {
        if((indiceEditando !== null) && editando) {
            setNomeFilme(filmes[indiceEditando].nome)
            setImagemFilme(filmes[indiceEditando].imagemUrl)
        }
    }, [indiceEditando]);

    const handleNameChange = (e) => {
        setNomeFilme(e.target.value);
    }

    const handleImgChange = (e) => {
        setImagemFilme(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editando) {
            const filmesUpdate = filmes.map((filmes, indice) => {
                if(indiceEditando === indice) {
                    filmes.nome = nomeFilme;
                    filmes.imagemUrl = imagemFilme;
                }
                return filmes
            });
        setFilmes(filmesUpdate);

        setEditando(false);

        setIndiceEditando(null);
        } else {
            setFilmes([
                ...filmes,
                {
                    nome: nomeFilme,
                    imagemUrl: imagemFilme,
                }
            ]);
            setNomeFilme("");
            setImagemFilme("");
        };
    };

    const handleDelete = (indice) => {
        setFilmes(filmes.filter((filmes, indiceFilmes) => indice !== indiceFilmes))
    };

    return (
        <div>
            <h1>Bem-Vindo ao meu Projeto de React.</h1>
            <h2>Essa é minha lista de Jogos</h2>
            <ul>
                {filmes.map((filmes, indice) => (
                    <li key={indice}>
                        <p>
                            { filmes.nome }
                        </p>
                        <img src={filmes.imagemUrl}/>
                        <button type="button" onClick={() => {
                            setEditando(true);
                            setIndiceEditando(indice);
                        }}>Editar</button>
                        <button type="button" onClick={() => handleDelete(indice) }>Excluir</button>
                    </li>
                ))}
            </ul>
            <h2>Adição e edição de itens da lista</h2>
            <form onSubmit={handleSubmit}>
                <label>Digite o nome:</label>
                <input type="text" value={nomeFilme} onChange={handleNameChange}/>
                <br/>
                <label>Informe o link da imagem:</label>
                <input type="link" value={filmes.imagemFilme} onChange={handleImgChange}/>
                <button type="submit">Salvar</button>                
            </form>
        </div>
    )
};