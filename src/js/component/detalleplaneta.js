import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const DetallePlaneta  = () =>  {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
    return (

<div className="cardP mb-3" style={{width: "680px"}}>
  <div className="row g-0">
    <div className="col-md-12">
      <div className="card-body">
        <h2 className="card-title"><strong>Planeta:</strong> {store.planetas[id]?.name}</h2>
        <h5 className="card-text"><strong>Rotación: </strong> {store.planetas[id]?.rotation_period}</h5>
        <h5 className="card-text"><strong>Orbita: </strong> {store.planetas[id]?.orbital_period}</h5>
        <h5 className="card-text"><strong>Diametro: </strong> {store.planetas[id]?.diameter}</h5>
        <h5 className="card-text"><strong>Clima: </strong> {store.planetas[id]?.climate}</h5>
        <h5 className="card-text"><strong>Gravedad: </strong> {store.planetas[id]?.gravity}</h5>
        <h5 className="card-text"><strong>Terreno: </strong> {store.planetas[id]?.terrain}</h5>
        <h5 className="card-text"><strong>Agua Superficial: </strong> {store.planetas[id]?.surface_water}</h5>
        <h5 className="card-text"><strong>Población: </strong> {store.planetas[id]?.population}</h5>
      </div>
      </div>
  </div>
</div>
)
}