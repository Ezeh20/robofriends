import React from "react";
import Cardlist from "../components/Cardlist";
import SearchInput from "../components/SearchInput";
import Margin from "../components/Margin.js";
import "./App.css";
import Scroll from "../components/Scroll.js";



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			Robots: [],
			SearchInput: ""
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		})
		.then (users=>{
			this.setState({Robots:users})
		})
	}

	OnSearchChange=(event)=>{
		this.setState({SearchInput:event.target.value})			}
	render() {
		const filtered=this.state.Robots.filter((Robots)=>{
       return Robots.name.toLowerCase().includes(this.state.SearchInput.toLowerCase());
		})
		if (this.state.Robots.length===0) {
			return <h1>Loading</h1>
		}else{
		return (
			<div className="tc">
				<h1 className="ff">Robofriends</h1>
				<SearchInput SearchChange={this.OnSearchChange} />
				<Margin />
				<Scroll>
				<Cardlist Robots={filtered} />
				</Scroll>
			</div>
		);
	}
 }
}
export default App;
