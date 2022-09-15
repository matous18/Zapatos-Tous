import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css'
import OrderForm from "../OrderForm/OrderForm";


const Cart = () => {
    const { cartData} = useCartContext();

    const totalPrice = cartData.reduce((prev, act) => {
        return prev + act.qty * act.price
    }, 0);

    if (cartData.length === 0) {
     return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>            
            </>
        );
    }
    console.log('>> cartData: ', cartData.length);

    return (
        <>
            {
                (cartData.length > 0)
                ?
                cartData.map((product) => {
                return <ItemCart 
                    key={product.id} 
                    id={product.id} 
                    qty={product.qty} 
                    nombre={product.nombre}
                    price={product.price}
                    img={product.img}
                    />
            })
            :
            "Por favor agrega items al carrito"
            }
            <div className="Total">
                <h1>
                    Pago total: ${totalPrice}
                </h1>
            </div>

            <OrderForm totalPrice={totalPrice} />
        </>
    )
}

export default Cart;