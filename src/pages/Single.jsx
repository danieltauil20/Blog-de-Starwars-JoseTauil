import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../appContext";

const Single = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useContext(Context);

  const decodedName = decodeURIComponent(name);
  const isFavorite = favorites.includes(decodedName);


  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[-\s]/g, "") // quita espacios y guiones
      .replace(/[^a-z0-9]/g, ""); // limpia todo lo demás

 
  const images = {
    
    lukeskywalker: "/luke.webp",
    darthvader: "/Darth Vader.jpg",
    leiaorgana: "/Leia Organa.jpg",
    obiwankenobi: "/Obi Wan Kenobi.jpg",
    r2d2: "/R2-D2.jpg",
    c3po: "/C-3PO.jpg",
    owenlars: "/Owen Lars.jpg",
    beruwhitesunlars: "/Beru Whitesun lars.jpg",
    biggsdarklighter: "/Biggs Darklighter.jpg",

    
    sandcrawler: "/sandcrawler.jpg",
    snowspeeder: "/Snowspeeder.jpg",
    atst: "/AT-ST.jpg",
    sailbarge: "/Sail barge.jpg",
    stormivtwinpodcloudcar: "/Storm IV Twin-Pod cloud car.jpg",
    t16skyhopper: "/T-16 skyhopper.jpg",
    tiebomber: "/TIE bomber.jpg",
    tielnstrafighter: "/TIE-LN starfighter.jpg",
    x34landspeeder: "/X-34 landspeeder.jpg",

  
    tatooine: "/tatooine.webp",
    naboo: "/naboo.jpg",
    hoth: "/hoth.jpg",
    coruscant: "/coruscant.jpg",
    dagobah: "/dagobah.jpg",
    endor: "/endor.jpg",
    bespin: "/bespin.jpg",
    kamino: "/kamino.jpg",
    yaviniv: "/yaviniv.jpg",
    alderaan: "/alderaan.jpg",
  };

  const image = images[normalize(decodedName)] || "/default.webp";

  
  const bio = {
    // PERSONAJES
    "Luke Skywalker":
      "Un joven granjero que se convirtió en uno de los Jedi más poderosos de la galaxia.",
    "Darth Vader":
      "Antiguo Jedi que cayó al lado oscuro y sirvió al Emperador.",
    "Leia Organa":
      "Princesa y líder rebelde clave en la lucha contra el Imperio.",
    "Obi-Wan Kenobi":
      "Maestro Jedi sabio y mentor de Anakin y Luke.",
    "R2-D2":
      "Droide valiente que ha salvado la galaxia en múltiples ocasiones.",
    "C-3PO":
      "Droide de protocolo experto en comunicación.",
    "Owen Lars":
      "Granjero de Tatooine y tío adoptivo de Luke.",
    "Beru Whitesun Lars":
      "Tía de Luke, amable y protectora.",
    "Biggs Darklighter":
      "Piloto rebelde y amigo de la infancia de Luke.",

    
    "Sand Crawler":
      "Vehículo gigante de los Jawas usado para recolectar chatarra.",
    "Snowspeeder":
      "Vehículo rebelde usado en climas extremos como Hoth.",
    "AT-ST":
      "Caminante imperial ligero usado en combate terrestre.",
    "Sail barge":
      "Nave de transporte de Jabba el Hutt.",
    "Storm IV Twin-Pod cloud car":
      "Vehículo de patrulla aérea en Bespin.",
    "T-16 skyhopper":
      "Vehículo aéreo usado para entrenamiento en Tatooine.",
    "TIE bomber":
      "Nave imperial diseñada para bombardeos.",
    "TIE-LN starfighter":
      "Caza imperial rápido y ágil.",
    "X-34 landspeeder":
      "Vehículo terrestre usado por Luke en Tatooine.",

    
    "Tatooine":
      "Planeta desértico de dos soles, hogar de Luke.",
    "Naboo":
      "Planeta pacífico con paisajes hermosos.",
    "Hoth":
      "Planeta helado donde la Rebelión tuvo una base.",
    "Coruscant":
      "Centro político de la galaxia.",
    "Dagobah":
      "Planeta pantanoso donde Yoda vivió.",
    "Endor":
      "Hogar de los Ewoks.",
    "Bespin":
      "Planeta gaseoso donde se encuentra Ciudad Nube.",
    "Kamino":
      "Planeta oceánico donde se creó el ejército clon.",
    "Yavin IV":
      "Base rebelde ubicada en una luna selvática.",
    "Alderaan":
      "Planeta natal de Leia destruido por la Estrella de la Muerte.",
  };

  return (
    <div className="container mt-5 starwars-bg">

      
      <button className="btn btn-back mb-4" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="row">

        
        <div className="col-md-5">
          <img
            src={image}
            alt={decodedName}
            className="img-fluid starwars-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/default.webp";
            }}
          />
        </div>

        
        <div className="col-md-7 d-flex flex-column justify-content-center">

          <h1 className="starwars-title">{decodedName}</h1>

          <button
            className="btn btn-starwars mb-3"
            onClick={() =>
              isFavorite
                ? removeFavorite(decodedName)
                : addFavorite(decodedName)
            }
          >
            {isFavorite ? "★ Quitar de favoritos" : "☆ Añadir a favoritos"}
          </button>

          <p className="starwars-text">
            {bio[decodedName] ||
              "Este elemento forma parte del universo de Star Wars."}
          </p>

          <hr />

          <h5 className="starwars-title">Detalles</h5>
          <p className="starwars-text">
            Este personaje, planeta o vehículo ha tenido un impacto importante en la galaxia.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Single;