import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "../style";
import { pastel } from "../assets";

type Props = {};

const PastelCard = (props: Props) => {
	const cardVariants: Variants = {
		offscreen: {
			x: 380,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 3,
			},
		},
		onscreen: {
			x: 50,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 1.2,
			},
		},
	};

	const textCardVariants: Variants = {
		offscreen: {
			x: -1100,
			transition: {
				type: "spring",
				bounce: 0.2,
				duration: 3,
			},
		},
		onscreen: {
			x: 50,
			transition: {
				type: "spring",
				bounce: 0.2,
				duration: 1.2,
			},
		},
	};
	return (
		<div className="flex sm:flex-row flex-col md:justify-end justify-between gap-10">
			<div className="flex flex-col justify-center gap-9 lg:mr-[220px] md:mr-[100px] mr-[0px] md:max-w-[370px] lg:max-w-[770px] sm:max-w-[320px] max-w-[330px] px-4 md:px-0">
				<motion.div
					className="card-container"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: false, amount: 0.5 }}>
					<motion.div variants={textCardVariants}>
						<h1 className="font-josefin_slob md:text-[70px] text-[55px] leading-[80px] md:leading-[90px]">
							Tortas y Pasteles
						</h1>
						<hr className="my-5" />
						<p className="font-josefin_slob md:text-[25px] text-[20px] md:leading-8 leading-8 px-4">
							¿Buscas algo dulce y delicioso para endulzar tu día? ¡No busques
							más! En nuestra pastelería, elaboramos tortas y pasteles de alta
							calidad con los mejores ingredientes y una atención excepcional al
							detalle. Desde los clásicos hasta los sabores más innovadores,
							tenemos algo para satisfacer cualquier antojo. ¡Haz tu pedido hoy
							y sorprende a tu paladar con nuestras creaciones únicas!
						</p>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: false, amount: 0.2 }}>
				<motion.div variants={cardVariants}>
					<img
						src={pastel}
						alt="pastel"
						className="rounded-l-[120px] h-screen object-cover"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default PastelCard;
