import React from "react";
import { pastel } from "../assets";
import styles from "../style";
import { motion, Variants } from "framer-motion";
import PastelCard from "./PastelCard";

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
				className={`w-full ${styles.flexCenter} h-[80px] rounded-md mt-20 font-poiret text-[50px] flex-col`}>
				<h1>Productos</h1>
				<hr className=" border-b-2 border-white border w-full mt-7 max-w-[1200px]" />
			</div>
			<div className={`min-h-screen ${styles.flexCenter}`}>
				<div className="flex-col justify-center items-center max-w-[460px]">
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.2 }}>
						<motion.div variants={titleVariants}>
							<h1 className="text-center font-josefin_slob text-[90px] px-[50px]">
								Pasteles
							</h1>
							<hr className="w-full mt-[45px]" />
							<div className="rounded-full bg-white w-[45px] h-[45px] mt-[15px]" />
						</motion.div>
					</motion.div>
				</div>
			</div>

			<div className="flex-col">
				<PastelCard />
				<div className="h-[400px]" />
				<PastelCard />
				<div className="h-[400px]" />
				<PastelCard />
				<div className="h-[400px]" />
				<PastelCard />
				<div className="h-[400px]" />
				<PastelCard />
				<div className="h-[400px]" />
				<PastelCard />
				<div className="h-[400px]" />
				<PastelCard />
				<div className="h-[400px]" />
				<PastelCard />
			</div>
		</div>
	);
};

export default Pasteles;
