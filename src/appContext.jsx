import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // 🔥 FETCH CON MEJOR CONTROL
  const fetchData = async () => {
    try {
      const [peopleRes, vehiclesRes, planetsRes] = await Promise.all([
        fetch("https://www.swapi.tech/api/people"),
        fetch("https://www.swapi.tech/api/vehicles"),
        fetch("https://www.swapi.tech/api/planets"),
      ]);

      const [peopleData, vehiclesData, planetsData] = await Promise.all([
        peopleRes.json(),
        vehiclesRes.json(),
        planetsRes.json(),
      ]);

      setPeople(peopleData.results || []);
      setVehicles(vehiclesData.results || []);
      setPlanets(planetsData.results || []);
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // ⭐ AÑADIR FAVORITO
const addFavorite = (name) => {
  setFavorites((prev) => {
    if (prev.includes(name)) return [...prev];

    const updated = [...prev, name];
    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  });
};


const removeFavorite = (name) => {
  setFavorites((prev) => {
    const updated = prev.filter((fav) => fav !== name);
    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  });
};

  
  const isFavorite = (name) => favorites.includes(name);

  return (
    <Context.Provider
      value={{
        people,
        vehicles,
        planets,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite, // 👈 útil para tus componentes
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;