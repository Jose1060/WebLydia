import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import styles from "./style";
import Pasteles from "./components/Pasteles";
import ScrollContainer from "react-scroll-motion/dist/ScrollContainer";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import Modal from "./components/Modal";

type Props = {};

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
