import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import Button from 'react-bootstrap/Button';
import { getFirestore, collection, query, where, addDoc } from "firebase/firestore";
import './Cart.css'


const Cart = () => {
    const { cartData} = useCartContext();

    const current = new Date();

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

    const order = {
        buyer: {
            name: "Mike",
            email: "mike@gmail.com",
            prhone: "1222323",
            address: "asdd"
        },
        items: cartData.map(product => ({ id: product.id, title: product.nombre, price: product. price, quantity: product.qty, })),
        date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
        total: totalPrice,
    }

    const orderPurchase = () => {
        const dBase = getFirestore();
        const orderCollection = collection(dBase, 'orders');
        addDoc(orderCollection, order)
        .then(( {id} ) => console.log(id))
    }

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
                Total: ${totalPrice}
            </div>
            <Button variant="warning" onClick={orderPurchase}>Finalizar compra</Button>

        </>
    )
}

export default Cart;