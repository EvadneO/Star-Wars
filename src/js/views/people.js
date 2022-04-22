import React, { useEffect, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

import "../../styles/personaje.css";
import { Detalle } from "../component/detalle";



export const People = () => {
	const { store, actions } = useContext(Context);	
	useEffect (()=> {
 actions.getPeople()
  }, [])

	return (
			<div className="row">
				{store.people.map(function(objeto){
					return <Detalle objeto={objeto}/>
				})}
			</div>

	);

};

