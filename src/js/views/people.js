import React, { useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/personaje.css";
import { Detalle } from "../component/detalle";




export const People = () => {
	const { store, actions } = useContext(Context);	



	return (
			<div className="row">
				<Detalle />	
			</div>

	);

};

