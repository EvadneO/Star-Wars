import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import PropTypes from "prop-types";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar bg-black mb-3">
      <Link to="/">
        <img
          src="https://cdn.shopify.com/s/files/1/0333/7961/4851/products/p-842978152264-1-155d02a0-06c9-4812-93a1-4db202818867_c1a3dc83-2391-4dc0-bb81-6d4c43ca73a1.png?v=1640188885"
          className="imagen"
        ></img>
      </Link>
      <Link to="/personaje">
        <div className="titulo">Personaje</div>
      </Link>
      <Link to="/planetas">
        <div className="titulo">Planetas</div>
      </Link>
      <Link to="/starships">
        <div className="titulo">Starships</div>
      </Link>
      <div className="ml-auto">
        <div class="dropdown dropstart">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#"></a>
            </li>
            <li
              className="nav-item btn-outline-danger mb-3 float-right"
              id="favorite-btn"
            >
              {!!store.favorites.length !== 0 &&
            store.favorites.map((objeto, index) => {
              return (
                <li key={index} className="list-group-item float-right" id="favorito2">
                  {objeto}{" "}
                  {
                    <i
                      onClick={() => actions.deleteFavorite(objeto)}
                      className="fa fa-trash-alt float-right"
                    ></i>
                  }
                  </li>
                );
              })}
            </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};
