import React, { Component } from "react";


import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
  
    <div className="card mb-5" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>{props.objeto.name}</strong></h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><strong>Altura: </strong>{props.objeto.height}</li>
    <li className="list-group-item"><strong>Masa: </strong>{props.objeto.mass}</li>
    <li className="list-group-item"><strong>Color de Cabello: </strong>{props.objeto.hair_color}</li>
  </ul>
  <div className="row">
    <div className="col-10">
    <Link to="/people">
   <button className="card-link">Leer más</button>
   </Link>
   </div>
   <div className="col-2">
     <Link to="/">
   <button>
    <a href="#" className="card-link">🖤</a>
    </button>
    </Link>
    </div>
</div>
</div>
  )
  }
    