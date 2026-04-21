import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Single = () => {
  const { uid, type } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.result);
      })
      .catch((err) => console.error(err));
  }, [uid, type]);


  if (!details) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-warning"></div>
        <p className="starwars-title mt-3">Cargando...</p>
      </div>
    );
  }

  const normalize = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]/g, "");

  const images = {
    lukeskywalker: "/luke.webp",
    darthvader: "/Darth Vader.jpg",
    leiaorgana: "/Leia Organa.jpg",
    obiwankenobi: "/Obi Wan Kenobi.jpg",
    r2d2: "/R2-D2.jpg",
    c3po: "/C-3PO.jpg",
    owenlars: "/Owen Lars.jpg",
    beruwhitesunlars: "/Beru Whitesun lars.jpg",
    r5d4: "/r5d4.jpg",
    biggsdarklighter: "/Biggs Darklighter.jpg",
    sandcrawler: "/sandcrawler.jpg",
    snowspeeder: "/Snowspeeder.jpg",
    atat: "/AT-AT.jpg",
    atst: "/atst.jpg",
    stormivtwinpodcloudcar: "/stormivtwinpodcloudcar.jpg",
    sailbarge: "/sailbarge.jpg",
    tiebomber: "/TIE bomber.jpg",
    tielnstarfighter: "/tielnstarfighter.jpg",
    t16skyhopper: "/T-16 skyhopper.jpg",
    tielnstarfighter: "/tielnstrafighter.jpg",
    x34landspeeder: "/X-34 landspeeder.jpg",
    imperialspeederbike: "/imperialspeederbike.webp",
    tatooine: "/tatooine.webp",
    naboo: "/naboo.jpg",
    hoth: "/hoth.jpg",
    coruscant: "/coruscant.jpg",
    dagobah: "/dagobah.jpg",
    endor: "/endor.jpg",
    bespin: "/bespin.jpg",
    kamino: "/kamino.jpg",
    alderaan: "/alderaan.jpg",
    yaviniv: "/yaviniv.jpg",
  };

  const image =
    images[normalize(details.properties.name)] || "/default.webp";

  return (
    <div className="container mt-5 starwars-bg">

      <button className="btn btn-back mb-4" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="row align-items-center">


        <div className="col-md-5 text-center">
          <img
            src={image}
            alt={details.properties.name}
            className="img-fluid starwars-img"
          />
        </div>


        <div className="col-md-7">

          <h1 className="starwars-title">
            {details.properties.name}
          </h1>

          <div className="starwars-text">

            {type === "people" && (
              <>
                <p>Altura: {details.properties.height}</p>
                <p>Peso: {details.properties.mass}</p>
                <p>Género: {details.properties.gender}</p>
                <p>Color de ojos: {details.properties.eye_color}</p>
                <p>Año de nacimiento: {details.properties.birth_year}</p>
              </>
            )}

            {type === "vehicles" && (
              <>
                <p>Modelo: {details.properties.model}</p>
                <p>Fabricante: {details.properties.manufacturer}</p>
                <p>Clase: {details.properties.vehicle_class}</p>
                <p>Velocidad: {details.properties.max_atmosphering_speed}</p>
                <p>Tripulación: {details.properties.crew}</p>
              </>
            )}

            {type === "planets" && (
              <>
                <p>Clima: {details.properties.climate}</p>
                <p>Población: {details.properties.population}</p>
                <p>Terreno: {details.properties.terrain}</p>
                <p>Gravedad: {details.properties.gravity}</p>
                <p>Diámetro: {details.properties.diameter}</p>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Single;