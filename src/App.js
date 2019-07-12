import React, { Component } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchString: ""
		};
	}

	componentDidMount = () => {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(monsters => {
				this.setState({ monsters });
			})
			.catch(error => console.log(error, "Something went wrong!!"));
	};

	filterMonsters = () => {
		return this.state.monsters.filter(monster => {
			return monster.name
				.toLowerCase()
				.includes(this.state.searchString.toLowerCase());
		});
	};

	handleChange = evt => {
		const searchString = evt.target.value;
		this.setState({ searchString });
	};

	render() {
		return (
			<div className='App'>
				<p className='title-text'>Monsters Rolodex</p>
				<SearchBox
					searchString={this.state.searchString}
					handleChange={this.handleChange}
				/>
				<CardList monsters={this.filterMonsters()} />
			</div>
		);
	}
}

export default App;
