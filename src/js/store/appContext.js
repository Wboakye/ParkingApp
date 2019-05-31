import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
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
			fetch("https://api.parkwhiz.com/parking/reservation/?key=62d882d8cfe5680004fa849286b6ce20")
				.then(function(response) {
					return response.json();
				})
				.then(function(myJson) {
					//console.log(myJson);
					let filteredJSON = myJson.filter(function(item) {
						return item.city == "Miami";
					});
					console.log(filteredJSON);
					let { store } = this.state;
					store.mapLocations = [filteredJSON];
					this.setState({ store });

					const store = getStore();
					store.mapLocations = [filteredJSON];
					setStore({ store: store });
				});
		}

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
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
