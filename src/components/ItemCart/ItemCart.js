import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCart = ({ img, nombre, qty, price, id}) => {

    const { removeProduct } = useCartContext();

    return (
        <Card key={id} >
        <Card.Img variant="top" src={img} />
        <Card.Header>{nombre}</Card.Header>
        <Card.Body>
          <Card.Text>
                <div >Cantidad: {qty}</div>
                <div >Precio u:{price}</div>
                <div >Subtotal: ${qty*price}</div>
          </Card.Text>
          <Button variant="primary" onClick={() => removeProduct(id)}>Eliminar</Button>
        </Card.Body>
      </Card>
    )
}

export default ItemCart;