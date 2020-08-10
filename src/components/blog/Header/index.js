import React from "react";
import './style.css';
/**
 * @author Dickes
 * @function Header
 */

const Header = (props)=>{
	return(
		<header className="header">
			<nav className="headerMenu">
				<a href="#">Home</a>
				<a href="#">About us</a>
				<a href="#">Contact us</a>
			</nav>
			<div>
				Social media icons
			</div>
		</header>
	);
}

export default Header;