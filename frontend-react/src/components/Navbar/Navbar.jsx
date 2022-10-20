import React from "react";
import { images } from "../../constants";
import { About } from "../../container";

const Navbar = () => {
	return (
		<nav>
			<div>
				<img className="h-40 w-40 object-cover" src={images.logo} alt="logo" />
			</div>
			<ul>
				{["home", "about", "work", "skills"].map((item) => (
					<li className="flex justify-center" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
