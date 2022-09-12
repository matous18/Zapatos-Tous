import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import './ItemList.css'

function ItemList({id, img, nombre, price}) {
    return (<>
        <Card className="ItemCard" style={{ width: '16rem'}} key={id}>
        <Card.Img className="CardImg" variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                ${price}
            </Card.Text>
            <Link to={`/detail/${id}`}>
                <Button variant="dark">Ver detalle</Button>
            </Link>
        </Card.Body>
        </Card>
    </>
    )
}

export default ItemList;