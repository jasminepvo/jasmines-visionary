import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div className="bg-hero bg-cover bg-repeat bg-center APP_HEADER flex-1 w-full h-full flex-col pt-28 px-8 pb-0 lg:pt-24 lg:flex-row flex justify-center items-center ">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="APP_HEADER-INFO flex-1 flex-col justify-start items-start lg: w-full lg:mr-0 "
			>
				<div className="APP_HEADER-BADGE w-full flex justify-start items-start lg:justify-end lg:items-end flex-col">
					<div className="BADGE-CMP py-4 px-8 border-white rounded-md flex flex-row w-auto shadow-md lg:justify-start lg:items-start APP-FLEX">
						<span className="flex justify-center items-center text-4xl lg:text-6xl">
							👋🏼
						</span>
						<div style={{ marginLeft: 20 }}>
							<p className="w-full">Hi, I am</p>
							<h1 className="text-3xl font-bold">Jasmine</h1>
						</div>
					</div>

					<div className="tag-cmp py-4 px-8 border-white rounded-md flex-col mt-6 lg:mt-12 w-auto shadow-md app__flex">
						<p className="w-full uppercase text-right">Web Developer</p>
						<p className="w-full uppercase text-right">Freelancer</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="flex-1 h-full flex justify-end items-end relative"
			>
				<img
					src={images.profile}
					alt="profile_bg"
					className="w-full object-contain z-10 lg:m-0"
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					src={images.circle}
					alt="profile_circle"
					className="absolute left-0 right-0 bottom-0 z-0 w-full h-5/6 "
				/>
			</motion.div>

			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="APPHEADERCIRCLES flex-1 flex flex-row lg:flex-col justify-evenly items-start ml-4 h-full"
			>
				{[images.figma, images.react, images.tailwind].map((circle, index) => (
					<div
						className="w-[100px] h-[100px] rounded-full bg-white shadow-md even:m-7 even:w-[150px] even:h-[150px] last-of-type:w-[80px] last-of-type:h-[80px] flex justify-center items-center"
						key={`circle-${index}`}
					>
						<img className="w-3/5 h-3/5" src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, "home");
