import { Cabecario } from "../components/Cabecario/Cabecario";
import { Carrosel } from "../components/Carrosel/Carrosel";
import img_carrosel from "../assets/img/img_carrosel.webp"
import img_categoria from "../assets/img/satapo.webp"
import { Categoria } from "../components/Categoria/Categoria";
import { Produtos } from "../components/Produtos/Produtos";

const img = [
    img_carrosel,
    img_carrosel,
    img_carrosel
];
const img2 = [
    {
        caminho : img_categoria,
        nome : "sapato"
    },
    
]
const Produto = [
    {
        nomeCategoria : "sapato",
        produtos : [
           {
            imgPath : img_categoria,
            nome : "sapato",
            id : 1,
            preco : 30.99
           },
           {
            imgPath : img_categoria,
            nome : "sapato",
            id : 1,
            preco : 30.99
           },
           {
            imgPath : img_categoria,
            nome : "sapato",
            id : 1,
            preco : 30.99
           },
        ]
        
    },
    
    
]
export const Home:React.FC = () => {
    return(
        <div className="h-100">
            <Cabecario nomeEmpresa="lojinha VIP"></Cabecario>
            <Carrosel img={img}></Carrosel>
            <Categoria data={img2}></Categoria>
            <Produtos data={Produto}></Produtos>
        </div>
    );
}