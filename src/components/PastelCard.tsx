import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "../style";
import { img_pastel_20, pastel } from "../assets";
import PastelesInfo from "./PastelesInfo";

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
		<div className="flex flex-col gap-60">
			<div className="flex sm:flex-row flex-col md:justify-end justify-between gap-10">
				<div className="flex flex-col justify-center gap-9 lg:mr-[220px] md:mr-[100px] mr-[0px] md:max-w-[370px] lg:max-w-[770px] sm:max-w-[320px] max-w-[330px] px-4 md:px-0">
					<motion.div
						className="card-container"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: false, amount: 0.5 }}>
						<motion.div variants={textCardVariants}>
							<h1 className="font-josefin_slob md:text-[70px] text-[55px] leading-[80px] md:leading-[90px]">
								Tortas
							</h1>
							<hr className="my-5" />
							<p className="md:text-[18px] text-[16px]">
								¿Buscas algo dulce y delicioso para endulzar tu día? ¡No busques
								más! En nuestra pastelería, elaboramos tortas y pasteles de alta
								calidad con los mejores ingredientes y una atención excepcional
								al detalle. Desde los clásicos hasta los sabores más
								innovadores, tenemos algo para satisfacer cualquier antojo. ¡Haz
								tu pedido hoy y sorprende a tu paladar con nuestras creaciones
								únicas!
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
							src={img_pastel_20}
							alt="pastel"
							className="rounded-l-[120px] h-screen object-cover"
						/>
					</motion.div>
				</motion.div>
			</div>
			<PastelesInfo />
		</div>
	);
};

export default PastelCard;
