import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import obtenerFetch from '../../Item/Item';
import ItemList from '../../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';

function ItemListContainer (props){
    return (
        <div className='container'>
            <header>
                <h1>{props.text}</h1>
            </header>
            <ItemList></ItemList>
            <ItemCount></ItemCount>
        </div>

    )
}

export {ItemListContainer};