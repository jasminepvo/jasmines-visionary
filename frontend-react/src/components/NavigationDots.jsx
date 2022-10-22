import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className="APPNAVIGATION">
			{["home", "about", "work", "skills"].map((item, index) => (
				<a
					className="APP-NAV-DOT"
					href={`#${item}`}
					key={item + index}
					style={active === item ? { backgroundColor: "#313BAC" } : {}}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
