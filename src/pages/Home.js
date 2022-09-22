import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import SearchList from '../components/SearchList';

class Home extends React.Component {
  state = {
    inputSearch: '',
    searchedItems: [],
    categories: [],
    categoryId: null,
  };

  componentDidMount() {
    this.requestCategories();
  }

  requestCategories = async () => {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  resquestCategoriesAndQuery = async () => {
    const { inputSearch, categoryId } = this.state;
    const search = await
    getProductsFromCategoryAndQuery(categoryId, inputSearch);
    const { results } = search;
    this.setState({
      inputSearch: '',
      searchedItems: results,
    });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onRadioChange = ({ target }) => {
    this.setState({ categoryId: target.value });
    this.resquestCategoriesAndQuery();
  }

  render() {
    const { categories, inputSearch, searchedItems } = this.state;
    return (
      <div>
        <aside>
          <Categories
            categories={ categories }
            onRadioChange={ this.onRadioChange }
          />
        </aside>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>

        <SearchList
          inputSearch={ inputSearch }
          searchedItems={ searchedItems }
          onInputChange={ this.onInputChange }
          searchProducts={ this.resquestCategoriesAndQuery }
        />
      </div>
    );
  }
}

export default Home;
