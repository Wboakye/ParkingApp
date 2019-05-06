import React from "react";
import { Link } from "react-router-dom";

import "../../styles/index.scss";

export class SignUp extends React.Component {
	render() {
		return (
			<div className="container-fluid m-0 p-0" id="signUpWrapper">
				<div id="signUpImage">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<div className="card m-1" id="signUpCard">
								<header className="card-header">
									<h4 className="card-title mt-2">Sign up</h4>
								</header>
								<article className="card-body">
									<form>
										<div className="form-row">
											<div className="col form-group">
												<label>First name </label>
												<input type="text" className="form-control" placeholder="" />
											</div>
											<div className="col form-group">
												<label>Last name</label>
												<input type="text" className="form-control" placeholder=" " />
											</div>
										</div>
										<div className="form-group">
											<label>Email address</label>
											<input type="email" className="form-control" placeholder="" />
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label>City</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group">
											<label>Create password</label>
											<input className="form-control" type="password" />
										</div>
										<div className="form-group">
											<label>Verify password</label>
											<input className="form-control" type="password" />
										</div>
										<div className="form-group text-right">
											<Link to="/">
												<button type="submit" className="btn btn-outline-primary btn-lg mx-1">
													{" "}
													Register{" "}
												</button>
											</Link>
											<Link to="/">
												<button type="submit" className="btn btn-outline-danger btn-lg mx-1">
													{" "}
													Cancel{" "}
												</button>
											</Link>
										</div>
									</form>
								</article>
								<div className="border-top card-body text-center">
									Have an account? <Link to="/login">Log In</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
