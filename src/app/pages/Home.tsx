import { Cabecario } from "../components/Cabecario/Cabecario";
import { Carrosel } from "../components/Carrosel/Carrosel";
import img_carrosel from "../assets/img/img_carrosel.webp"
import img_categoria from "../assets/img/satapo.webp"
import { Categoria } from "../components/Categoria/Categoria";

const img = [
    img_carrosel,
    img_carrosel,
    img_carrosel
]
const img2 = [
    img_categoria,
    img_categoria,
    img_categoria,
    img_categoria,
    img_categoria,
    img_categoria,
    img_categoria
]
export const Home:React.FC = () => {
    return(
        <>
            <Cabecario nomeEmpresa="lojinha VIP"></Cabecario>
            <Carrosel img={img}></Carrosel>
            <Categoria categorias={img2}></Categoria>
        </>
    );
}