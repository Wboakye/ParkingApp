import React from "react";
import { Link } from "react-router-dom";

import "../../styles/index.scss";

export class LogIn extends React.Component {
	render() {
		return (
			<div id="logInWrapper">
				<div className="container login-container">
					<div className="row">
						<div className="col-md-4 rounded p-3 login-form-1">
							<h3>Login</h3>
							<form>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Email" value="" />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password" value="" />
								</div>
								<div className="form-group">
									<Link to="/">
										<button type="button" className="btn btn-outline-primary mx-1">
											Sign In
										</button>
									</Link>
									<Link to="/">
										<button type="button" className="btn btn-outline-danger mx-1">
											Cancel
										</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
