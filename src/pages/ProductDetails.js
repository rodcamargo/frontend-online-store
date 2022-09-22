import React from 'react';
import propTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductDetails extends React.Component {
  state = {
    details: [],
    attributes: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await getProductById(id);
    this.setState({
      details: result,
      attributes: result.attributes,
    });
  }

  render() {
    const { details, attributes } = this.state;
    return (
      <div>
        <div>
          <h2 data-testid="product-detail-name">
            {`${details.title} - R$ ${details.price}`}
          </h2>
          <img
            src={ details.thumbnail }
            width={ 200 }
            alt={ `Foto de ${details.title}` }
          />
        </div>
        <div>
          <ul>
            {attributes.map((det) => (
              <li key={ det.name }>
                {`${det.name}: ${det.value_name}`}
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
