import React from 'react';
import 'whatwg-fetch';
import './App.css';
import Home from '../views/Home/Home';
import About from '../views/About/About';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = props => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Switch>
		</Router>
	)
}

export default App;
