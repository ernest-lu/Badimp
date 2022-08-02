import {useState, useEffect} from "react";

const SearchBar = ({funky, placeholder}) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		funky(query)
	}, [query]);

    return (
		<input 
			placeholder={placeholder}
			value={query}
			onChange={(event) => setQuery(event.target.value)} 
		/>
    );
};   

export default SearchBar;