import React from "react";
import { Link } from "react-router-dom";

import "../../styles/index.scss";

export class LogIn extends React.Component {
	render() {
		return (
			<div id="logInWrapper">
				<div className="container login-container">
					<div className="row px-1">
						<div className="col-md-4 rounded p-3 login-form-1">
							<header className="card-header">
								<h4 className="card-title mt-2">Login</h4>
							</header>
							<form>
								<div className="form-group mt-3">
									<input type="text" className="form-control" placeholder="Email" value="" />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password" value="" />
								</div>
								<div className="form-group text-center">
									<Link to="/">
										<button type="button" className="btn btn-outline-primary btn-lg mx-1">
											Sign In
										</button>
									</Link>
									<Link to="/">
										<button type="button" className="btn btn-outline-danger btn-lg mx-1">
											Cancel
										</button>
									</Link>
								</div>
								<div className="form-group">
									Not a member? &nbsp;
									<Link to="/signup">Sign Up!</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
