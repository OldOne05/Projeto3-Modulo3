import Texto from "../Titulos.Paragrafos/Titulo";
import "./Img.e.botao.css";

export default function Botao(props) {
    return <button><a href={props.texto} target="blank">Visualizar</a></button>
}

export function botao() {
    return(
        <div>
            <Botao href=""/>
        </div>
    )
}