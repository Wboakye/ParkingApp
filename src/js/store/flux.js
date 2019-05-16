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
			/*	getCoordinates: (address, callback) => {
				//get the store
				const store = getStore();
				let coordinates;
				geocoder.geocode({ address: address }, function(results, status) {
					coordinates = results[0].geometry.location;
					callback(coordinates);
				});

				//reset the global store
				setStore({ coordinates: coordinates });
			}, */

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
