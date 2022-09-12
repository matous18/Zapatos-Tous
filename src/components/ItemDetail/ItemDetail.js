import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';
import './ItemDetail.css'

const ItemDetail = ({ id, img, category, nombre, detail, stock, price, item}) => {
  const {addProduct} = useCartContext();
  const [productAdded, setProductAdded] = useState(false);

  const onAdd = (qtyToAdd) => {

    addProduct( {
      id,
      nombre,
      category,
      qty: qtyToAdd,
      img,
      detail,
      price
    });

    console.log(
      ">>Evento recibido de ItemCount! - Agregado:",
      qtyToAdd
    );
    setProductAdded(true);
  };  
  
  return (
    <>
          <Card className='Item__Detail' style={{height: '30rem'}}>
            <Card.Img className='Item__Detail__Img' variant="top" src={img} />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Header>{category}</Card.Header>
              <Stack gap={3}>
                <div className="bg-light border">{detail}</div>
                <div className="bg-light border">$ {price}</div>
              </Stack>
            </Card.Body>
            {
              productAdded
              ? <Link to='/cart'>
                    <Button className='btn__purchase' variant="dark">Terminar compra</Button>
                </Link>
              : (<ItemCount initial={0} stock={stock} onAddItem={onAdd}></ItemCount>
            )}
          </Card>
    </>
  )
}

export default ItemDetail;