import React from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class ShoppingCart extends React.Component {
  state = {
    cart: [],
  }

  async componentDidMount() {
    const { cart } = this.state;
    if (localStorage.getItem('items')) {
      const itemsID = JSON.parse(localStorage.getItem('items'));
      const array = cart;
      itemsID.map(async (id) => {
        const response = await getProductById(id);
        array.push(response);
        this.setState({ cart: array });
      });
    }
  }

  render() {
    const { cart } = this.state;
    return (
      <>
        <Link to="/">Retornar a Página Inicial</Link>
        <p>Carrinho de Compras</p>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>

        <div>
          {cart.map((item) => (
            <div key={ item.id }>
              <p data-testid="shopping-cart-product-name">{ item.title }</p>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{ `R$${item.price}` }</p>
              <p data-testid="shopping-cart-product-quantity"> 1 </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ShoppingCart;
