
type Produto = {
    id : number;
    nome : string;
    preco : number;
    imgPath : string;
};

type ProdutosData = {
    nomeCategoria : string;
    produtos : Produto[];
};

type ProdutosPros = {
    data : ProdutosData[];
};

export const Produtos:React.FC<ProdutosPros> = ({data}) => {
    return(
        <div className="container">
            {
                data.map((intem) => (
                    <div className="row">
                        <h3>{intem.nomeCategoria}:</h3>
                    {
                        intem.produtos.map((intem) => (
                            <div className="card col-5 col-lg-3 col-xl-2 m-auto mb-4 bg-dark text-light shadow">
                                <img src={intem.imgPath} alt={intem.nome}  className="card-img"/>
                                <div className="card-body p-0 m-0" >
                                    <p className="card-text">{intem.nome}</p>
                                    <h3 className="card-text">{intem.preco}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                ))
            }
           
        </div>
    );
};