import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {
  render() {
    const { inputSearch, onChange } = this.props;
    return (
      <div>
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
