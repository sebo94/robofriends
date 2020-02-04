import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>  this.setState({ robots:users }))
    }

    onSearchChange = event => {
        this.setState({
            searchField: event.target.value
        });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        });
        return !robots.length ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet" /> 
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div> 
            );
    }
}
export default App;