import React, { useState } from "react";
import { images } from "../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="flex w-full justify-between items-center fixed px-8 py-4 backdrop-blur">
			<div className="flex justify-start">
				<img className="h-20 w-25" src={images.logo} alt="logo" />
			</div>

			{/* Desktop Menu */}
			<ul className="hidden flex-1 lg:flex justify-center items-center">
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
			<div className="flex justify-center items-center lg:hidden">
				<HiMenuAlt4
					className="bg-taupe w-[35px] h-[35px] fill-white"
					onClick={() => setToggle(true)}
				/>

				{toggle && (
					<motion.div
						className="fixed top-0 bottom-0 right-0 z-100 p-4 w-4/5 h-screen flex justify-end items-end bg-taupe bg-cover bg-repeat shadow-2xl shadow-charcoal flex-col"
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX
							className="w-[35px] h-[35px] fill-white"
							onClick={() => setToggle(false)}
						/>
						<ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
							{["home", "about", "work", "skills"].map((item) => (
								<li
									className="m-4 font-medium text-base uppercase cursor-auto hover:bg-white p-1"
									key={item}
								>
									{/* Close anchor tag after click */}
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
