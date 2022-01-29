import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home/Home';
import Works from './components/pages/Works/Works';
import Posts from './components/pages/Posts/Posts';
import AboutMe from './components/pages/AboutMe/AboutMe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  /* const[darkMode, setDarkMode]= React.useState(true)
    
    function toggleDarkMode(){
      return setDarkMode(!darkMode)
    } */

  return (
    <>
      <Router>
      <div className="App-Dark">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/works' component={Works} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/posts' component={Posts} />
        </Switch>
        <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;
