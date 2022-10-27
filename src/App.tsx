import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import styles from "./style";

type Props = {};

const App = (props: Props) => {
	return (
		<div className="w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			<div className={`${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Products />
				</div>
			</div>
		</div>
	);
};

export default App;
