import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Cardplaneta = (props) => {
  const { store, actions } = useContext(Context);
  return (
<div className="fluid">
    <div className="cardP mb-3" style={{ width: "680px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h2 className="card-title">
              <strong>Planeta:</strong> {props.objeto.name}
            </h2>
            <h5 className="card-text">
              <strong>Rotación: </strong> {props.objeto.rotation_period}
            </h5>
            <h5 className="card-text">
              <strong>Orbita: </strong> {props.objeto.orbital_period}
            </h5>
          </div>
          <div className="d-flex justify-content-between">
            <Link to={"/plane/" + props.index}>
              <button className="cardButton btn btn-lg btn-danger outline-info">
                Leer más
              </button>
            </Link>
            <button
              onClick={() => {
                actions.addCharacter(props.objeto.name);
              }}
              className="btn btn-lg btn-danger d-block float-right"
            >
              <i
                className={
                  store.favorites.includes(props.objeto.name)
                    ? "colored fas fa-star"
                    : "fas fa-star"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
