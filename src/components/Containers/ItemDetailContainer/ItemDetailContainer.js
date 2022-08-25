import { useState, useEffect} from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer (){

    const [data, setData]=useState([]);
    const {productId}=useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Items', productId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [])

    return(
        <div>
            <ItemDetail {...data}></ItemDetail>
        </div>
    );
}

export {ItemDetailContainer};