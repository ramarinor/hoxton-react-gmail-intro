import "./Header.css";
import LeftMenu from "./Left-menu/Left-menu";
import Search from "./Search/Search";

function Header() {
	return (
		<header className="header">
			<LeftMenu />
			<Search />
		</header>
	);
}
export default Header;
