import React from "react";
import { Route, Switch } from "react-router-dom"
import HomePage from "./pages/homepage/Homepage";

import "./App.css";

const HatsPage = () => (
	<h1>Hats for life</h1>
)

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
