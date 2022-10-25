import React from "react";
import { SocialMedia } from "../../components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosCopy } from "react-icons/io";

const Footer = () => {
	// state = {
	// 	value: "jasminepvo.dev@gmail.com",
	// 	copied: false,
	// };

	return (
		<div className="flex justify-center items-center flex-col bg-bgWhite pt-16">
			<p className="text-charcoal">Send any inquiries to: </p>
			<CopyToClipboard
				className="pb-8 flex flex-row hover:underline text-charcoal hover:text-taupe "
				text="jasminepvo.dev@gmail.com"
			>
				<p>
					jasminepvo.dev@gmail.com <IoIosCopy />
				</p>
			</CopyToClipboard>
		</div>
	);
};

export default Footer;
