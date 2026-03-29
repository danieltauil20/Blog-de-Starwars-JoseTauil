import { useContext } from "react";
import { Context } from "../appContext";

const Home = () => {
  const { people, vehicles, planets } = useContext(Context);

  const getId = (url) => {
    if (!url) return null;
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <div className="container">
      <h1>Star Wars</h1>

      <div className="d-flex overflow-auto">
        {people.map((item, index) => (
          <div key={index} className="card m-2" style={{ minWidth: "200px" }}>

            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${getId(item.url)}.jpg`}
              className="card-img-top"
              style={{ height: "300px", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = "https://placehold.co/200x300?text=No+Image";
              }}
            />

            <div className="card-body">
              <h5>{item.name}</h5>
            </div>

          </div>
        ))}
      </div>

      <h2>Vehiculos</h2>
      <div className="d-flex overflow-auto">
        {vehicles.map((item, index) => (
          <div key={index} className="card m-2 p-2">
            {item.name}
          </div>
        ))}
      </div>

      <h2>Planetas</h2>
      <div className="d-flex overflow-auto">
        {planets.map((item, index) => (
          <div key={index} className="card m-2 p-2">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;