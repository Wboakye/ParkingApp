import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
	return <GoogleMap defaultZoom={15} defaultCenter={{ lat: 25.77643, lng: -80.191742 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class UserMap extends React.Component {
	render() {
		return (
			<div style={{ height: "100vh", width: "100vw" }}>
				<WrappedMap
					googleMapURL={
						"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBF7X8agpeC7_q-NEqrXReWCgiZIkHPTrA"
					}
					loadingElement={<div style={{ height: "500px" }} />}
					containerElement={<div style={{ height: "100%" }} />}
					mapElement={<div style={{ height: "100%" }} />}
				/>
			</div>
		);
	}
}

//https://maps.googleapis.com/maps/api/js?key=AIzaSyBF7X8agpeC7_q-NEqrXReWCgiZIkHPTrA
