import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../../CartContext/CartContext";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function OrderForm({totalPrice}) {

    const { cartData} = useCartContext();

    const current = new Date();

    const order = {
        name: "",
        email: "",
        phone: "",
        address: "",
        items: cartData.map(product => ({ id: product.id, title: product.nombre, price: product.price, quantity: product.qty, })),
        date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
        total: totalPrice
    }

    
    const [buyer, setBuyer] = useState(order);
    
    const getInput = (e) => {
        const {name, value} = e.target;
        setBuyer({...buyer, [name]:value})
    }
    
    const saveOrders = async(e) => {
        e.preventDefault();
        console.log(buyer);
        const dBase = getFirestore();
        const orderCollection = collection(dBase, 'orders');
        addDoc(orderCollection, buyer)
        .then(( {id} ) => console.log(id))
        setBuyer({...order})
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            onChange={getInput}
            value={buyer.name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={getInput}
            value={buyer.email}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone</Form.Label>
        <Form.Control
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            onChange={getInput}
            value={buyer.phone}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Address</Form.Label>
        <Form.Control
            type="text"
            name="address"
            placeholder="Enter your address"
            onChange={getInput}
            value={buyer.address}
        />
      </Form.Group>
        <Button variant="warning" onClick={saveOrders}><Link to='/end'>Finalizar compra</Link></Button>
    </Form>
  );
}

export default OrderForm;