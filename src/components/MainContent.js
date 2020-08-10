import React from "react";
import ContactCard from "./ContactCard";
import Product from "./school/Product";
import productsData from "./school/vSchoolProducts";

function MainContent(){
	// product section start --
		const productComponent = productsData.map(item => <Product key={item.id} products={item} />);
	// product end --
	const date = new Date();
	const hours = date.getHours();
	let timeOfDay;

	if (hours < 12) {
		timeOfDay="Morning";
	}else if(hours >= 12 && hours < 19){
		timeOfDay="Afternoon"
	}else{
		timeOfDay="Night"
	}


	return (
		<div className="main">
			<main> 
				<h2>content section </h2>
				<h3>This content is from this {timeOfDay}!</h3>

				<hr/>
				<h4>Contacts </h4>
				<ContactCard 
					name="James Gueraro"
					img="http://placekitten.com/400/200"
					phone="+254727872330"
					email="dotina@gmail.com"
				/>
				<ContactCard 
					name="James Gueraro"
					img="http://placekitten.com/400/300"
					phone="+254727872330"
					email="dotina@gmail.com"
				/>
				<hr/>
				<h4>Products </h4>
				{productComponent}
			</main>
		</div>
		)
}

export default MainContent;