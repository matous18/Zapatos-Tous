import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer (props){
    return (
        <div className='container'>
            <header>
                <h1>{props.text}</h1>
            </header>
            <ItemCount></ItemCount>
        </div>
    )
}

export {ItemListContainer};