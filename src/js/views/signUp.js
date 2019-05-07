import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import "../../styles/index.scss";

export class SignUp extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
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
															<input
																type="text"
																className="form-control"
																id="signUpFirstName"
																placeholder=""
																require
															/>
														</div>
														<div className="col form-group">
															<label>Last name</label>
															<input
																type="text"
																className="form-control"
																id="signUpLastName"
																placeholder=""
																require
															/>
														</div>
													</div>
													<div className="form-group">
														<label>Email address</label>
														<input
															type="email"
															className="form-control"
															id="signUpEmail"
															placeholder=""
															require
														/>
													</div>
													<div className="form-row">
														<div className="form-group col-md-6">
															<label>City</label>
															<input
																type="text"
																className="form-control"
																id="signUpCity"
																require
															/>
														</div>
													</div>
													<div className="form-group">
														<label>Create password</label>
														<input
															className="form-control"
															type="password"
															id="signUpPass1"
															require
														/>
													</div>
													<div className="form-group">
														<label>Verify password</label>
														<input
															className="form-control"
															type="password"
															id="signUpPass2"
															require
														/>
													</div>
													<div className="form-group text-right">
														<button
															type="submit"
															className="btn btn-outline-primary btn-lg mx-1"
															onClick={() => {
																actions.handleSubmit(
																	document.querySelector("#signUpFirstName").value,
																	document.querySelector("#signUpLastName").value,
																	document.querySelector("#signUpEmail").value,
																	document.querySelector("#signUpCity").value,
																	document.querySelector("#signUpPass1").value,
																	document.querySelector("#signUpPass2").value
																);
															}}>
															{" "}
															Register{" "}
														</button>
														<Link to="/">
															<button
																type="submit"
																className="btn btn-outline-danger btn-lg mx-1">
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
				}}
			</Context.Consumer>
		);
	}
}
