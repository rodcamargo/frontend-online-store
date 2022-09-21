import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ShoppingCart from './components/ShoppingCart';
import { getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  state = {
    inputSearch: '',
    products: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  searchProducts = async () => {
    const { inputSearch } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputSearch);
    const result = products.results;
    this.setState({ products: result });
  }

  render() {
    const { inputSearch, products } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<SearchPage
                inputSearch={ inputSearch }
                onChange={ this.handleChange }
                searchProducts={ this.searchProducts }
                products={ products }
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
