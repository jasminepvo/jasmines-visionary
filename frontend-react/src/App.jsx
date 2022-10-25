import React from "react";

import { Header, About, Work, Skills, Footer } from "./container";
import { Navbar } from "./components";

const App = () => {
	return (
		<div className="">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Footer />
		</div>
	);
};

export default App;
