import { motion, Variants } from "framer-motion";

import React, { useState } from "react";
import { pasteles_list } from "../constants";
import styles from "../style";
import Modal from "./Modal";
import { product } from "../objects/product";

type Props = {};

const ProductsPastel = (props: Props) => {
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
					<h1>Pasteles inolvidables</h1>
					<hr className=" border-b-2 border-white border w-full mt-7 max-w-[1200px] " />
				</div>

				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full white__gradient" />
				<div className="absolute z-[-20] top-0 w-[70%] h-[30%] rounded-full pink__gradient" />

				{pasteles_list.map((item) => {
					return (
						<div
							className="flex flex-col max-w-[300px] rounded-xl hover:scale-105 duration-100  p-4"
							key={item.id}
							onClick={() => {
								setHandleModal(true);
								setItemModal(item);
							}}>
							<img
								src={item.img}
								alt="imagen de producto"
								className="h-[270px] w-[300px] object-cover rounded-lg"
							/>
							<div className="justify-center items-center flex flex-col mt-5">
								<h3 className="text-center font-josefin_slob text-[24px] mb-5">
									{item.name}
								</h3>
								<p className="w-[280px] h-[75px] overflow-hidden text-center text-ellipsis text-[16px] text-opacity-50">
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

export default ProductsPastel;
