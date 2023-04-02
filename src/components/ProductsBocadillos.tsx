import { motion, Variants } from "framer-motion";

import React, { useState } from "react";
import { bocadillos_list } from "../constants";
import styles from "../style";
import Modal from "./Modal";
import { product } from "../objects/product";

type Props = {};

const ProductsBocadillos = (props: Props) => {
	const [handleModal, setHandleModal] = useState(false);
	const [itemModal, setItemModal] = useState<product>();
	const handleOnClose = () => setHandleModal(false);
	return (
		<section
			id="ProdutosPaste"
			className={`sm:px-20 px-4 flex items-center justify-center`}>
			<div className="flex flex-wrap gap-16 items-center justify-center relative">
				<div
					className={`w-full ${styles.flexCenter} h-[80px] rounded-md my-10 font-poiret text-[50px] flex-col`}>
					<h1>Nuestros deliciosos bocadillos</h1>
					<hr className=" border-b-2 border-white border w-full mt-7 max-w-[1200px] " />
				</div>
				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full white__gradient" />
				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full pink__gradient" />

				{bocadillos_list.map((item) => {
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
				})}
			</div>

			<Modal visible={handleModal} onClose={handleOnClose} pastel={itemModal} />
		</section>
	);
};

export default ProductsBocadillos;
