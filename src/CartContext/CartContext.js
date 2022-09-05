import React, { useState, useContext} from "react";

const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const addProduct = (item) => {

        const listaActualizada = cart.find(
            (itemEnCarrito) => itemEnCarrito.id === item.id
        )

        ? cart.map((itemEnCarrito) => {
            if (itemEnCarrito.id === item.id){
                return {
                    ...itemEnCarrito,
                    qty: itemEnCarrito.qty + item.qty,
                };
            }
            return itemEnCarrito;
        })
        : [...cart, item];
        setCart(listaActualizada);
        console.log('>> Agregado:', listaActualizada);
    };

    console.log('carrito: ', cart);

    // const isInCart = (id) => cart.find(product => product.id ===id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            removeProduct,
            addProduct,
            cartData: cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider