import React, { Component } from "react";

import { Route, Switch } from "react-router-dom"
import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shoppage"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";

import "./App.css";


class App extends Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ 
				currentUser: user
			 })
			 console.log(user)
		})
		
	}


	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
	return (

		<div className="App">
			<Header currentUser={this.state.currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
		</div>
		);
	}
}

export default App;
