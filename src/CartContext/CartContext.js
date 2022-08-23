import React, { useState, useContext} from "react";

const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const addProduct = (item, qty) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product){
            product.qty += qty;
            newCart = [...cart];
        } else {
            product = {...item, qty: qty};
            newCart = [...cart, product];
        }
        setCart(newCart)
    }

    console.log('carrito: ', cart);

    const isInCart = (id) => cart.find(product => product.id ===id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.qty * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.qty, 0)


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider