import React from "react";
import { useCartContext } from "../../CartContext/CartContext";


const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.img} alt={product.title}/>
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidfad: {product.qty}</p>
                <p>Precio u: {product.price}</p>
                <p>Subtotal: ${product.qty * product.price}</p>
                <button onClick={() => removeProduct(product.id)} >Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;