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
    const { inputSearch, onChange, searchProducts, products } = this.props;
    return (
      <div>
        <div>
          <h1>Categorias</h1>
          <ul>
            {categories.map(({ name, id }) => (
              <li key={ id }>
                <label htmlFor={ id } data-testid="category">
                  <input
                    type="radio"
                    name={ id }
                    value={ id }
                    id={ id }
                  />
                  {name}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <label htmlFor="inputSearch">
          <input
            data-testid="query-input"
            type="text"
            value={ inputSearch }
            id={ inputSearch }
            onChange={ onChange }
            name="inputSearch"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ searchProducts }
          >
            Pesquisar

          </button>
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
        { products.length === 0 ? <p>Nenhum produto foi encontrado</p>
          : products.map((item) => (
            <div key={ item.id } data-testid="product">
              <p>{ item.title }</p>
              <p>{ item.price }</p>

              <img src={ item.thumbnail } alt={ item.title } />
            </div>
          )) }
      </div>
    );
  }
}

SearchPage.propTypes = {
  inputSearch: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  searchProducts: propTypes.func.isRequired,
  products: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  })).isRequired,
};

export default SearchPage;
