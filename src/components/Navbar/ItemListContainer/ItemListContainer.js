import './ItemListContainer.css'

function ItemListContainer (props){
    return (
        <header>
            <h1>{props.text}</h1>
        </header>
    )
}

export {ItemListContainer};