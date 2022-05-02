import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './scss/style.scss';

function App() {
	return (
		<Router>
			<Routes />
		</Router>
		);
	}

export default hot(module)(App);
