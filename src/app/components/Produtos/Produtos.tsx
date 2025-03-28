import { useState } from "react";
import img from "../../assets/img/images.png";

type Produto = {
    id: number;
    nome: string;
    valor: number;
    desconto: number;
    estoque: number;
    imgPath: string;
};

type ProdutosProps = {
    data: Produto[] | null;
};

const ProdutoCard: React.FC<{ produto: Produto }> = ({ produto }) => {
    const [imageSrc, setImageSrc] = useState(produto.imgPath || img);

    return (
        <div className="card col-5 col-lg-3 col-xl-2 m-auto  mb-4 bg-light  text-light shadow">
            <img
                src={imageSrc}
                alt={produto.nome}
                className="card-img"
                loading="lazy"
                onError={() => {setImageSrc(img)}} // Define a imagem de fallback
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

export const Produtos: React.FC<ProdutosProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <p className="text-center">Nenhum produto disponível.</p>;
    }

    return (
        <div className="container">
            <div className="row mt-2">
                {data.map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    );
};
