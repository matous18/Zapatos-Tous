import { useState, useEffect} from "react";
import { getItemById } from "../../Item/Item";
import ItemDetail from "../../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';

function ItemDetailContainer (){

    const [data, setData]=useState([]);
    const {productId}=useParams();

    useEffect(() => {
        getItemById(productId).then(data =>{setData(data)})
    }, [])

    return(
        <div>
            <ItemDetail {...data}></ItemDetail>
        </div>
    );
}

export {ItemDetailContainer};