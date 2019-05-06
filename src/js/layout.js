import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { LogIn } from "./views/logIn";
import { SignUp } from "./views/signUp";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<Route
						render={location => (
							<TransitionGroup>
								<CSSTransition key={window.location} timeout={1000} classNames="fade">
									<Switch>
										<Route exact path="/" component={Home} />
										<Route path="/login" component={LogIn} />
										<Route path="/signup" component={SignUp} />
										<Route path="/demo" component={Demo} />
										<Route path="/single/:theid" component={Single} />
										<Route render={() => <h1>Not found!</h1>} />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
