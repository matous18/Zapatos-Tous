import React, { useEffect, useState } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

function EndPurchase() {

    const [order, setOrder] = useState('');

    useEffect(()=> {
        const dBase = getFirestore();
        const orderRef = doc(dBase, 'orders', '3ALlNlBcvecioVoHsI3s')
        onSnapshot(orderRef, (order) => {
            setOrder(order.data(), order.id)
        })
    },[order])

    return(
        <>
            <p>
                Thank you for your purchase!
                your order #  will be ready soon!
            </p>
        </>
    )
}

export default EndPurchase;