import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';
import PledgePage from './pages/PledgePage';
import './App.css';

function App() {
  const username = window.localStorage.getItem("username");
  console.log(username);

  return (
    
    <Router>
      <div id="header">
        <div id="header-text">
          <Header /> 
        </div>
        <div id="header-nav">
          <Nav username={username} />
        </div>
      </div>
      
      <div>
        <Switch>
          <Route path="/project/create">
            <CreateProjectPage />
          </Route>
          <Route path='/project/:id'>
            <ProjectPage />
          </Route>
          <Route path='/pledges'>
            <PledgePage />
          </Route>
          <Route path="/login">
            <LoginPage />
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
