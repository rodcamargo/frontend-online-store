import React from 'react';
import propTypes from 'prop-types';

class SearchList extends React.Component {
  render() {
    const { inputSearch, searchedItems, onInputChange, searchProducts } = this.props;

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
          searchedItems.map((item) => (
            <div data-testid="product" key={ item.id }>
              <p>{`Produto: ${item.title}`}</p>
              <img
                src={ item.thumbnail }
                alt={ `imagem de um ${item.title}` }
              />
              <p>{item.price}</p>
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
};

export default SearchList;
