import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			<div className="" style={{ height: "100vh", width: "100%" }}>
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

export default SimpleMap;
