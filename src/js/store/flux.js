import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBF7X8agpeC7_q-NEqrXReWCgiZIkHPTrA");

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: [
				{
					firstName: "",
					lastName: "",
					email: "",
					password: ""
				}
			],
			favorites: [],
			coordinates: {
				lng: "-80.191742",
				lat: "25.77643",
				address: "Miami"
			}
		},
		actions: {
			handleCoordinates: location => {
				const store = getStore();
				Geocode.fromAddress(String(location)).then(
					response => {
						const { lat, lng } = response.results[0].geometry.location;

						store.coordinates = { lng, lat };
						setStore({ store: store });
					},
					error => {
						console.error(error);
					}
				);
			},

			/*getLocationName: (lat, lng) => {
				Geocode.fromLatLng(lat, lng).then(
					response => {
						const address = response.results[0].formatted_address;
						console.log(address);
					},
					error => {
						console.error(error);
					}
				);
			},*/

			handleSignUp: (firstName, lastName, email, city, pass1, pass2, e) => {
				const store = getStore();
				e.preventDefault();
				//ensure pass and pass verification match
				if (pass1 !== pass2) {
					alert("Passwords do not match.");
				} else {
					let signUpInfo = {
						firstName: firstName,
						lastName: lastName,
						email: email,
						password: pass1
					};
					// push info to database
					fetch("API URL", {
						method: "POST",
						body: JSON.stringify(signUpInfo),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(res => res.json())
						.then(
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
								.then(response => response.json())
								.then(data => {
									store.contacts = data;
									setStore({ store: store });
								})

								.catch(function(err) {})
						);
				}
			}
		}
	};
};

export default getState;
