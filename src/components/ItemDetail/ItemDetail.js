import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const ItemDetail = ({ img, category, nombre, detail, stock, price}) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = () => {
    setGoToCart(true);
  }

  return (
    <>
          <Card style={{height: '30rem'}}>
            <Card.Img variant="top" src={img} style={{ width: '30rem'}} />
            <Card.Body>
              <Card.Header>{category}</Card.Header>
              <Card.Title>{nombre}</Card.Title>
              <Stack gap={3}>
                <div className="bg-light border">{detail}</div>
                <div className="bg-light border">{stock}</div>
                <div className="bg-light border">{price}</div>
              </Stack>
            </Card.Body>
            {
              goToCart
              ? <Link to='/cart'>Terminar compra</Link>
              : <ItemCount initial={0} stock={stock}></ItemCount>
            }
          </Card>
    </>
  )
}

export default ItemDetail;