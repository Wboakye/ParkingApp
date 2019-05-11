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
			favorites: []
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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
