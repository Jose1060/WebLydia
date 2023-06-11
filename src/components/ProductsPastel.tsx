import { motion, Variants } from "framer-motion";

import React, { useState } from "react";
import { pasteles_list } from "../constants";
import styles from "../style";
import Modal from "./Modal";
import { product } from "../objects/product";
import SliderEmbla from "./SliderEmbla";
import { EmblaOptionsType } from "embla-carousel-react";
import { FaWhatsapp } from "react-icons/fa";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
type Props = {};

const ProductsPastel = (props: Props) => {
	const [handleModal, setHandleModal] = useState(false);
	const [itemModal, setItemModal] = useState<product>();
	const handleOnClose = () => setHandleModal(false);
	return (
		<section
			id="ProdutosPaste"
			className={`sm:px-10 px-4 flex items-center justify-center`}>
			<div className="flex flex-wrap gap-10 items-center justify-center relative">
				<div
					className={`w-full ${styles.flexCenter} h-[80px] rounded-md mt-10 font-poiret text-[24px] md:text-[50px] flex-col`}>
					<h1>Tortas inolvidables</h1>
					<hr className=" border-b-2 border-white border w-full mt-7 max-w-[1200px] " />
				</div>

				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full white__gradient" />
				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full pink__gradient" />
				<div className="px-12 text-center text-xl">
					<p>
						Te invitamos a descubrir un mundo de tortas exquisitas que reflejan
						la riqueza culinaria de Cajamarca. Cada torta es una obra maestra
						única, elaborada con pasión y cuidado artesanal. Desde la clásica
						torta de chocolate hasta la tentadora torta de frutos rojos, nuestra
						variedad de sabores te deleitará. Sumérgete en la indulgencia de
						nuestras tortas, donde cada rebanada es un viaje culinario que
						celebra la tradición y el sabor auténtico de Cajamarca. Ven y
						descubre por qué nuestras tortas son el dulce emblema de nuestra
						pastelería tradicional
					</p>
				</div>

				<SliderEmbla slides={SLIDES} options={OPTIONS} />
				<button
					className="bg-green-300 px-8 py-2 font-semibold rounded-lg flex items-center gap-2 max-w-[180px] justify-center hover:scale-105 duration-100 text-green-800 text-xl min-w-[250px]"
					onClick={() => {
						setHandleModal(true);
						setItemModal(pasteles_list[0]);
					}}>
					<FaWhatsapp size={24} />
					Cantactar
				</button>
				{/* {pasteles_list.map((item) => {
					return (
						<div
							className="flex flex-col max-w-[500px] rounded-xl hover:scale-105 duration-100 overflow-hidden relative group"
							key={item.id}
							onClick={() => {
								setHandleModal(true);
								setItemModal(item);
							}}>
							<img
								src={item.img}
								alt="imagen de producto"
								className="h-[400px] w-[500px] object-cover rounded-lg"
							/>
							<div className="flex flex-col absolute bottom-0 bg-neutral-800 backdrop-blur-md bg-opacity-50 px-4 pt-5 pb-4">
								<h3 className="text-[20px] mb-2 font-semibold">{item.name}</h3>
								<hr />
								<p className="group-hover:h-[75px] duration-200 h-0 overflow-hidden text-ellipsis text-[14px] text-opacity-50">
									{item.description}
								</p>
							</div>
						</div>
					);
				})} */}
			</div>

			<Modal visible={handleModal} onClose={handleOnClose} pastel={itemModal} />
		</section>
	);
};

export default ProductsPastel;
