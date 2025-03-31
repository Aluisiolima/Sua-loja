import { Empresa } from "../../types/empresa.types";

export const Cabecario: React.FC<{ data: Empresa | null }> = ({ data }) => {
  const icons = [
    { key: "whatsapp", className: "bi bi-whatsapp", prefix: "https://wa.me/" },
    { key: "facebook", className: "bi bi-facebook", prefix: "https://www.facebook.com/" },
    { key: "instagram", className: "bi bi-instagram", prefix: "https://instagram.com/" },
  ];

  return (
    <nav className="navbar bg-dark p-2">
      <div className="container flex items-center justify-between">
        <h1 className="text-light transition-all duration-300 opacity-100 scale-100">
          {data?.nome || "Carregando..."}
        </h1>
        <div>
          {icons.map(({ key, className, prefix }) => {
            const url = data?.[key as keyof Empresa];
            if (!url) return null;
            return (
              <a key={key} href={`${prefix}${url}`} target="_blank" rel="noopener noreferrer">
                <i className={`${className} text-light m-2 fs-2`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
