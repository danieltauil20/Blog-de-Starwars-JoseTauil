import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../appContext";

export const Navbar = () => {
  const { favorites, removeFavorite } = useContext(Context);
  const navigate = useNavigate();

  
  const formatName = (text) => {
    return text
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      
      <Link to="/" className="navbar-brand text-warning fw-bold">
        ⭐ Star Wars Blog
      </Link>

      
      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Favoritos ({favorites.length})
        </button>

        <ul className="dropdown-menu dropdown-menu-end">

          {favorites.length === 0 ? (
            <li className="dropdown-item text-muted">No hay favoritos</li>
          ) : (
            favorites.map((fav) => (
              <li
                key={fav} 
                className="dropdown-item d-flex justify-content-between align-items-center"
              >

              
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/single/${encodeURIComponent(fav)}`)}
                >
                  {formatName(fav)}
                </span>

             
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => removeFavorite(fav)}
                >
                  ✕
                </button>

              </li>
            ))
          )}

        </ul>
      </div>
    </nav>
  );
};