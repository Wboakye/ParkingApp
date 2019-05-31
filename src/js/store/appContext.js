import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			let currentComponent = this;

			fetch("https://api.parkwhiz.com/parking/reservation/?key=62d882d8cfe5680004fa849286b6ce20")
				.then(function(response) {
					return response.json();
				})
				.then(function(myJson) {
					//console.log(myJson);
					let filteredJSON = myJson.filter(function(item) {
						return item.city == "Miami";
					});
					//console.log(filteredJSON);
					let { store } = currentComponent.state;
					store.mapLocations = filteredJSON;
					currentComponent.setState({
						store
					});
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
