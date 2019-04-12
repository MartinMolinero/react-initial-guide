import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Julia', age: 12},
      {name: 'Jay', age: 9}
    ], 
    otherState: 'somevalue'
  }

  switchNameHandler = (newName) => {
    
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Julia', age: 12},
      {name: 'Jay', age: 9}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Cambio', age: 28},
        {name: event.target.value, age: 12},
        {name: 'Jay', age: 9}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi im a react app</h1>
        <p>Yei</p>
        <button onClick={this.switchNameHandler.bind(this, 'Morales')}> Switch name </button>
        <Person name={this.state.persons[0].name} 
        age={this.state.persons[0].age} ></Person>
        <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!')} changed={this.nameChangedHandler}  >
          My hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age} ></Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Working') )
  }
}

export default App;
