import React from "react";

import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

import "../../styles/index.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="text-center" id="homeWrapper">
					<div id="homeImage">
						<div className="row m-auto justify-content-center" id="searchRow">
							<input
								className="col-md-6 form-control rounded border border-white mt-1 mb-1"
								type="search"
								placeholder="Where are we going?"
								aria-label="Search"
								id="searchWrapper"
							/>

							<div className="col-md-1 ml-1 mr-1 p-0">
								<button type="button p-0" className="btn btn-outline-light mt-1 mb-1">
									Lets Go!
								</button>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}
