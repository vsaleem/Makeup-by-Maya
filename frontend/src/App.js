//@ts-check
import { render } from "@testing-library/react";
import React from "react";
// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
// import { UserForm } from './components/Form/UserForm'
import Serums from "./pages/Serums";

function App() {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Serums />
			</main>
			<Footer />
		</>
	);
}
export default App;
