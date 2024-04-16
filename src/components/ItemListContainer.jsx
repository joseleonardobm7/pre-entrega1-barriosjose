const ItemListContainer = ({ saludo }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3> {saludo} </h3>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
