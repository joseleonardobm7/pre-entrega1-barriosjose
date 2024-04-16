import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.webp";
import product4 from "../assets/images/product4.jpeg";

const Carousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={product1} className="d-block w-100" alt="product1" />
              </div>
              <div className="carousel-item">
                <img src={product2} className="d-block w-100" alt="product2" />
              </div>
              <div className="carousel-item">
                <img src={product3} className="d-block w-100" alt="product3" />
              </div>
              <div className="carousel-item">
                <img src={product4} className="d-block w-100" alt="product4" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
