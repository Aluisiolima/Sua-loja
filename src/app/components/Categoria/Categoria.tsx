import "./CategoriaStyle.css";

interface CategoriaPros {
    categorias : string[];
}

export const Categoria:React.FC<CategoriaPros>  = ({categorias}) => {
    return (
        <div className="container text-center mt-2">
            <p className="row text-start">Categoria:</p>
            <div className="d-flex overflow-auto card-scroll">
                {
                    categorias.map((imgCatergoria, index) => (
                        <div className="col-2">
                            <div className="card mx-2 text-center" style={{ minWidth: '150px' }}>
                                <img src={imgCatergoria} alt={ `Categoria de n°${index}`} className="card-img" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
