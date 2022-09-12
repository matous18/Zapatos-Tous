import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({onAddItem, stock}) {
    const [count, setCount] = useState(0)

    const onAdd = () => {
        console.log(`${count} agregados al carrito`);
        onAddItem(count);
    }

    const onAddSelectedItems = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const onSubSelectedItems = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

  return (
    <div className='container my-6'>
        <div className='card text-center my-5'>
            <div className='card-body'>
                <div className='my-5'>
                    <h2 className='my-5'>{count}</h2>
                    <Button variant="dark" onClick={onSubSelectedItems} disabled={count === 0}>-</Button>
                    <Button variant="dark" onClick={onAddSelectedItems} disabled={count === stock}>+</Button>
                </div>
                <Button variant="dark" onClick={onAdd} disabled={count === 0}>Agregar al carrito</Button>
            </div>
        </div>
    </div>
  );
}

export default ItemCount;