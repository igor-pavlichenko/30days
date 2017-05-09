import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
	<div>
		<h1>About</h1>
		<Link to="/">Go home</Link>
		<Link to="/timeform">Time form</Link>
	</div>
);

export default About;
