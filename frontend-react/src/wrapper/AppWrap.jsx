import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<div className="APPWRAPPER APPFLEX">
					<Component />

					<div className="w-full pt-8 flex flex-col justify-end items-end uppercase">
						<p>@2020 Jasmine Vo</p>
						<p>All Rights Reserved</p>
					</div>
				</div>

				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
