import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import AppHeader from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <Content>
          <Button>Button</Button>
        </Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </>
    );
  }
}

export default App;
