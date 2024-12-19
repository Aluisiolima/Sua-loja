
interface CabecarioPros {
    nomeEmpresa : string;
}

export const Cabecario:React.FC<CabecarioPros> = ({nomeEmpresa}) => {
    return(
        <nav className="navbar bg-dark p-2">
            <div className="container">
                <h1 className="text-light">{nomeEmpresa}</h1>
                <button className="btn btn-outline-light"><i className="bi bi-search"></i></button>
            </div>
        </nav>
    );
}