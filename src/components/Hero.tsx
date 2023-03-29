import { bgHero, bgHero2, bgHero3, bgHero4, bgHero5 } from "../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Props = {};

const Hero = (props: Props) => {
	return (
		<section
			id="home"
			className="w-full h-screen flex items-center justify-center">
			<div className="backdrop-blur-sm bg-black/10 w-full h-screen absolute z-0" />
			<div className="left-0 -z-10 absolute w-full h-screen">
				<div>
					<Carousel
						autoPlay={true}
						infiniteLoop={true}
						showArrows={false}
						showStatus={false}
						showThumbs={false}
						transitionTime={2000}
						interval={7000}
						showIndicators={false}>
						<div>
							<img
								src={bgHero}
								alt="bg"
								className="h-screen object-cover w-full"
							/>
						</div>
						<div>
							<img
								src={bgHero2}
								alt="bg"
								className="h-screen object-cover w-full"
							/>
						</div>
						<div>
							<img
								src={bgHero3}
								alt="bg"
								className="h-screen object-cover w-full"
							/>
						</div>
						<div>
							<img
								src={bgHero4}
								alt="bg"
								className="h-screen object-cover w-full"
							/>
						</div>
						<div>
							<img
								src={bgHero5}
								alt="bg"
								className="h-screen object-cover w-full"
							/>
						</div>
					</Carousel>
				</div>
			</div>
			<div className="z-10 max-w-[550px]">
				<h1 className="text-[85px] text-center font-homemade leading-[120px]">
					Lydia <br /> Campos
				</h1>
				<p className="mt-20 text-center leading-6 text-[21px] font-poiret">
					Empresa fundada desde 1985, que mantiene la producción de las clásicas
					rosquitas, galletas, alfajores, empanadas y productos diversos de
					panadería, pastelería y repostería. Cumpliendo estándares de calidad
				</p>
			</div>
		</section>
	);
};

export default Hero;
