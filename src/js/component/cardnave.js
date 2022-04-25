import React, { Component } from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Cardnave = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card mb-3" style={{ width: "680px" }}>
      <img
        src="https://wallpaperstock.net/wallpapers/thumbs1/20966.jpg"
        class="naves"
        alt="..."
      />
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h1 className="card-title">
              <strong>{props.objeto.name}</strong>
            </h1>
            <h5 className="card-text">
              <strong>Modelo: </strong> {props.objeto.model}
            </h5>
            <h5 className="card-text">
              <strong>Manufactura: </strong> {props.objeto.manufacturer}
            </h5>
            <h5 className="card-text">
              <strong>Costo: </strong> {props.objeto.cost_in_credits}
            </h5>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <Link to={"/naveestelar/" + props.index}>
              <button className="cardButton btn btn-outline-info">
                Leer más
              </button>
            </Link>
            <button className="btn btn-outline-info">
              <i className="fas fa-heart" />
            </button>
            <button
              onClick={() => {
                actions.addCharacter(objeto.name);
              }}
              className="btn btn-lg btn-danger d-block float-right"
            >
              <i
                className={
                  store.favorites.includes(objeto.name)
                    ? "colored fas fa-star"
                    : "fas fa-star"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
