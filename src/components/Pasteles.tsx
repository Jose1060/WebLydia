import React from "react";
import styles from "../style";
import { motion, Variants } from "framer-motion";
import PastelCard from "./PastelCard";
import ProductsPastel from "./ProductsPastel";
import { img_pastel_08, img_pastel_10, img_pastel_24, pastel } from "../assets";
import BocadilloCard from "./BocadilloCard";
import ProductsBocadillos from "./ProductsBocadillos";

type Props = {};

const Pasteles = (props: Props) => {
	const titleVariants: Variants = {
		offscreen: {
			y: 100,
			opacity: 0,
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

	return (
		<div>
			<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full white__gradient" />
			<div className="absolute z-[-21] bottom-0 w-[70%] h-[30%] rounded-full orange__gradient" />
			<div
				className={`w-full ${styles.flexCenter} h-[80px] rounded-md my-56 font-poiret text-[50px] flex-col`}>
				<h1>Le ofrecemos 😊</h1>
				<hr className=" border-b-2 border-white border w-full mt-7 max-w-[1200px] " />
			</div>
			{/* <div className="min-h-screen ">
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: false, amount: 0.2 }}
					className={`${styles.flexCenter} w-full sm:px-0 px-20`}>
					<motion.div
						variants={titleVariants}
						className="flex-col flex justify-center items-center border-white border-2  lg:w-[1300px] w-full md:mx-10 md:w-[1000px] h-[600px] relative rounded-xl">
						<div className="rounded-xl blur w-full h-full absolute -z-10">
							<img
								src={img_pastel_24}
								alt="img"
								className="w-full h-full object-cover"
							/>
						</div>
						<h1 className="text-center font-josefin_slob md:text-[90px] text-[50px] px-[50px]">
							Tortas
						</h1>
						<hr className="w-full mt-[45px] max-w-[400px] border-2 rounded-lg" />
						<div className="rounded-full bg-white w-[25px] h-[25px] mt-[15px]" />
					</motion.div>
				</motion.div>
			</div> */}

			<div className="flex-col">
				<PastelCard />
				<div className="h-[400px]" />
				<ProductsPastel />
				<div className="h-[400px]" />
				<BocadilloCard />
				<div className="h-[400px]" />
				<ProductsBocadillos />
			</div>
		</div>
	);
};

export default Pasteles;
