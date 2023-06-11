import { img_pastel_01 } from "../assets";
import { pasteles_list } from "../constants";
import React, { useState, useEffect, useRef } from "react";

type Props = {};

const Slider = (props: Props) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const intervalId = setInterval(() => {
			scrollToRight();
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const scrollToRight = () => {
		if (scrollContainerRef.current) {
			const scrollContainer = scrollContainerRef.current;
			if (
				scrollContainer.scrollLeft + scrollContainer.clientWidth ===
				scrollContainer.scrollWidth
			) {
				scrollContainer.scrollLeft = 0;
			}
			scrollContainer.scrollLeft += 500; // Cambia este valor según tus necesidades
		}
	};

	return (
		<div>
			<div className="flex items-center py-6">
				<div
					id="slider"
					className="w-full flex flex-row snap-x overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth ease-in-out  scrollbar-hide container-snap duration-300"
					ref={scrollContainerRef}>
					{pasteles_list.map((item) => (
						<div key={`slide_${item.id}`}>
							<img
								className="w-[3000px] inline-blockp p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 h-[400px] max-h-[400px] min-h-[400px] max-w-[300px]"
								src={item.img}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;
