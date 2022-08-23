import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useCartContext } from '../../CartContext/CartContext';
import {Link} from 'react-router-dom';

function CartWidget() {

  const {totalProducts} = useCartContext();
  return (
    <div className="cart-widget">
      <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
      </Link>
      <div className="qty-display bg-light">{totalProducts() || ''}</div>
    </div>
  );
};

export default CartWidget;