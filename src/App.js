import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => (<Home />) } />
            <ShoppingCart />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
