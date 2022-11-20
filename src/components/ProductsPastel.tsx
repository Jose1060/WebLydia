import { motion, Variants } from "framer-motion";

import React from "react";
import { cakes } from "../constants";
import styles from "../style";

type Props = {};

const ProductsPastel = (props: Props) => {
	const prodVariants: Variants = {
		offscreen: {
			y: 100,
			opacity: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 5,
			},
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 5,
			},
		},
	};

	const onFocus: Variants = {
		onfocus: {
			scale: 110,
		},
	};

	return (
		<section
			id="ProdutosPaste"
			className={`sm:px-20 px-4 flex items-center justify-center`}>
			<div className="flex flex-wrap gap-16 items-center justify-center relative">
				<div
					className={`w-full ${styles.flexCenter} h-[80px] rounded-md my-10 font-poiret text-[50px] flex-col`}>
					<h1>Carta</h1>
					<hr className=" border-b-2 border-white border w-full mt-7 max-w-[1200px] " />
				</div>

				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full white__gradient" />
				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full pink__gradient" />

				{cakes.map((item) => {
					return (
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							exit="offscreen"
							viewport={{ once: false, amount: 0.2 }}>
							<motion.div
								variants={prodVariants}
								className="flex flex-col max-w-[300px] rounded-xl hover:scale-105 duration-100  p-4">
								<img
									src={item.img}
									alt="imagen de producto"
									className="h-[300px] w-[300px] object-cover rounded-lg"
								/>
								<div className="justify-center items-center flex flex-col mt-5">
									<h3 className="text-center font-josefin_slob text-[30px] mb-5">
										{item.name}
									</h3>
									<p className="text-center">{item.description}</p>
								</div>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default ProductsPastel;
