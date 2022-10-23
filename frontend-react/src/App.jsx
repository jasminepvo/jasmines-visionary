import React from "react";

import { About, Footer, Header, Work } from "./container";
import { Navbar, SocialMedia } from "./components";

const App = () => {
	return (
		<div className="">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Footer />
		</div>
	);
};

export default App;
