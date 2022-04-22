import React, { useEffect, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

import "../../styles/personaje.css";



export const Personaje = () => {
	const { store, actions } = useContext(Context);	
	useEffect (()=> {
 actions.getPersonaje()
  }, [])

	return (
			<div className="row">
			<h1 id="inicio"><strong>PERSONAJES</strong></h1>

				{store.personaje.map(function(objeto){
					return <Card objeto={objeto}/>
				})}
		
			</div>

	);

};
