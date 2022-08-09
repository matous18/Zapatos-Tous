import { useState, useEffect} from "react";
import obtenerFetch from "../../Item/Item";
import ItemDetail from "../../ItemDetail/ItemDetail";

export default function ItemDetailContainer (){

    const [data, setData]=useState([]);

    useEffect(() => {
        obtenerFetch
        .then(res => setData(res));
    }, [])

    return(
        <ItemDetail data={data}></ItemDetail>
    );
}