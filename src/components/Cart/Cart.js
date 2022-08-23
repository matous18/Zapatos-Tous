import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.lenght === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>            
            </>
        );
    }

    return (
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
        </div>
    )
}