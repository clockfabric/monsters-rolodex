import React from "react";
import Card from "./card";
import "./card-list.css";

const CardList = props => {
	const { monsters } = props;
	return (
		<div className='card-list'>
			{monsters.map(monster => {
				return <Card key={monster.id} monster={monster} />;
			})}
		</div>
	);
};

export default CardList;
