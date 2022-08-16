import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		})
		.then(users => {
			this.setState({robots: users})
		})
		
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value})
	}

	render () {
		
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	
	return !this.state.robots.length ?
	<h1>Loading</h1> :
	(
		<div className ='tc'>
		<h1 className='f2'> RobotFriends </h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
			</div>
		);
	}
	
}

export default App;