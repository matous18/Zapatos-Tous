import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCart = ({ id, qty, nombre, price, img }) => {

    const { removeProduct} = useCartContext();

    console.log('>>> render CartItem!');

    return (
        <Card key={id} >
          <Card.Img variant="top" src={img} />
          <Card.Header>{nombre}</Card.Header>
          <Card.Body>
            <Card.Text>
                  <span> ID: {id}</span>
                  <div >Cantidad: {qty}</div>
                  <div >Precio u: ${price}</div>
                  <div >Subtotal: ${qty*price}</div>
            </Card.Text>
            <Button variant="primary" onClick={() => removeProduct(id)}>Eliminar</Button>
          </Card.Body>
      </Card>
    )
}

export default ItemCart;