import { useState } from "react";
import img from "../../assets/img/images.png";
import { Produto } from "../../types/produto.types";

export const ProdutoCard: React.FC<{ produto: Produto }> = ({ produto }) => {
    const [imageSrc, setImageSrc] = useState(produto.imgPath || img);

    return (
        <div className="card col-5 col-lg-4 col-xl-3 m-auto  mb-4 bg-light  text-light shadow">
            <img
                src={imageSrc}
                alt={produto.nome}
                className="card-img"
                loading="lazy"
                onError={() => {setImageSrc(img)}} 
            />
            <div className="card-body p-2 text-center">
                <p className="card-text">{produto.nome}</p>
                <h4 className="card-text text-dark">
                    R$ {(produto.valor - produto.desconto).toFixed(2)}
                </h4>
                {produto.desconto > 0 && (
                    <p className="text-danger">
                        <s>R$ {produto.valor.toFixed(2)}</s>
                    </p>
                )}
                <p className="text-muted">Estoque: {produto.estoque}</p>
            </div>
        </div>
    );
};
