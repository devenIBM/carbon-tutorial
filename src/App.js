import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import AppHeader from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import TeamsPage from './content/Teams';
class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <Content />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/teams" component={TeamsPage} />
        </Switch>
      </>
    );
  }
}

export default App;
