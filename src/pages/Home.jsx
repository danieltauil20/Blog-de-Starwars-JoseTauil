import Card from "./Card";

const Home = () => {

  // ⭐ PERSONAJES
  const personajes = [
    { name: "Luke Skywalker" },
    { name: "Darth Vader" },
    { name: "Leia Organa" },
    { name: "Obi-Wan Kenobi" },
    { name: "R2-D2" },
    { name: "C-3PO" },
    { name: "Owen Lars" },
    { name: "Beru Whitesun lars" },
    { name: "R5-D4" },
    { name: "Biggs Darklighter" },
  ];

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

  
  const vehiculos = [
    { name: "Sand Crawler" },
    { name: "Snowspeeder" },
    { name: "AT-AT" },
    { name: "TIE bomber" },
    { name: "TIE-LN starfighter" },
    { name: "T-16 skyhopper" },
    { name: "X-34 landspeeder" },
    { name: "Imperial Speeder Bike" },
  ];

  const vehiculosImages = {
    sandcrawler: "/sandcrawler.jpg",
    snowspeeder: "/Snowspeeder.jpg",
    atat: "/AT-AT.jpg",
    tiebomber: "/TIE bomber.jpg",
    tielnstarfighter: "/TIE-LN starfighter.jpg",
    t16skyhopper: "/T-16 skyhopper.jpg",
    x34landspeeder: "/X-34 landspeeder.jpg",
    imperialspeederbike: "/speeder.jpg",
  };

  
  const planetas = [
    { name: "Tatooine" },
    { name: "Naboo" },
    { name: "Hoth" },
    { name: "Coruscant" },
    { name: "Dagobah" },
    { name: "Endor" },
    { name: "Kamino" },
    { name: "Bespin" },
    { name: "Alderaan" },
  ];

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
  };

  return (
    <div className="container mt-4">

      
      <h2 className="text-warning mb-3">Personajes</h2>
      <div className="d-flex overflow-auto pb-3">
        {personajes.map((item, index) => (
          <Card key={index} item={item} imageMap={personajesImages} />
        ))}
      </div>

      
      <h2 className="text-warning mb-3">Vehículos</h2>
      <div className="d-flex overflow-auto pb-3">
        {vehiculos.map((item, index) => (
          <Card key={index} item={item} imageMap={vehiculosImages} />
        ))}
      </div>

      
      <h2 className="text-warning mb-3">Planetas</h2>
      <div className="d-flex overflow-auto pb-3">
        {planetas.map((item, index) => (
          <Card key={index} item={item} imageMap={planetasImages} />
        ))}
      </div>

    </div>
  );
};

export default Home;