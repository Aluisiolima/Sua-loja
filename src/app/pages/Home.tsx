import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cabecario } from "../components/Cabecario/Cabecario";
import { fetchApi } from "../utils/req";
import { Catalago } from "../components/Catalago/Catalago";
import { Empresa } from "../types/empresa.types";

export const Home: React.FC = () => {
    const { id } = useParams();
    const [date, setDate] = useState<Empresa | null>(null);

    useEffect(() => {
        const getDates = async () => {
            try {
                const result = await fetchApi(null,"GET",`${process.env.REACT_APP_LINK_API}/empresa/${id}/name`);
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
            <Cabecario data={date}></Cabecario>
            <Catalago></Catalago>
        </div>
    );
}