import "./Carrosel.css";

interface ImgCarrosel {
    img : string[];
}

export const Carrosel:React.FC<ImgCarrosel> = ({img}) => {
    return(
        <div className="container mt-3">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    {
                        img.map((imagePath, index)  => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img src={imagePath} className="d-block w-100" alt="..." />
                            </div>
                        ))
                    } 
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}