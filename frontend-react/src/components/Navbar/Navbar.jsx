import React, { useState } from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="flex w-full justify-between items-center fixed px-8 py-4 backdrop-blur">
			<div className="flex justify-start">
				<img className="h-20 w-25" src={images.logo} alt="logo" />
			</div>
			<ul className="hidden md:contents flex-1 flex justify-center items-center">
				{["home", "about", "work", "skills"].map((item) => (
					<li
						className="mx-4 cursor-pointer flex-col uppercase"
						key={`link-${item}`}
					>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			{/* Hamburger Menu */}
			<div className="flex justify-center items-center">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX onClick={() => setToggle(false)} />
						{["home", "about", "work", "skills"].map((item) => (
							<li
								// className="fixed z-5 w-4/5 h-screen flex justify-end items-end flex-col bg-charcoal"
								key={item}
							>
								<div className="fixed z-5 p-4 w-4/5 h-screen flex justify-end items-end flex-col bg-[url('../../assets/bgWhite.png')] bg-white bg-cover bg-repeat" />
								<a href={`#${item}`} onClick={() => setToggle(false)}>
									{item}
								</a>
							</li>
						))}
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
