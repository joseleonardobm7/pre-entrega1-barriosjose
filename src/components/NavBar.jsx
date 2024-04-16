import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 bg-black text-center">
          <a href="#">
            <img src={logo} alt="Logotipo" width={320} />
          </a>
        </div>
      </div>
      <nav class="navbar navbar-expand-md bg-light bgColorPrimary sticky-top">
        <div class="container-fluid d-flex justify-content-center">
          <a class="navbar-brand" href="#">
            <img
              class="navbar-options-selector"
              data-value="allProducts"
              src="assets/img/logo.png"
              alt="Logo La Tiendita"
            />
          </a>
          <h1>La Tiendita de la Esquina</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              id="nav-bar-options-container"
              class="navbar-nav ms-auto mb-2 mb-lg-0"
            ></ul>
            <div class="search-and-icons">
              <form class="d-flex justify-content-end mb-2 me-4" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  aria-label="Search"
                  style="max-width: 450px"
                  id="search-input"
                />
              </form>
              <div class="user-icons d-flex mb-2 align-items-center">
                <div id="user-options-container" class="dropdown">
                  <button
                    class="btn bgColorSecondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="greeting-user"
                  >
                    Hola Usuario
                  </button>
                  <ul class="dropdown-menu" id="user-options-list"></ul>
                </div>
                <div id="account-add" class="account-add">
                  <a class="text-decoration-none" href="#">
                    <i
                      class="bi bi-person-add text-black"
                      title="Crear un Usuario"
                    ></i>
                  </a>
                </div>
                <div id="account" class="account">
                  <a class="text-decoration-none" href="#">
                    <i
                      class="bi bi-person text-black"
                      title="Iniciar Sesión"
                    ></i>
                  </a>
                </div>
                <div class="wishlist position-relative">
                  <a class="text-decoration-none" href="#">
                    <i
                      class="bi bi-heart text-black navbar-options-selector"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Favoritos"
                      data-value="wishList"
                    ></i>
                  </a>
                  <span
                    class="badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style="font-size: 0.4em; width: 60%"
                    id="wishlist-qty"
                  >
                    0<span class="visually-hidden"> articles in wishlist </span>
                  </span>
                </div>
                <div class="cart position-relative">
                  <a class="text-decoration-none" href="#">
                    <i
                      class="bi bi-cart3 text-black navbar-options-selector"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Ver Carrito"
                      data-value="shoppingCart"
                    ></i>
                  </a>
                  <span
                    class="badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style="font-size: 0.4em; width: 60%"
                    id="shopping-cart-qty"
                  >
                    0<span class="visually-hidden"> articles in cart </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="contact-info d-flex justify-content-end align-items-center pb-2">
              <span class="pe-2"> Soporte: </span>
              <div class="whatsapp pe-2">
                <i class="bi bi-whatsapp"></i>
              </div>
              <div class="pe-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B56931753580&text&type=phone_number&app_absent=0"
                  class="text-decoration-none"
                >
                  Whatsapp
                </a>
              </div>
              <div class="mailto pe-2">
                <i class="bi bi-envelope-at"></i>
              </div>
              <div class="pe-2">
                <a
                  href="mailto:joselbarrios317@gmaill.com"
                  class="text-decoration-none"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
