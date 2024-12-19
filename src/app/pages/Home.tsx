import { Cabecario } from "../components/Cabecario/Cabecario";
import { Carrosel } from "../components/Carrosel/Carrosel";
import img_carrosel from "../assets/img/img_carrosel.webp"

const img = [
    img_carrosel,
    img_carrosel,
    img_carrosel
]
export const Home:React.FC = () => {
    return(
        <>
            <Cabecario nomeEmpresa="lojinha VIP"></Cabecario>
            <Carrosel img={img}></Carrosel>
        </>
    );
}