import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Geocode from "react-geocode";

import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

import "../../styles/index.scss";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<Navbar />
							<div className="text-center" id="homeWrapper">
								{/*Home background image, may input variable for constantly changeing images*/}
								<div id="homeImage">
									<div className="row m-auto justify-content-center" id="searchRow">
										{/*Search bar. Must turn user input into API call*/}
										<input
											className="col-md-6 form-control rounded border border-white mt-1 mb-1"
											type="search"
											placeholder="Where are we going?"
											aria-label="Search"
											id="searchWrapper"
										/>
										<div className="col-md-1 ml-1 mr-1 p-0">
											<Link to="/map">
												<button
													type="button p-0"
													onClick={() => {
														actions.handleCoordinates(
															document.querySelector("#searchWrapper").value
														);
													}}
													className="btn btn-outline-light mt-1 mb-1">
													Lets Go!
												</button>
											</Link>
										</div>
									</div>
								</div>
								<Footer />
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
