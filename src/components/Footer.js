import React from "react";

function Footer(){
	const date = new Date();
	var minutes = date.getMinutes();
	const hours = date.getHours();
	 // Check whether AM or PM 
     const newformat = hours >= 12 ? 'PM' : 'AM';
     minutes = minutes < 10 ? '0' + minutes : minutes; 

	return (
		<footer> &#169; Dickens | lessons | {hours % 12} : {minutes} {newformat} </footer>
	)
}
export default Footer;