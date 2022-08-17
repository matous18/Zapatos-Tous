import './ItemListContainer.css'
import obtenerFetch from '../../Item/Item';
import ItemList from '../../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById, getItemByCategory } from '../../Item/Item';

function ItemListContainer (){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()

    useEffect(()=>{

        if(!categoryId){
            obtenerFetch
            .then((items)=>setData(items))
            .catch(mist=>console.log(mist))
            .finally(()=>setLoading(false))
        }
        else{
            getItemByCategory(categoryId).then(data=>{setData(data)})
        }
    },[categoryId])

    return (
        <div className='container'>
            <>
                {
                    loading ? <h2>Espera...</h2>:
                    data.map(shoe=> {
                        return <ItemList 
                            key={shoe.id} 
                            img={shoe.img} 
                            nombre={shoe.nombre}
                            category={shoe.category}
                            stock={shoe.stock}
                             />
                    }
                        )
                }
            </>
        </div>

    )
}

export {ItemListContainer};