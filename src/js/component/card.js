import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  return (

<div className="col">  
  <div className="card mb-5" style={{ width: "18rem" }}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          <strong>{props.objeto.name}</strong>
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Altura: </strong>
          {props.objeto.height}
        </li>
        <li className="list-group-item">
          <strong>Masa: </strong>
          {props.objeto.mass}
        </li>
        <li className="list-group-item">
          <strong>Color de Cabello: </strong>
          {props.objeto.hair_color}
        </li>
      </ul>
      <div className="d-flex justify-content-between">
        <Link to={"/people/" + props.index}>
          <button className="cardButton btn btn-lg btn-danger outline-info">Leer más</button>
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

  );
};
