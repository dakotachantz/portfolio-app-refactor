import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import References from './components/References';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="page-top">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={Contact} />
              <Route path='/references' component={References} />
            </Switch>
          </BaseLayout>
        </BrowserRouter >
      </div>
    );
  }
}

export default App;
