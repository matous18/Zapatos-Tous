import Card from 'react-bootstrap/Card';

const ItemDetail = ({ data }) => {
  return (
    <Card style={{ width: '18rem' }} key={data.id}>
    <Card.Img variant="top" src={data.img} />
    <Card.Body>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>
            {data.category}
            {data.stock}
            {data.detail}
        </Card.Text>
    </Card.Body>
    </Card>
  );
};

export default ItemDetail;