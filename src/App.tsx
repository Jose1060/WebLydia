import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import styles from "./style";
import Pasteles from "./components/Pasteles";
import ScrollContainer from "react-scroll-motion/dist/ScrollContainer";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import Modal from "./components/Modal";
import Slider from "./components/Slider";
import {
	img_pastel_11,
	img_pastel_12,
	img_pastel_13,
	img_pastel_14,
	img_pastel_15,
} from "./assets";

type Props = {};

const slides = [
	img_pastel_15,
	img_pastel_12,
	img_pastel_13,
	img_pastel_14,
	img_pastel_11,
];

//Principal Page
const App = (props: Props) => {
	return (
		<div className="w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<ScrollContainer>
				<div className={`${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Hero />
					</div>
				</div>
				<div>
					<Pasteles />
				</div>
				<Footer />
			</ScrollContainer>
		</div>
	);
};

export default App;
