import React, { useState } from "react";
import { products } from "../constants";
import styles, { layout } from "../style";

type Props = {};

function Modal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)}>Abrir modal</button>
			{showModal ? (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={() => setShowModal(false)}>
							&times;
						</span>
						<p>Este es el contenido del modal.</p>
					</div>
				</div>
			) : null}
		</>
	);
}

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
			<Modal />
			<div>
				{products.map((product) => (
					<div
						className={`${styles.flexCenter} ease-in-out transition my-10 delay-50 hover:scale-105 hover:-translate-y-1 duration-300`}>
						<div
							className={`min-h-[300px] w-full bg-gray-200 rounded-xl ${layout.section}`}>
							<div
								className={`flex flex-col sm:px-16 px-6 ${layout.sectionInfo}`}>
								<h4 className="text-black font-marmelad text-[30px]">
									{product.name}
								</h4>
								<div className=" border-b-2 border-orange-500 border w-full mt-7 mb-4" />
								<p
									className={`font-marmelad text-black font-normal text-[16px] ${styles.paragraph}`}>
									{product.description}
								</p>
							</div>
							<div className={`${layout.sectionImg}`}>
								<img
									src={product.img}
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
