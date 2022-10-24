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

	// Fetch data from Sanity
	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		// Trigger shuffle animation of cards
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			// Reset the cards
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<div className="bg-bgWhite flex-1 w-full flex-col">
			<h2 className="text-4xl font-extrabold text-center text-charcoal uppercase">
				My <span className="text-taupe">Creative </span>Portfolio
			</h2>
			{/* Filter through the works */}
			<div className="appworkfilter flex flex-row justify-center items-center flex-wrap mt-16 mr-0 mb-8">
				{["Web App", "React JS", "Full Stack App", "Creative Fun", "All"].map(
					(item, index) => (
						<div
							className={`APP_WORK-FILTER-ITEM py-2 px-4 bg-white rounded-lg hover:text-white font-extrabold cursor-pointer transition-all m-2 hover:bg-taupe lg:py-4 lg:px-8 lg:rounded-xl flex justify-center items-center P-TEXT text-sm text-left text-charcoal ${
								activeFilter === item ? "bg-taupe text-white" : ""
							}`}
							key={index}
							onClick={() => handleWorkFilter(item)}
						>
							{item}
						</div>
					)
				)}
			</div>

			{/* Map over data from Sanity */}
			<motion.div
				className="APPWORKPORTFOLIO flex flex-wrap justify-center items-center"
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
			>
				{filterWork.map((work, index) => (
					<div
						className="w-[270px] flex-col m-8 p-4 bg-white text-charcoal cursor-pointer transition-all rounded-lg hover:shadow-lg hover:shadow-taupe lg:w-[470px] lg:p-5 lg:rounded-xl flex justify-center items-center"
						key={index}
					>
						<div className="w-full h-[230px] relative flex justify-center items-center">
							<img
								className="w-full h-full rounded-lg object-cover lg:h-[230px]"
								src={urlFor(work.imgUrl)}
								alt={work.name}
							/>

							<motion.div
								className="absolute top-0 bottom-0 left-0 right-0 w-full h-full hover:bg-[rgba(0,0,0,0.5)] opacity-0 rounded-lg flex justify-center items-center"
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
							>
								<a href={work.projectLink} target="_blank" rel="noreferrer">
									<motion.div
										className="w-12 h-12 hover:bg-[rgba(0,0,0,0.5)] rounded-lg text-white font-bold cursor-pointer m-4 transition-all flex justify-center items-center"
										whileHover={{ scale: [0, 1] }}
										whileInView={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
									>
										<AiFillEye className="w-1/2 h-1/2 fill-white" />
									</motion.div>
								</a>

								<a href={work.codeLink} target="_blank" rel="noreferrer">
									<motion.div
										className="w-12 h-12 hover:bg-[rgba(0,0,0,0.5)] rounded-lg text-white font-bold cursor-pointer m-4 transition-all flex justify-center items-center"
										whileHover={{ scale: [0, 1] }}
										whileInView={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
									>
										<AiFillGithub className="w-1/2 h-1/2 fill-white" />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="APPWORK-CONTENT p-2 w-full relative flex-col flex justify-center items-center">
							<h4 className="font-bold mt-4">{work.title}</h4>
							<p className="PTEXT" style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<div className="APPWORK-TAG absolute bg-white py-2 px-4 rounded-lg top-[-25px] flex jusitfy-content items-content">
								<p className="PTEXT">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Work, "work");
