import { useContext } from "react";
import { Context } from "../appContext";
import { useNavigate } from "react-router-dom";

const Card = ({ item, imageMap, type }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(Context);
  const navigate = useNavigate();

  const normalize = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]/g, "");

  const normalizedName = normalize(item.name);

  const isFavorite = favorites.includes(item.name);

  const image = imageMap[normalizedName] || "/default.webp";

  return (
    <div
      className="card m-2 shadow-sm"
      style={{
        minWidth: "200px",
        maxWidth: "200px",
        height: "350px",
        cursor: "pointer",
      }}
      onClick={() =>
        navigate(`/single/${type}/${item.uid}`)
      }
    >
      <img
        src={image}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
        alt={item.name}
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="text-center">{item.name}</h6>

        <button
          className="btn btn-light w-100"
          onClick={(e) => {
            e.stopPropagation();

            if (isFavorite) {
              removeFavorite(item.name);
            } else {
              addFavorite(item.name);
            }
          }}
        >
          {isFavorite ? "★ Quitar" : "☆ Favorito"}
        </button>
      </div>
    </div>
  );
};

export default Card;