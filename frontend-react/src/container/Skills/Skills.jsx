import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setSkills(data);
		});
	});

	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		const url = "https://api.goprogram.ai/inspiration";

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setQuote(json.quote);
				setAuthor(json.author);
				console.log(json.quote);
				console.log(json.author);
			} catch (error) {
				console.log("error", error);
			}
		};
		fetchData();
	}, []);

	// const getFetch = () => {
	// 	const url = "https://api.goprogram.ai/inspiration";

	// 	fetch(url)
	// 		.then((res) => res.json()) // parse response as JSON
	// 		.then((response) => {
	// 			document.querySelector(
	// 				".quote"
	// 			).innerText = `"${response.quote}" - ${response.author}`;
	// 		})
	// 		.catch((err) => {
	// 			console.log(`error ${err}`);
	// 		});
	// };
	// getFetch();

	return (
		<div className="bg-bgWhite flex-1 w-full flex-col flex justify-center items-center">
			<h2 className="text-4xl font-extrabold text-taupe uppercase">
				Whats my tech stack?
			</h2>
			<div className="w-4/5 mt-12 flex flex-row md:w-full md:flex-col">
				<motion.div className="flex-1 flex flex-wrap justify-center items-center mx-10 md:mx-24 lg:mx-28">
					{skills.map((skill) => (
						<motion.div
							className="flex justify-center items-center flex-col text-center m-4 transition-all"
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							key={skill.name}
						>
							<div
								className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full hover:shadow-taupe hover:shadow-sm"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img
									className="w-4/5 h-4/5 hover:animate-[spin_1s_infinite]"
									src={urlFor(skill.icon)}
									alt={skill.name}
								/>
							</div>
							<p className="mt-4 lg:mt-8">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Add quote api */}
			<div className="pt-40 flex justify-center items-center flex-col p-12 text-center">
				<h2 className="uppercase text-charcoal font-bold text-2xl pb-8">
					Come back for a <span className="text-taupe">new quote</span> every
					hour
				</h2>
				<div className="bg-white rounded-lg p-8 shadow-md flex justify-center items-center flex-col">
					<p className="font-semibold italic">"{quote}"</p>
					<span className="text-right">- {author}</span>
				</div>
			</div>
		</div>
	);
};

export default AppWrap(Skills, "skills");
