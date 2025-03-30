import { useState } from "react";

type CabecarioProps = {
  nomeEmpresa: string;
  
};

export const Cabecario: React.FC<CabecarioProps> = ({ nomeEmpresa }) => {
  const [showSearch, setShowSearch] = useState(false);

//   function search(data:) {
//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }
  return (
    <nav className="navbar bg-dark p-2">
      <div className="container flex items-center justify-between">

        {!showSearch && (
          <h1 className="text-light transition-all duration-300 opacity-100 scale-100">
            {nomeEmpresa}
          </h1>
        )}

        {showSearch && (
          <input
            type="text"
            className="form-control w-75 opacity-100 scale-100"
            placeholder="Buscar..."
            autoFocus
          />
        )}

        <button className="btn btn-outline-light" onClick={() => setShowSearch(!showSearch)}>
          <i className={`bi ${showSearch ? "bi-x" : "bi-search"}`}></i>
        </button>
      </div>
    </nav>
  );
};
