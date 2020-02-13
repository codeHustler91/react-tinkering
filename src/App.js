import React from 'react';
import './App.css';
import Header from './Components/Header'
import Foot from './Components/Foot'
import Home from './Components/Home'
import About from './Components/About'
import Platform from './Components/Platform'
import History from './Components/History'
import Merchandice from './Components/Merchandice'
import AOC from './Components/AOC'

class App extends React.Component {

  state = {
    section: 'Home'
  }

  handleClick = (event) => {
    console.log(event.target.innerText)
    this.setState({
      section: event.target.innerText
    })
  }

  render() {

    let page;

    if (this.state.section === 'Home') {
      page = <Home />
    } else if (this.state.section === 'About') {
      page = <About />
    } else if (this.state.section ==='Platform') {
      page = <Platform />
    } else if (this.state.section === 'History') {
      page = <History />
    } else if (this.state.section === 'Merchandice') {
      page = <Merchandice />
    } else {page = <AOC />}

    return (
      <div className="App">
        <Header handleClick={this.handleClick}/>
        {page}
        <Foot />
      </div>
    );
  }
}

export default App;
