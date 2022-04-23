import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cardplaneta } from "../component/cardplaneta";




export const Planetas = () => {
	const { store, actions } = useContext(Context);	

	return (
			<div className="row">
       	<h1 id="inicio"><strong>PLANETAS</strong></h1>

				{store.planetas.map(function(objeto, index){
					return <Cardplaneta objeto={objeto} index={index}/>
				})}

			</div>

	);

};
