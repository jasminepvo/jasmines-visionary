import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	return (
		<div className="bg-bgWhite">
			<h2 className="text-4xl font-extrabold text-center text-charcoal uppercase">
				My <span className="text-taupe">Creative </span>Portfolio
			</h2>
			<div className="appworkfilter">
				{["Web App", "React JS", "Full Stack App", "Creative Fun", "All"].map(
					(item, index) => (
						<div
							className={`APP_WORK-FILTER-ITEM flex justify-center items-center P-TEXT text-sm text-left text-charcoal ${
								activeFilter === item ? "item-active" : ""
							}`}
							key={index}
							onClick={() => handleWorkFilter(item)}
						>
							{item}
						</div>
					)
				)}
			</div>

			<motion.div
				className="APPWORKPORTFOLIO"
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
			>
				{filterWork.map((work, index) => (
					<div
						className="APPWORK-ITEM flex justify-center items-center"
						key={index}
					>
						<div className="APPWORK-IMG flex justify-center items-center">
							<img src={urlFor(work.imgUrl)} alt={work.name} />
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Work;
