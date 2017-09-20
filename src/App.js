import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
            </Switch>
          </BaseLayout>
        </BrowserRouter >
      </div>
    );
  }
}

export default App;
