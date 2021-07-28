import React from "react";

import { Route, Switch } from "react-router-dom"

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shoppage"
import Header from "./components/header/Header"

import "./App.css";


function App() {
	return (

		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
