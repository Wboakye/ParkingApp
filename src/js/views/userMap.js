import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class UserMap extends Component {
	render() {
		return (
			<div style={{ height: "100vh", width: "100%" }}>
				<GoogleMapReact
					style={{ height: "100vh", width: "100%" }}
					bootstrapURLKeys={{ key: "AIzaSyBF7X8agpeC7_q-NEqrXReWCgiZIkHPTrA" }}
					defaultCenter={10}
					defaultZoom={{ lat: 25.77643, lng: -80.191742 }}
				/>
			</div>
		);
	}
}

export default UserMap;
