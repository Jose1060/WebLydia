import React, { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { pasteles_list } from "../constants";
const TWEEN_FACTOR = 4.2;
import Autoplay from "embla-carousel-autoplay";

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max);

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

const SliderEmbla: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
	const [tweenValues, setTweenValues] = useState<number[]>([]);

	const onScroll = useCallback(() => {
		if (!emblaApi) return;

		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();

		const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
			let diffToTarget = scrollSnap - scrollProgress;

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.target();
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target);
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
					}
				});
			}
			const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
			return numberWithinRange(tweenValue, 0, 1);
		});
		setTweenValues(styles);
	}, [emblaApi, setTweenValues]);

	useEffect(() => {
		if (!emblaApi) return;

		onScroll();
		emblaApi.on("scroll", () => {
			flushSync(() => onScroll());
		});
		emblaApi.on("reInit", onScroll);
	}, [emblaApi, onScroll]);

	return (
		<div className="embla w-full">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{pasteles_list.map((item) => (
						<div
							className="embla__slide"
							key={item.id}
							style={{
								...(tweenValues.length && {
									opacity: tweenValues[item.id],
									scale: tweenValues[item.id],
								}),
							}}>
							<div className="embla__slide__number">
								<span>{item.id}</span>
							</div>
							<img
								className="embla__slide__img rounded-xl object-cover"
								src={item.img}
								alt="Your alt text"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SliderEmbla;
