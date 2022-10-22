import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			setAbouts(data);
		});
	}, []);

	return (
		<div className="flex-1 w-full flex-col bg-bgWhite pt-12">
			<h2 className=" HEADTEXT text-center text-3xl font-bold text-charcoal">
				I Know That
				<span className="text-taupe"> Good Apps</span>
				<br />
				Means
				<span className="text-taupe"> Good Business</span>
			</h2>

			<div className="flex-row flex-1 flex justify-center flex-start flex-wrap mt-8">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opactiy: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="PROFILE-ITEM w-[190px] flex justify-start items-start flex-col m-8 lg:w-[370px] lg:my-8 lg:mx-16"
						key={about.title + index}
					>
						<img
							className="w-full h-[170px] rounded-xl object-cover lg:h-[300px] "
							src={urlFor(about.imgUrl)}
							alt={about.title}
						/>
						<h2 className="font-bold" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="P-TEXT" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default About;
