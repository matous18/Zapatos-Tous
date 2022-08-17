import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function ItemList({id, img, nombre, category, stock}) {
    return (<>
        <Card style={{ width: '16rem'}} key={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                {category}
            </Card.Text>
           <Card.Text>
                {stock}
            </Card.Text>
            <Link to={`/detail/${id}`}>
                <Button variant="primary">Ver más</Button>
            </Link>
        </Card.Body>
        </Card>
    </>
    )
}

export default ItemList;