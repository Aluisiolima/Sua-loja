
interface CabecarioPros {
    nomeEmpresa : string;
}

export const Cabecario:React.FC<CabecarioPros> = ({nomeEmpresa}) => {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <h1>{nomeEmpresa}</h1>
                <button className="btn btn-outline-primary"><i className="bi bi-search"></i></button>
            </div>
        </nav>
    );
}