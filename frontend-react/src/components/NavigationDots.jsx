import React from "react";

// prop - active tells us which section we are on currently
const NavigationDots = ({ active }) => {
	return (
		<div className="hidden md:flex justify-end items-right right-4 flex-col p-4 z-50 absolute">
			{["home", "about", "work", "skills"].map((item, index) => (
				<a
					className="w-2 h-2 rounded-full bg-lightGrey m-2 hover:bg-taupe lg:w-3 lg:h-3"
					href={`#${item}`}
					key={item + index}
					style={active === item ? { backgroundColor: "#AD9D90" } : {}}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
