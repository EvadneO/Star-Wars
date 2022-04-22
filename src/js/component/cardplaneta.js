import React, { Component } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Cardplaneta = (props) => {

    return (

<div className="cardP mb-3" style={{width: "680px"}}>
  <div className="row g-0">
    <div className="col-md-12">
      <div className="card-body">
        <h2 className="card-title"><strong>Planeta:</strong> {props.objeto.name}</h2>
        <h5 className="card-text"><strong>Rotación: </strong> {props.objeto.rotation_period}</h5>
        <h5 className="card-text"><strong>Orbita: </strong> {props.objeto.orbital_period}</h5>
        <h5 className="card-text"><strong>Diametro: </strong> {props.objeto.diameter}</h5>
        <h5 className="card-text"><strong>Clima: </strong> {props.objeto.climate}</h5>
        <h5 className="card-text"><strong>Gravedad: </strong> {props.objeto.gravity}</h5>
        <h5 className="card-text"><strong>Terreno: </strong> {props.objeto.terrain}</h5>
        <h5 className="card-text"><strong>Agua Superficial: </strong> {props.objeto.surface_water}</h5>
        <h5 className="card-text"><strong>Población: </strong> {props.objeto.population}</h5>
      </div>
    </div>
  </div>
</div>
)
}