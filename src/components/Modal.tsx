import React, { useState } from "react";
import { products } from "../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { product } from "../objects/product";

type Props = {
	visible: boolean;
	pastel?: product;
	onClose: any;
};

const Modal = (props: Props) => {
	const [texto, setTexto] = useState("");

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const mensaje = `Hola que tal estoy interesado en ${
			props.pastel?.name
		} que estaba en la carta a S./${
			props.pastel!.precio
		}. Los detalles del pepido son los siguientes: 
        ${texto}`;
		const encodedMessage = encodeURIComponent(mensaje);
		const whatsappUrl = `https://wa.me/919001000?text=${encodedMessage}`;
		window.open(whatsappUrl, "_blank");
		console.log(texto);
	};
	const handleOnClose = (e: any) => {
		console.log(e);
		if (e.target.id == "container") {
			props.onClose();
			//console.log("Fuera del contenedor");
		} else {
			//console.log("Dentro del contenedor");
		}
	};
	if (!props.visible) return null;
	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
			onClick={handleOnClose}
			id="container">
			<div className="bg-white p-12 flex flex-col gap-12 rounded w-[1200px] h-[800px] text-gray-800">
				<div className="flex w-auto justify-between">
					<h2 className="text-3xl font-medium">{props.pastel?.name}</h2>
					<AiFillCloseCircle
						size={32}
						onClick={props.onClose}
						className="hover:scale-110 duration-100"
					/>
				</div>
				<div className="flex flex-row gap-10">
					<img
						src={props.pastel?.img}
						alt="imagen de producto"
						className="h-[600px] w-[500px] object-cover rounded-lg"
					/>
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-4">
							<h3 className="font-bold text-lg">Descripción</h3>
							<p>
								Te invitamos a descubrir un mundo de tortas exquisitas que
								reflejan la riqueza culinaria de Cajamarca. Cada torta es una
								obra maestra única, elaborada con pasión y cuidado artesanal.
								Desde la clásica torta de chocolate hasta la tentadora torta de
								frutos rojos, nuestra variedad de sabores te deleitará.
								Sumérgete en la indulgencia de nuestras tortas, donde cada
								rebanada es un viaje culinario que celebra la tradición y el
								sabor auténtico de Cajamarca. Ven y descubre por qué nuestras
								tortas son el dulce emblema de nuestra pastelería tradicional
							</p>
						</div>
						<div className="flex flex-col gap-4">
							<div>
								<h3 className="font-bold text-lg">Precios</h3>
								<p className="text-[14px] text-gray-700 leading-[noen]">
									Te invitamos a contactarnos para averiguar el precio adecuado
									a tus necesidades
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div>
								<h3 className="font-bold text-lg">Contactanos 😃</h3>
								<p className="text-[14px] text-gray-700 leading-[noen]">
									¿Preguntas sobre nuestros pasteles? ¡Contáctanos por WhatsApp
									y estaremos encantados de ayudarte!
								</p>
							</div>
							<form
								onSubmit={handleSubmit}
								className="flex flex-col items-end gap-4">
								<textarea
									value={texto}
									className="bg-white border rounded-lg border-spacing-4 p-2 border-gray-200 w-full focus:border-blue-100 focus:border-none"
									onChange={(e) => setTexto(e.target.value)}
								/>
								<button
									type="submit"
									className="bg-green-300 px-8 py-2 font-semibold rounded-lg flex items-center gap-2 max-w-[180px] justify-center hover:scale-105 duration-100">
									<FaWhatsapp size={24} />
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
