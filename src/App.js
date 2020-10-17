import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import './App.css';

function App() {
  return (
    <Router>
      <div id="header">
        <Header />
        <Nav />
      </div>
      
      <div>
        <Switch>
          <Route path='/project'>
            <ProjectPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
