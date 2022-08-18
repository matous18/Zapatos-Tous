import React, { useState, useContext} from "react";

const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const addProduct = (item, newQty) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, qty: newQty});
        setCart(newCart)
    }

    console.log('carrito: ', cart);

    const isInCart = (id) => {
        return cart.find(product => product.id ===id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider