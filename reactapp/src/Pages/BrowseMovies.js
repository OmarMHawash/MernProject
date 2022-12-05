import React, { useState, useEffect } from 'react';

import BrowseResult from '../Components/BrowseMovies/BrowseResult';
import SearchForm from '../Components/BrowseMovies/SearchForm';

const BrowseMovies = () => {
	const [movies, setMovies] = useState([])

	const handleMovies = (movies) => {
		setMovies(movies)
	}
	return (
		<>
			<SearchForm moviesData={handleMovies} />
			<BrowseResult results={movies} />
		</>
	)
}

export default BrowseMovies