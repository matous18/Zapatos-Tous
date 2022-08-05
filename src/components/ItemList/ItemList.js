import React from "react";
import obtenerFetch from "../Item/Item";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    obtenerFetch
    .then((items)=>setData(items))
    .catch(mist=>console.log(mist))
    .finally(()=>setLoading(false))
    },[])

    return (<>
    <h1>Lista de Items</h1>
    {
        loading ? <h2>Espera...</h2>:
        data.map(shoe=>
        <Card style={{ width: '18rem' }} key={shoe.id}>
        <Card.Img variant="top" src={shoe.img} />
        <Card.Body>
            <Card.Title>{shoe.nombre}</Card.Title>
            <Card.Text>
                {shoe.category}
                {shoe.stock}
            </Card.Text>
            <Button variant="primary">Ver más</Button>
        </Card.Body>
        </Card>
            )
    }
    </>
    )
}

export default ItemList;