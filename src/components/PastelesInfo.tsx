import React from "react";
import { MdOutlineCake } from "react-icons/md";
import { img_pastel_07 } from "../assets";

type Props = {};

const PastelesInfo = (props: Props) => {
	return (
		<div className="flex mx-24 wi rounded-lg gap-10 justify-items-stretch">
			<div className="px-4 py-4 border border-gray-500 rounded-lg flex flex-col gap-4 flex-1 bg-white text-gray-900">
				<img
					src={img_pastel_07}
					alt="pastel de vainilla"
					className="rounded-xl"
				/>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-4 items-center">
						<MdOutlineCake size={24} color="skyblue" height={100} />
						<h1 className="text-xl font-semibold">
							Tortas de Keke de vainilla
						</h1>
					</div>
					<p className="text-gray-400">
						Tortas con pasas y castañas | decoración chanthlly con jalea de
						frutas.
					</p>
					<hr />
				</div>
				<div>
					<h2 className=" text-sm text-orange-300">Adicionales</h2>
					<div className="px-4">
						<div>
							<li>Relleno Manjar blanco o mermelada</li>
						</div>
						<div>
							<li>Relleno de la casa</li>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 py-4 rounded-lg flex flex-col gap-4 flex-1">
				<div className="flex flex-col gap-2">
					<h1 className="text-xl font-semibold">
						Tortas de keke de chocolate humedo
					</h1>
					<p className="text-gray-400">
						Tortas con decoración de chanhlly crema moka.
					</p>
					<hr />
				</div>
				<div>
					<h2 className=" text-sm text-orange-300">Adicionales</h2>
					<div className="px-4">
						<div>
							<li>Relleno Manjar blanco o mermelada</li>
						</div>
						<div>
							<li>Relleno de la casa</li>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 py-4 rounded-lg flex flex-col gap-4 flex-1">
				<div className="flex flex-col gap-2">
					<h1 className="text-xl font-semibold">Tortas tres leches</h1>
					<p className="text-gray-400">Clasica torta de tres leches</p>
					<hr />
				</div>
				<div>
					<h2 className=" text-sm text-blue-300 font-semibold">Sabores</h2>
					<div className="px-4">
						<div>
							<li>Vainilla</li>
						</div>
						<div>
							<li>Chocolate</li>
						</div>
						<div>
							<li>Red velvet</li>
						</div>
						<div>
							<li>Vainilla y chocolate 1/2</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PastelesInfo;
