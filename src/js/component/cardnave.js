import React, { Component } from "react";


import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Cardnave = (props) => {
  return (
  

<div className="card mb-3" style={{width: "680px"}}>
<img src="https://wallpaperstock.net/wallpapers/thumbs1/20966.jpg" class="naves" alt="..."/>
  <div className="row g-0">
    <div className="col-md-12">
      <div className="card-body">
        <h1 className="card-title"><strong>{props.objeto.name}</strong></h1>
        <h5 className="card-text"><strong>Modelo: </strong> {props.objeto.model}</h5>
        <h5 className="card-text"><strong>Manufactura: </strong> {props.objeto.manufacturer}</h5>
        <h5 className="card-text"><strong>Costo: </strong> {props.cost_in_credits}</h5>
        </div>
        </div>
        <div>
  <div className="row">
    <div className="col-10">
    <Link to={"/naveestelar/"+props.index}>
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
    