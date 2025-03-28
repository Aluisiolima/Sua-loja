import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cabecario } from "../components/Cabecario/Cabecario";
// import { Categoria } from "../components/Categoria/Categoria";
import { Produtos } from "../components/Produtos/Produtos";
import fetchApi from "../utils/req";

type produto = {
    id:number,
    nome:string,
    valor:number,
    desconto:number,
    estoque:number,
    imgPath:string
}

interface Empresa {
    id: number,
    nome: string,
    endereco: string,
    facebook:string | null,
    instagram:string | null,
    status:string,
    whatsapp:string,
    produtos: produto[],
}

export const Home: React.FC = () => {
    const { id } = useParams();
    const [date, setDate] = useState<Empresa | null>(null);

    useEffect(() => {
        const getDates = async () => {
            try {
                const result = await fetchApi(null,"GET",`${process.env.REACT_APP_LINK_API}/empresa/${id}`);
                setDate(result);
            } catch (error) {
                console.error(error)
            }
        };

        getDates();
    }, [id]);

    if (date?.status === "desativado") {
        return <h1> Your service is off  </h1>
    }

    return (
        <div className="h-100">
            <Cabecario nomeEmpresa={date?.nome || "Carregando...."}></Cabecario>
            
            {/* <Categoria data={img2}></Categoria> */}
            <Produtos data={date?.produtos || null}></Produtos>
        </div>
    );
}