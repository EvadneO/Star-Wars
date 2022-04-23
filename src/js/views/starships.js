import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Cardnave } from "../component/cardnave";



export const Starships = () => {
	const { store, actions } = useContext(Context);	

	return (
			<div className="row">
	<h1 id="inicio"><strong>NAVES ESPACIALES</strong></h1>

				{store.nave.map(function(objeto, index){
					return <Cardnave objeto={objeto} index={index}/>
				})}
			</div>

	);

};

