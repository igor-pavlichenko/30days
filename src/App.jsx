import React from 'react';
import 'whatwg-fetch';
import './App.css';
import TimeForm from './TimeForm';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const Home = () => (
	<div>
		<h1>Welcome home</h1>
		<Link to="/about">Go to about</Link>
		<Link to="/timeform">Time form</Link>
	</div>
);

const About = () => (
	<div>
		<h1>About</h1>
		<Link to="/">Go home</Link>
		<Link to="/timeform">Time form</Link>
	</div>
);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: null,
			msg: 'now',
			tz: 'PST',
		}
	}

	// methods we'll fill in shortly
	fetchCurrentTime() {
		fetch(this.getApiUrl())
			.then(resp => resp.json())
			.then(resp => {
				const currentTime = resp.dateString;
				this.setState({ currentTime });
			})
	}

	getApiUrl() {
		const { tz, msg } = this.state;
		const host = 'https://andthetimeis.com';

		return host + '/' + tz + '/' + msg + '.json';
	}

	handleFormSubmit(evt) {
		this.fetchCurrentTime();
	}

	handleChange(newState) {
		console.log(this.state);
		this.setState(newState);
		setTimeout(() => {
			console.log(this.state);
		}, 1000);

	}

	render() {
		const { currentTime, tz } = this.state;
		const apiUrl = this.getApiUrl();

		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/timeform" render={(renderProps) => (
							<div>
								{!currentTime &&
									<button onClick={this.fetchCurrentTime.bind(this)}>
										Get the current time
									</button>}
								{currentTime && <div>The current time is: {currentTime}</div>}
								<TimeForm
									onFormSubmit={this.handleFormSubmit.bind(this)}
									onFormChange={this.handleChange.bind(this)}
									tz={tz}
									msg={'now'}
								/>
								<p>We'll be making a request from: <code>{apiUrl}</code></p>
							</div>
						)
					} />
				</Switch>
			</Router>
		)
	}
}


export default App;
