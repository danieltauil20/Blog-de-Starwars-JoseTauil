import { useContext } from "react";
import { Context } from "../appContext";
import Card from "./Card";

const Home = () => {

  const { people, vehicles, planets } = useContext(Context);

  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[-\s]/g, "")
      .replace(/[^a-z0-9]/g, "");

  const personajesImages = {
    lukeskywalker: "/luke.webp",
    darthvader: "/Darth Vader.jpg",
    leiaorgana: "/Leia Organa.jpg",
    obiwankenobi: "/Obi Wan Kenobi.jpg",
    r2d2: "/R2-D2.jpg",
    c3po: "/C-3PO.jpg",
    owenlars: "/Owen Lars.jpg",
    beruwhitesunlars: "/Beru Whitesun lars.jpg",
    r5d4: "/R5-D4.jpg",
    biggsdarklighter: "/Biggs Darklighter.jpg",
  };

  const vehiculosImages = {
    sandcrawler: "/sandcrawler.jpg",
    snowspeeder: "/Snowspeeder.jpg",
    atat: "/AT-AT.jpg",
    atst: "/atst.jpg",
    stormivtwinpodcloudcar: "/stormivtwinpodcloudcar.jpg",
    sailbarge: "/sailbarge.jpg",
    tiebomber: "/TIE bomber.jpg",
    tielnstarfighter: "/tielnstrafighter.jpg",
    t16skyhopper: "/T-16 skyhopper.jpg",
    x34landspeeder: "/X-34 landspeeder.jpg",
    imperialspeederbike: "/imperialspeederbike.webp",
  };

  const planetasImages = {
    tatooine: "/tatooine.webp",
    naboo: "/naboo.jpg",
    hoth: "/hoth.jpg",
    coruscant: "/coruscant.jpg",
    dagobah: "/dagobah.jpg",
    endor: "/endor.jpg",
    kamino: "/kamino.jpg",
    bespin: "/bespin.jpg",
    alderaan: "/alderaan.jpg",
    yaviniv: "/yaviniv.jpg",
  };

  return (
    <div className="container mt-4">

      <h2 className="text-warning mb-3">Personajes</h2>
      <div className="d-flex overflow-auto pb-3">
        {people.map((item) => (
          <Card
            key={item.uid}
            item={item}
            imageMap={personajesImages}
            type="people"
          />
        ))}
      </div>

      <h2 className="text-warning mb-3">Vehículos</h2>
      <div className="d-flex overflow-auto pb-3">
        {vehicles.map((item) => (
          <Card
            key={item.uid}
            item={item}
            imageMap={vehiculosImages}
            type="vehicles"
          />
        ))}
      </div>

      <h2 className="text-warning mb-3">Planetas</h2>
      <div className="d-flex overflow-auto pb-3">
        {planets.map((item) => (
          <Card
            key={item.uid}
            item={item}
            imageMap={planetasImages}
             type="planets"
          />
        ))}
      </div>

    </div>
  );
};

export default Home;