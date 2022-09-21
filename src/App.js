import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  state = {
    inputSearch: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { inputSearch } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/"
              render={ () => (<SearchPage
                inputSearch={ inputSearch }
                onChange={ this.handleChange }
              />) }
            />
            <ShoppingCart />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
