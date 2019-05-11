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
				<nav className="navbar navbar-light bg-transparent fixed-top" id="mapNav">
					<span className="navbar-brand mb-0 h1">
						<h1>Park.it</h1>
					</span>
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
					<div className="col-12 col-sm-3 ml-auto shadow-lg" id="mapInfoWindow">
						<Link to="/">
							<button type="button" className="btn btn-outline-light">
								Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
