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
		<div className="flex justify-center items-center bg-bgWhite">
			<h2>Skills</h2>
			<div className="skillscontainer">
				<motion.div className="appskillslist">
					{skills.map((skill) => (
						<motion.div
							className="flex justify-center items-center appskills-item"
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							key={skill.name}
						>
							<div
								className="flex justify-center items-content"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p>{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default AppWrap(Skills, "skills");
