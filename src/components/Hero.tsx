import {
	bgHero,
	bgHero2,
	bgHero3,
	bgHero4,
	bgHero5,
	img_bocadillo_02,
	img_bocadillo_07,
	img_pastel_06,
	img_pastel_08,
} from "../assets";
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
								src={img_bocadillo_02}
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
								src={img_pastel_08}
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
			<div className="z-10 md:max-w-[650px] max-w-[380px] flex flex-col gap-16">
				<h1 className="md:text-[120px] text-[80px] text-center font-homemade leading-[120px] md:leading-[180px]">
					Lydia <br /> Campos
				</h1>
				<div className="bg-neutral-500 backdrop-blur-lg rounded-2xl px-4 py-4 bg-opacity-30">
					<p className=" text-center leading-1 font-medium text-[16px] md:text-[18px]">
						Empresa fundada desde 1985, que mantiene la producción de las
						clásicas rosquitas, galletas, alfajores, empanadas y productos
						diversos de panadería, pastelería y repostería. Cumpliendo
						estándares de calidad
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
