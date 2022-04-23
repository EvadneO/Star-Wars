import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/personaje.css";

import { DetallePlaneta } from "../component/detalleplaneta";



export const Plane = () => {
	const { store, actions } = useContext(Context);	



	return (
			<div className="row">
				<DetallePlaneta />	
			</div>

	);

};

