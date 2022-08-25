import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
    const { cart, totalPrice, id } = useCartContext();

    if (cart.length === 0) {
     return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>            
            </>
        );
    }
    return (
        <>
            {
                cart.map(product => {
                <ItemCart {...product} />
            })
            }
            <div>
                total: {totalPrice()}
            </div>
        </>
    )
}

export default Cart;