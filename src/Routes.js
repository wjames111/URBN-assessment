import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function Routes() {
	return (
		<div>
			<Route path="/" component={Header} />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
			<Route path="/" component={Footer} />
		</div>
	);
}

export default Routes;
