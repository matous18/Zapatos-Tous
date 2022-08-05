import { render } from '@testing-library/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount() {
    const [count, setCount] = useState(0)
  return (
    <div className='container my-6'>
        <div className='card text-center my-5'>
            <div className='card-body'>
                <h1>Counter App</h1>
                <div className='my-5'>
                    <h2 className='my-5'>{count}</h2>
                    <Button variant="dark" onClick={() => setCount(count-1)} disabled={count === 0}>-</Button>
                    <Button variant="dark" onClick={() => setCount(count+1)} disabled={count === 5}>+</Button>
                </div>
                <Button variant="dark">Agregar al carrito</Button>
            </div>
        </div>
    </div>
  );
}

export default ItemCount;