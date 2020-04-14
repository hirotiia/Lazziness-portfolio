import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Header from './components/Header';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/portfolio" exact component={Portfolio} />
      </div>
    );
  }

}
  

export default App;
