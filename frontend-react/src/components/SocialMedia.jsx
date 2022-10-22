import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="flex justify-end items-left flex-col p-4 absolute z-50">
			<div className="w-10 h-10 rounded-full bg-white my-1 mx-0 border-charcoal border-1 flex justify-center items-center hover:transition-all">
				<FaLinkedinIn />
			</div>
			<div className="w-10 h-10 rounded-full bg-white my-1 mx-0 border-charcoal border-1 flex justify-center items-center hover:transition-all">
				<BsGithub />
			</div>
			<div className="w-10 h-10 rounded-full bg-white my-1 mx-0 border-charcoal border-1 flex justify-center items-center hover:transition-all">
				<BsTwitter />
			</div>
		</div>
	);
};

export default SocialMedia;
