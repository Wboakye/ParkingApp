import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class MapPanel extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="col-12 col-sm-3 ml-auto shadow-lg rounded-top" id="mapInfoWindow">
							<div className="row">
								<div className="col-6">
									<h5>Downtown Miami</h5>
								</div>
							</div>
							<div className="row" id="locationCardRow">
								<div className="col-4 col-sm-12 mx-0 px-0" id="locationCard">
									<div className="card mx-0">
										<div className="card-body">
											<h6 className="card-title">Port of Miami Discount Parking</h6>
											<p className="card-text">155 S Miami Ave.</p>

											<a href="#" className="btn btn-primary btn-sm">
												Select
											</a>
										</div>
									</div>
								</div>
								<div className="col-4 col-sm-12 mx-0 px-0" id="locationCard">
									<div className="card mx-0">
										<div className="card-body">
											<h6 className="card-title">Courthouse Garage</h6>
											<p className="card-text">40 NW 3rd St.</p>

											<a href="#" className="btn btn-primary btn-sm">
												Select
											</a>
										</div>
									</div>
								</div>
								<div className="col-4 col-sm-12 mx-0 px-0" id="locationCard">
									<div className="card mx-0">
										<div className="card-body">
											<h6 className="card-title">Miami Authority Parking Lot 41</h6>
											<p className="card-text">120 NE 2nd Ave.</p>
											<a href="#" className="btn btn-primary btn-sm">
												Available
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="row fixed-bottom">
								<div className="col-12 text-right navbar-text">
									<Link to="/">
										<button type="button" className="btn btn-sm btn-outline-light mr-1">
											Settings
										</button>
									</Link>
									<Link to="/">
										<button type="button" className="btn btn-sm btn-outline-danger ml-1 mr-2">
											Sign Out
										</button>
									</Link>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
