import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="hidden lg:flex justify-end items-end left-4 flex-col p-4 z-50 absolute">
			<div className="w-10 h-10 rounded-full bg-white my-1 mx-0 border-charcoal border-1 flex justify-center items-center hover:bg-taupe">
				<FaLinkedinIn />
			</div>
			<div className="w-10 h-10 rounded-full bg-white my-1 mx-0 border-charcoal border-1 flex justify-center items-center hover:bg-taupe">
				<BsGithub />
			</div>
			<div className="w-10 h-10 rounded-full bg-white my-1 mx-0 border-charcoal border-1 flex justify-center items-center hover:bg-taupe">
				<BsTwitter />
			</div>
		</div>
	);
};

export default SocialMedia;
