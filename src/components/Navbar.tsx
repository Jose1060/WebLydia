import { useState } from "react";
import { close, logo, menu } from "../assets";
import { LnavLinks, RnavLinks } from "../constants";

type Props = {};

const Navbar = (props: Props) => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex py-6 justify-center items-center absolute left-0 top-0 px-4 z-10">
			{/* <ul className="list-none sm:flex hidden justify-between items-center ">
				{LnavLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`text-[18px] ${
							index === LnavLinks.length - 1 ? "mr-5" : "mr-10"
						} text-white min-w-[90px] text-center`}>
						<a className="cursor-pointer font-poiret" href={`#${nav.id}`}>
							{nav.title}
						</a>
					</li>
				))}
			</ul> */}
			<img src={logo} alt="logo" className="w-[95px] h-[100px]" />
			{/* <ul className="list-none sm:flex hidden justify-end items-center ">
				{RnavLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`text-[18px] ${index === 0 ? "ml-5 mr-10" : ""} ${
							index === RnavLinks.length - 1 ? "mr-0" : "mr-10"
						} text-white min-w-[90px] text-center`}>
						<a className="cursor-pointer font-poiret" href={`#${nav.id}`}>
							{nav.title}
						</a>
					</li>
				))}
			</ul>
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[18px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-gray-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{LnavLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white`}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
						{RnavLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									index === RnavLinks.length - 1 ? "mb-0" : "mb-4"
								} text-white`}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div> 
			</div>*/}
		</nav>
	);
};

export default Navbar;
