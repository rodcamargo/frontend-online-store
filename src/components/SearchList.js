import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchList extends React.Component {
  render() {
    const { inputSearch, searchedItems, onInputChange, searchProducts,
      addToCart } = this.props;

    return (
      <div>
        <label htmlFor="inputSearch">
          <input
            data-testid="query-input"
            type="text"
            name="inputSearch"
            id={ inputSearch }
            placeholder="Digite o produto"
            value={ inputSearch }
            onChange={ onInputChange }
          />
          <button
            data-testid="query-button"
            type="button"
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
        { searchedItems.length !== 0 ? (
          searchedItems.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <Link
                to={ `/product/${id}` }
                data-testid="product-detail-link"
              >
                <div data-testid="product">
                  <p>{`Produto: ${title}`}</p>
                  <img
                    src={ thumbnail }
                    alt={ `imagem de um ${title}` }
                  />
                  <p>{price}</p>
                </div>
              </Link>
              <button
                data-testid="product-add-to-cart"
                type="button"
                onClick={ () => (addToCart({ id })) }
              >
                Adicione ao Carrinho
              </button>
            </div>
          ))
        ) : (<p>Nenhum produto foi encontrado</p>) }
      </div>
    );
  }
}

SearchList.propTypes = {
  inputSearch: propTypes.string.isRequired,
  searchedItems: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  })).isRequired,
  onInputChange: propTypes.func.isRequired,
  searchProducts: propTypes.func.isRequired,
  addToCart: propTypes.func.isRequired,
};

export default SearchList;
