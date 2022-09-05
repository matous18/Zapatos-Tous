import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../CartContext/CartContext';
import {Link} from 'react-router-dom';

function CartWidget() {

  const { cartData } = useCartContext();

  const totalProducts = cartData.reduce((prev, next) => {
    return prev + next.qty;
  }, 0);

  return (
    <div className="43erdfc -widget">
      <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
      </Link>
      <div className="qty-display bg-light">{totalProducts}</div>
    </div>
  );
};

export default CartWidget;