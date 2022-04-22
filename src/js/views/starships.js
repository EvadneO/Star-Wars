import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Navestelar } from "../component/nave";



export const Starships = () => {
	const { store, actions } = useContext(Context);	
	useEffect (()=> {
 actions.getNave()
  }, [])

	return (
			<div className="row">
	<h1 id="inicio"><strong>NAVES ESPACIALES</strong></h1>

				{store.nave.map(function(objeto){
					return <Navestelar objeto={objeto}/>
				})}
			</div>

	);

};

