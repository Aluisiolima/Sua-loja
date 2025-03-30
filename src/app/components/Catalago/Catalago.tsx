import { useEffect, useState } from "react";
import { CategoriaType } from "../../types/categoria.types";
import { fetchApi } from "../../utils/req";
import { useParams } from "react-router-dom";
import { Categoria } from "../Categoria/Categoria";


export const Catalago: React.FC = () => {
    const [date, setDate] = useState<CategoriaType[] | null>(null);
    const { id } = useParams();
    
    useEffect(() => {
        const getDates = async () => {
            try {
                const result = await fetchApi(null,"GET",`${process.env.REACT_APP_LINK_API}/categorias/pegar/${id}`);
                setDate(result);
            } catch (error) {
                console.error(error)
            }
        };

        getDates();
    }, [id]);
    
    if (!date || date.length === 0) {
        return <p className="text-center">Nenhum produto disponível.</p>;
    }

    return (
        <div className="container">
            <div className="row mt-2">
                {date.map((categoria) => (
                   <Categoria date={categoria}></Categoria>
                ))}
            </div>
        </div>
    );
}