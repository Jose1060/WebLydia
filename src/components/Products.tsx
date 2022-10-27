import React from "react";
import { bocadillos } from "../assets";
import { products } from "../constants";
import styles, { layout } from "../style";

type Props = {};

const Products = (props: Props) => {
	return (
		<section className="min-h-screen">
			<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full white__gradient" />
			<div className="absolute z-[-21] bottom-0 w-[70%] h-[30%] rounded-full orange__gradient" />
			<div
				className={`w-full ${styles.flexCenter} h-[80px] rounded-md mt-20 font-poiret text-[50px] flex-col`}>
				<h1>Productos</h1>
				<div className=" border-b-2 border-white border w-full mt-7" />
			</div>
			<div>
				{products.map((producto) => (
					<div
						className={`${styles.flexCenter} ease-in-out transition my-10 delay-50 hover:scale-105 hover:-translate-y-1 duration-300`}>
						<div
							className={`min-h-[300px] w-full bg-gray-200 rounded-xl ${layout.section}`}>
							<div
								className={`flex flex-col sm:px-16 px-6 ${layout.sectionInfo}`}>
								<h4 className="text-black font-marmelad text-[30px]">
									{producto.name}
								</h4>
								<div className=" border-b-2 border-orange-500 border w-full mt-7 mb-4" />
								<p
									className={`font-marmelad text-black font-normal text-[16px] ${styles.paragraph}`}>
									{producto.description}
								</p>
							</div>
							<div className={`${layout.sectionImg}`}>
								<img
									src={producto.img}
									alt="bocadillos"
									className="md:w-[450px] w-[80%] h-auto"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products;
