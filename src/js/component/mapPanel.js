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
								<div className="col-4">
									<p>{store.coordinates.address}</p>
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
