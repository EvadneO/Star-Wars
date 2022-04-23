import React, { useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/personaje.css";
import { Nave } from "../component/nave";




export const Naveestelar = () => {
	const { store, actions } = useContext(Context);	



	return (
			<div className="row">
				<Nave />	
			</div>

	);

};
