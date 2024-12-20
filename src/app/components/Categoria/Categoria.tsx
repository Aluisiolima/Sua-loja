import "./CategoriaStyle.css";

type CategoriaData = {
    caminho: string;
    nome : string;
};

type CategoriaPros = {
    data : CategoriaData[];
};

export const Categoria:React.FC<CategoriaPros>  = ({data}) => {
    if (data === null) {
        return null;
    }
    return (
        <div className="container text-center mt-2">
            <p className="row text-start">Categoria:</p>
            <div className="d-flex overflow-auto card-scroll">
                {
                    data.map((intem, index) => (
                        <div className="col-3">
                            <div className="card mx-2 text-center">
                                <img src={intem.caminho} alt={ `Categoria de n°${index}`} className="card-img" />
                                <div className="card-body p-0 m-0">
                                    <p className="p-0 m-0 fs-5">{intem.nome}</p>
                                </div> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
