import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-light bg-transparent">
				<Link to="/">
					<span className="navbar-brand mb-0">
						<h1>Park.it</h1>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary ml-1 mr-1">Log In</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-light ml-1 mr-1">Sign Up</button>
					</Link>
				</div>
			</nav>
		);
	}
}
