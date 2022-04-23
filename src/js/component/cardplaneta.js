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
      </div>
      <div className="row">
    <div className="col-10">
    <Link to={"/plane/"+props.index}>
   <button className="card-link">Leer más</button>
   </Link>
   </div>
   <div className="col-2">
   <button>
    <a href="#" className="card-link">🖤</a>
    </button>
    </div>
</div>
    </div>
  </div>
</div>
)
}