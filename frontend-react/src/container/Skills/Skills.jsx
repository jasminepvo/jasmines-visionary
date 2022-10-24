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
		</div>
	);
};

export default AppWrap(Skills, "skills");
