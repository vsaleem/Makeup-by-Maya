//@ts-check
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
// import { UserForm } from './components/Form/UserForm'
import Serums from "./pages/Serums";
import ProductScreen from "./components/ProductScreen";

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className='py-3'>
					<Container>
						<Route path='/serums' component={Serums} exact />
						<Route path='/product/:id' component={ProductScreen} />
					</Container>
				</main>
				<Footer />
			</Router>
		</>
	);
}
export default App;
