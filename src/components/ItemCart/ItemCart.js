import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCart.css'


const ItemCart = ({ id, qty, nombre, price, img }) => {

    const { removeProduct} = useCartContext();

    console.log('>>> render CartItem!');

    return (
        <Card key={id} className="cart__container" >
          <Card.Img className="Img__cart" variant="top" src={img} />
          <Card.Header>{nombre}</Card.Header>
          <Card.Body>
            <Card.Text>
                  <span> ID: {id}</span>
                  <div >Cantidad: {qty}</div>
                  <div >Precio u: ${price}</div>
                  <div >Subtotal: ${qty*price}</div>
            </Card.Text>
            <Button variant="dark" onClick={() => removeProduct(id)}>Eliminar</Button>
          </Card.Body>
      </Card>
    )
}

export default ItemCart;