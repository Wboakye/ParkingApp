import React, { Component } from "react";
import "../../styles/index.scss";

export const Footer = () => (
	<footer className="footer fixed-bottom mt-auto py-3 text-center" id="footerWrapper">
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-4">
					<i className="fas fa-map-pin fa-2x mt-1 mb-1" />
					<br />
					Find a lot.
				</div>
				<div className="col-4 mt-1 mb-1">
					<i className="fas fa-lock fa-2x" />
					<br />
					Reserve your spot.
				</div>
				<div className="col-4 mt-1 mb-1">
					<i className="fas fa-parking fa-2x" />
					<br />
					Park without stress.
				</div>
			</div>
		</div>
	</footer>
);
