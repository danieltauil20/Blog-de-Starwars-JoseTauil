import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {

    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const getPeople = async () => {
        const res = await fetch("https://www.swapi.tech/api/people");
        const data = await res.json();
        setPeople(data.results);
    };

    const getVehicles = async () => {
        const res = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await res.json();
        setVehicles(data.results);
    };

    const getPlanets = async () => {
        const res = await fetch("https://www.swapi.tech/api/planets");
        const data = await res.json();
        setPlanets(data.results);
    };

    const addFavorite = (item) => {
        if (!favorites.includes(item)) {
            setFavorites([...favorites, item]);
        }
    };

    const removeFavorite = (item) => {
        setFavorites(favorites.filter(f => f !== item));
    };

    useEffect(() => {
        getPeople();
        getVehicles();
        getPlanets();
    }, []);

    return (
        <Context.Provider value={{
            people,
            vehicles,
            planets,
            favorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </Context.Provider>
    );
};