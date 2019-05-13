import React from "react";
import { Link } from "react-router-dom";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
	return <GoogleMap defaultZoom={15} defaultCenter={{ lat: 25.77643, lng: -80.191742 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class UserMap extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-transparent fixed-top pt-4 mr-1" id="mapNav">
					<div className="row m-auto justify-content-center pt-3" id="searchRowMap">
						<input
							className="col-8 form-control rounded border border-white ml-3 mt-1 mb-1"
							type="search"
							placeholder="New Search..."
							aria-label="Search"
							id="searchWrapperMap"
						/>

						<div className="col-1 ml-1 mr-1 p-0">
							<Link to="/map">
								<button type="button p-0" className="btn btn-outline-light mt-1 mb-1">
									Lets Go!
								</button>
							</Link>
						</div>
					</div>
				</nav>
				<div className="row m-0 h-100" id="mapWrapper">
					<div className="col-sm-12 p-0" id="map" style={{ height: "100vh", width: "100vw" }}>
						<WrappedMap
							googleMapURL={
								"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
							}
							loadingElement={<div style={{ height: "500px" }} />}
							containerElement={<div style={{ height: "100%" }} />}
							mapElement={<div style={{ height: "100%" }} />}
						/>
					</div>
					<div className="col-12 col-sm-3 ml-auto shadow-lg rounded-top" id="mapInfoWindow">
						<div className="row">
							<div className="col-4" />
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
				</div>
			</div>
		);
	}
}
