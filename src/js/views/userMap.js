import React from "react";
import { Link } from "react-router-dom";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import { Context } from "../store/appContext";
import styles from "../component/GoogleMapStyles.json";
import MapPanel from "../component/mapPanel";

{
	/* Map Rendering Function */
}
function Map() {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				let lat = parseFloat(store.coordinates.lat);
				let lng = parseFloat(store.coordinates.lng);
				return (
					<GoogleMap
						defaultZoom={15}
						center={{ lat: lat, lng: lng }}
						defaultOptions={{
							disableDefaultUI: true, // disable default map UI
							draggable: true, // make map draggable
							keyboardShortcuts: false, // disable keyboard shortcuts
							scaleControl: true, // allow scale controle
							scrollwheel: true, // allow scroll wheel
							styles: styles // change default map styles
						}}>
						<Marker position={{ lat: 25.77641, lng: -80.19436 }} />
						<Marker position={{ lat: 25.77275, lng: -80.19332 }} />
						<Marker position={{ lat: 25.78099, lng: -80.19051 }} />
					</GoogleMap>
				);
			}}
		</Context.Consumer>
	);
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class UserMap extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<form onSubmit={actions.handleCoordinates}>
								{/*Search Bar*/}
								<nav className="navbar navbar-light bg-transparent fixed-top pt-4 mr-1" id="mapNav">
									<div className="row m-auto justify-content-center pt-3" id="searchRowMap">
										<input
											className="col-8 form-control rounded border border-primary ml-3 mt-1 mb-1"
											type="search"
											placeholder="New Search..."
											aria-label="Search"
											id="searchWrapperMap"
										/>

										<div className="col-1 ml-1 mr-1 p-0">
											<Link to="/map">
												<button
													type="button p-0"
													onClick={() => {
														actions.handleCoordinates(
															document.querySelector("#searchWrapperMap").value
														);
													}}
													className="btn btn-primary mt-1 mb-1">
													Lets Go!
												</button>
											</Link>
										</div>
									</div>
								</nav>
							</form>

							<div className="row m-0 h-100" id="mapWrapper">
								<div className="col-sm-12 p-0" id="map" style={{ height: "100vh", width: "100vw" }}>
									<WrappedMap
										googleMapURL={
											"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBF7X8agpeC7_q-NEqrXReWCgiZIkHPTrA"
										}
										loadingElement={<div style={{ height: "500px" }} />}
										containerElement={<div style={{ height: "100%" }} />}
										mapElement={<div style={{ height: "100%" }} />}
									/>
								</div>
								{/* Moving info bar */}
								<MapPanel />
								{/* Moving info bar */}
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
