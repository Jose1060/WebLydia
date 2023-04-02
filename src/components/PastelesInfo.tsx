import { MdOutlineCake } from "react-icons/md";
import { img_pastel_05, img_pastel_07, img_pastel_08 } from "../assets";

type Props = {};

const PastelesInfo = (props: Props) => {
	return (
		<div className="flex mx-24 wi rounded-lg gap-10 justify-items-stretch">
			<div className="px-4 py-4 border border-neutral-800 rounded-lg flex flex-col gap-6 flex-1 backdrop-blur-xl bg-stone-800 bg-opacity-30 hover:bg-opacity-50 hover:text-pink-300 text-white hover:scale-105 duration-300">
				<img
					src={img_pastel_07}
					alt="pastel de vainilla"
					className="rounded-xl"
				/>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-4 items-center">
						<h1 className="text-2xl font-bold">Tortas de Keke de vainilla</h1>
						<MdOutlineCake size={24} height={100} />
					</div>
					<p className="text-white">
						Tortas con pasas y castañas | decoración chanthlly con jalea de
						frutas.
					</p>
					<hr />
				</div>
				<div>
					<h2 className=" text-sm text-fuchsia-400 font-bold">Adicionales</h2>
					<div className="px-4 text-white">
						<div>
							<li>Relleno Manjar blanco o mermelada</li>
						</div>
						<div>
							<li>Relleno de la casa</li>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 py-4 border border-neutral-800 rounded-lg flex flex-col gap-6 flex-1 bg-stone-800 bg-opacity-30 hover:bg-opacity-50 hover:text-purple-300 text-white hover:scale-105 duration-300">
				<img
					src={img_pastel_05}
					alt="pastel de vainilla"
					className="rounded-xl"
				/>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-4 items-center">
						<h1 className="text-2xl font-bold">
							Tortas de keke de chocolate humedo
						</h1>
						<MdOutlineCake size={24} height={100} />
					</div>
					<p className="text-white">
						Tortas con decoración de chanhlly crema moka.
					</p>
					<hr />
				</div>
				<div>
					<h2 className=" text-sm text-orange-300 font-bold">Adicionales</h2>
					<div className="px-4 text-white">
						<div>
							<li>Relleno Manjar blanco o mermelada</li>
						</div>
						<div>
							<li>Relleno de la casa</li>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 py-4 border border-neutral-800 rounded-lg flex flex-col gap-6 flex-1 bg-stone-800 bg-opacity-30 hover:bg-opacity-50 hover:text-fuchsia-300 text-white hover:scale-105 duration-300">
				<img
					src={img_pastel_08}
					alt="pastel de vainilla"
					className="rounded-xl"
				/>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-4 items-center">
						<h1 className="text-2xl font-bold">Tortas tres leches</h1>
						<MdOutlineCake size={24} height={100} />
					</div>
					<p className="text-white">Clasica torta de tres leches</p>
					<hr />
				</div>
				<div>
					<h2 className=" text-sm text-blue-300 font-bold">Sabores</h2>
					<div className="px-4 text-white">
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
