import React, { useState } from "react";

type Props = {
	id: string;
	name: string;
	label: string;
	onCounterChange?: (value: number) => void;
};

const Contador = (props: Props) => {
	const [contador, setContador] = useState(1);

	const handleCounterChange = (newValue: number) => {
		setContador(newValue);
		if (props.onCounterChange) {
			props.onCounterChange(newValue);
		}
	};

	const handleSubir = () => {
		setContador(contador + 1);
	};

	const handleRestar = () => {
		if (contador > 1) {
			setContador(contador - 1);
		}
	};

	return (
		<div className="flex items-center gap-2">
			<label htmlFor={props.id} className="font-bold text-lg">
				{props.label}
			</label>
			<div className="flex items-center gap-2">
				<button
					type="button"
					onClick={handleRestar}
					className="bg-gray-200 text-gray-700 rounded-lg h-8 w-8 focus:outline-none hover:bg-gray-300">
					-
				</button>
				<input
					type="number"
					id={props.id}
					name={props.name}
					value={contador}
					min="1"
					max="999"
					className="bg-gray-200 text-center w-12 rounded-lg focus:outline-none px-3 py-2"
					onChange={(e) => setContador(Number(e.target.value))}
				/>
				<button
					type="button"
					onClick={handleSubir}
					className="bg-gray-200 text-gray-700 rounded-lg h-8 w-8 focus:outline-none hover:bg-gray-300">
					+
				</button>
			</div>
		</div>
	);
};

export default Contador;
