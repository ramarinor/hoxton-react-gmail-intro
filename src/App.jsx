import "./App.css";

import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";
import Header from "./components/Header/Header";
import LeftMenu from "./components/Left-menu/Left-menu";
import EmailView from "./components/Email-view/Email-view";

function App() {
	return (
		<div className="app">
			<Header />
			<LeftMenu />
			<EmailView></EmailView>
		</div>
	);
}

export default App;
