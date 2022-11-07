import React from "react";
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import { logo } from "../assets";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="pt-[90px] pb-[50px] bg-footer-texture bg-cover px-4 md:px-0 mt-[250px]">
			<div className="flex flex-wrap justify-between max-w-[1200px] m-auto mt-[100px] text-gray-600">
				<div className="max-w-[350px]">
					<img src={logo} alt="logo" className="w-[90px]" />
					<p className="mt-5 text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
						magnam possimus minima nam eaque itaque veritatis repellendus nisi
						ipsum consequuntur alias at recusandae voluptates cupiditate est
						eius, iusto ullam molestias.
					</p>
				</div>
				<div className="flex flex-col pt-10">
					<h2 className=" text-[28px] mb-5 font-marmelad font-bold text-gray-700">
						Soluciones
					</h2>
					<a href="#">Develop App</a>
					<a href="#">Develop Android</a>
					<a href="#">Marketing App</a>
					<a href="#">Develop Ios</a>
				</div>
				<div className="flex flex-col pt-10">
					<h2 className=" text-[28px] mb-5 font-marmelad font-bold text-gray-700">
						Compañia
					</h2>
					<a href="#">Acerca de</a>
					<a href="#">Trabajos</a>
					<a href="#">Procesos</a>
					<a href="#">Servicios</a>
				</div>
				<div className="flex flex-col pt-10">
					<h2 className=" text-[28px] mb-5 font-marmelad font-bold text-gray-700">
						Redes sociales
					</h2>
					<a href="#" className="flex flex-row">
						<FaFacebook className="mr-2" /> <p>Facebook</p>
					</a>
					<a href="#" className="flex flex-row">
						<FaTwitter className="mr-2" /> <p>Twitter</p>
					</a>
					<a href="#" className="flex flex-row">
						<FaTiktok className="mr-2" /> <p>Tiktok</p>
					</a>
					<a href="#" className="flex flex-row">
						<FaInstagram className="mr-2" /> <p>Instagram</p>
					</a>
				</div>
			</div>
			<div className=" max-w-[1200px] m-auto text-center py-[40px]">
				<hr className=" border-none h-[1px] bg-slate-800" />
				<p className="mt-8 text-gray-500">
					Todos los derechos reservados 2022 ©
					<b className="text-gray-600"> Lydia</b>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
