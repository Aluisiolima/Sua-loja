import "./CategoriaStyle.css";
import { CategoriaType } from "../../types/categoria.types";
import { ProdutoCard  } from "../Produtos/Produtos";

type CategoriaPros = {
    date : CategoriaType
}
export const Categoria:React.FC<CategoriaPros>  = ({ date }) => {

    if (date.produtos.length === 0) {
        return <p className="text-center">Nenhum produto disponível.</p>;
    }

    return (
        <div className="container">
            <h1>{date.categoria}:</h1>
            <div className="row mt-2">
                {
                    date?.produtos.map((produto) => (
                        <ProdutoCard key={produto.id} produto={produto} />
                    ))
                }
            </div>
        </div>
    );
};
