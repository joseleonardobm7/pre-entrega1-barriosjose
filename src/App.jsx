import logo from "./assets/images/logo.png";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 bg-black text-center">
          <a href="#">
            <img src={logo} alt="Logotipo" width={320} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
