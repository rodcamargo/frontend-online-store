import React from 'react';
import propTypes from 'prop-types';

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
      </div>
    );
  }
}

SearchPage.propTypes = {
  inputSearch: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default SearchPage;
