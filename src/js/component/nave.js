import React, { Component } from "react";
import "../../styles/home.css";


export const Navestelar = (props) => {

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
        <h5 className="card-text"><strong>Velocidad: </strong> {props.objeto.max_atmosphering_speed}</h5>
        <h5 className="card-text"><strong>Tripulación: </strong> {props.objeto.crew}</h5>
        <h5 className="card-text"><strong>Capacidad de carga: </strong> {props.objeto.cargo_capacity}</h5>
        <h5 className="card-text"><strong>Consumible: </strong> {props.objeto.consumables}</h5>
        <h5 className="card-text"><strong>Clasificación: </strong> {props.objeto.hyperdrive_rating}</h5>
        <h5 className="card-text"><strong>MGLT: </strong> {props.objeto.MGLT}</h5>
        <h5 className="card-text"><strong>Clase de nave estelar: </strong> {props.objeto.starship_class}</h5>
        <p className="card-text"><strong>Pilotos: </strong><small>{props.objeto.pilots}</small></p>
        <p className="card-text"><strong>Películas: </strong><li><small>{props.objeto.films}</small></li></p>
        <a href="https://www.disneyplus.com/es-cl?cid=DSS-Search-Google-71700000075919634-&s_kwcid=AL!8468!3!522205218624!b!!g!!star%20wars%20series&gclid=Cj0KCQjwgYSTBhDKARIsAB8Kuks8heVLNNYi5ezflKzyn1rfeZncgcvlYH4TRXAsZ8liTYHY9AwQNNAaAinYEALw_wcB&gclsrc=aw.ds"><small className="text-muted" >Ver Episodios</small></a>
      </div>
    </div>
  </div>
</div>
)
}