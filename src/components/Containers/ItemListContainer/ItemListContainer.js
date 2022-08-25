import './ItemListContainer.css'
import ItemList from '../../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainer (){

    const [data, setData] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Items');
        
        if(categoryId){
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map( product => ({id: product.id, ...product.data()}))));
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map( product => ({id: product.id, ...product.data()}))));
        }
    },[categoryId])

    return (
        <div className='container'>
            <>
                {
                    data.map(data=> {
                        return <ItemList {...data}/>
                    }
                        )
                }
            </>
        </div>

    )
}

export {ItemListContainer};