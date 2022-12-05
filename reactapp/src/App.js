import { Router } from '@reach/router'
import './App.css'

import Header from './Components/Layout/Header.js';
import Popularity from './Pages/Popularity';
import Watch from './Pages/Watch.js';
import About from './Pages/About.js';
import BrowseMovies from './Pages/BrowseMovies';

function App() {
	return (
		<div className="App">
			<Header />
			<Router >
				<Popularity path="/" />
				<BrowseMovies path="/browse" />
				<Watch path="/movie/:id" />
				<About path="/about" />
			</Router>
		</div>
	);
}

export default App;
