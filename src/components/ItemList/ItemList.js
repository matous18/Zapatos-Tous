import React from "react";
import obtenerFetch from "../Item/Item";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailContainer from "../Containers/ItemDetailContainer/ItemDetailContainer";
import {Link} from 'react-router-dom';

function ItemList(shoe) {
    return (<>
        <Card style={{ width: '16rem'}} key={shoe.id}>
        <Card.Img variant="top" src={shoe.img} />
        <Card.Body>
            <Card.Title>{shoe.nombre}</Card.Title>
            <Card.Text>
                {shoe.category}
            </Card.Text>
           <Card.Text>
                {shoe.stock}
            </Card.Text>
            <Link to={`/detail/${shoe.id}`}>
                <Button variant="primary">Ver más</Button>
            </Link>
        </Card.Body>
        </Card>
    </>
    )
}

export default ItemList;