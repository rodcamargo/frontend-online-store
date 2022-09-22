import React from 'react';
import propTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, onRadioChange } = this.props;
    return (
      <div>
        <h1>Categorias</h1>
        <ul>
          {categories.map(({ name, id }) => (
            <li key={ id }>
              <label htmlFor={ id } data-testid="category">
                <input
                  type="radio"
                  name="radio"
                  value={ id }
                  id={ id }
                  onChange={ onRadioChange }
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  })).isRequired,
  onRadioChange: propTypes.func.isRequired,
};

export default Categories;
