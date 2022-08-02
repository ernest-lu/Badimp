import HomeCard from "../components/homeCard.js";
import {useState, useEffect} from 'react';
import ParseId from '../Helpers.js';
  


export default function(props) {
	const [plates, setPlates] = useState([]);

	const jsonLoc = "https://raw.githubusercontent.com/ernest-lu/TEM-PLATES/main/mein.json";
	
	useEffect(() => {
		fetch(jsonLoc).then(res => res.json()).then(jayce => setPlates(jayce))
	}, []);
	
	return (
		<div> <h1>badimp</h1>
			<ul>{
				plates.map((plate) => 
					<li key={plate.id}>
						<HomeCard name={ParseId(plate.id)} id={plate.id}/>
					</li>
				)
			}</ul>
		</div>
	);
};
