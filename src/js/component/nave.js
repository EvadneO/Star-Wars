import React, { useContext } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Nave = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

    return (

<div className="card mb-3" style={{width: "680px"}}>
<img src="https://wallpaperstock.net/wallpapers/thumbs1/20966.jpg" class="naves" alt="..."/>
  <div className="row g-0">
    <div className="col-md-12">
      <div className="card-body">
        <h1 className="card-title"><strong>{store.nave[id]?.name}</strong></h1>
        <h5 className="card-text"><strong>Modelo: </strong> {store.nave[id]?.model}</h5>
        <h5 className="card-text"><strong>Manufactura: </strong> {store.nave[id]?.manufacturer}</h5>
        <h5 className="card-text"><strong>Costo: </strong> {store.nave[id]?.cost_in_credits}</h5>
        <h5 className="card-text"><strong>Velocidad: </strong> {store.nave[id]?.max_atmosphering_speed}</h5>
        <h5 className="card-text"><strong>Tripulación: </strong> {store.nave[id]?.crew}</h5>
        <h5 className="card-text"><strong>Capacidad de carga: </strong> {store.nave[id]?.cargo_capacity}</h5>
        <h5 className="card-text"><strong>Consumible: </strong> {store.nave[id]?.consumables}</h5>
        <h5 className="card-text"><strong>Clasificación: </strong> {store.nave[id]?.hyperdrive_rating}</h5>
        <h5 className="card-text"><strong>MGLT: </strong> {store.nave[id]?.MGLT}</h5>
        <h5 className="card-text"><strong>Clase de nave estelar: </strong> {store.nave[id]?.starship_class}</h5>
        <p className="card-text"><strong>Pilotos: </strong><small>{store.nave[id]?.pilots}</small></p>
        <p className="card-text"><strong>Películas: </strong><li><small>{store.nave[id]?.films}</small></li></p>
        <a href="https://www.disneyplus.com/es-cl?cid=DSS-Search-Google-71700000075919634-&s_kwcid=AL!8468!3!522205218624!b!!g!!star%20wars%20series&gclid=Cj0KCQjwgYSTBhDKARIsAB8Kuks8heVLNNYi5ezflKzyn1rfeZncgcvlYH4TRXAsZ8liTYHY9AwQNNAaAinYEALw_wcB&gclsrc=aw.ds"><small className="text-muted" >Ver Episodios</small></a>
      </div>
    </div>
  </div>
</div>
)
}