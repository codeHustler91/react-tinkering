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
    const section = this.state.section
    const articles = {
      'Home': <Home />,
      'About': <About />,
      'Platform': <Platform />,
      'History': <History />,
      'Merchandice': <Merchandice />,
      'AOC': <AOC />
    }

    return (
      <div className="App">
        <Header handleClick={this.handleClick}/>
        {articles[section]}
        <Foot />
      </div>
    );
  }
}

export default App;