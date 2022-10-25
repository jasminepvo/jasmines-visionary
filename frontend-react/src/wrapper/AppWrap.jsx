import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName) =>
	function HOC() {
		return (
			<div id={idName} className="w-full min-h-screen flex flex-row">
				<div className="flex justify-center items-center flex-1 w-full flex-col ">
					<SocialMedia />
					<Component />
					<NavigationDots active={idName} />
					{/* <div className="p-8 w-full pt-8 flex flex-col justify-end items-end uppercase">
						<p className=" text-sm text-left text-charcoal lg:text-md">
							@2020 Jasmine Vo
						</p>
						<p className=" text-sm text-left text-charcoal lg:text-md">
							All Rights Reserved
						</p>
					</div> */}
				</div>
			</div>
		);
	};

export default AppWrap;
