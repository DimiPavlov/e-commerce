import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions"

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shoppage"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";

import "./App.css";
import { connect } from "react-redux";


class App extends Component {


	unsubscribeFromAuth = null

	componentDidMount() {
		const { setCurrentUser } = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		  if (userAuth) {
			const userRef = await createUserProfileDocument(userAuth);
	
			userRef.onSnapshot(snapShot => {
			  	setCurrentUser({
				id: snapShot.id,
				  ...snapShot.data()
				})
			});
		  }
	 
		  setCurrentUser( userAuth );
		});
	  }


	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
	return (

		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/signin" render={() => this.props.currentUser ? (
					<Redirect to="/" />) : (<SignInSignUp />)
				} />
			</Switch>
		</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
