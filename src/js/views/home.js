import React from "react";
import "../../styles/home.css";
import { Personaje } from "./personaje";
import { Planetas } from "./planetas";
import { Starships } from "./starships";


export const Home = () => { 
	 return (
<div className="container-fluid">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://9to5fortnite.com/wp-content/uploads/2021/10/star-wars-banner-full.jpg" class="d-block w-100"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://fondosmil.com/fondo/33988.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://fanhammer.org/wp-content/uploads/2019/02/borde-exterior-banner.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
<div className="col">
<div className="row-4"><Personaje/></div>
<div className="row-4"><Planetas/></div>
<div className="row-4"><Starships/></div>
</div>
</div>







)
}
