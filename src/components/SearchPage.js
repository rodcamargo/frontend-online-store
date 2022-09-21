import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class SearchPage extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    const { inputSearch, onChange } = this.props;
    return (
      <div>
        <div>
          <h1>Categorias</h1>
          {categories
            .map(({ name, id }) => (
              <label data-testid="category" key={ id } htmlFor={ id }>
                <input
                  key={ id }
                  type="radio"
                  name={ id }
                  value={ name }
                  id={ id }
                />
                {name}
              </label>
            ))}
        </div>
        <label htmlFor="inputSearch">
          <input
            type="text"
            value={ inputSearch }
            id={ inputSearch }
            onChange={ onChange }
            name="inputSearch"
          />
        </label>
        {inputSearch.length <= 0 && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

SearchPage.propTypes = {
  inputSearch: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default SearchPage;

