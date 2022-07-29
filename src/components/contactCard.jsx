import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function contactCard({el,handleDelete,handleEdit}) {
    let arr=['red','yellow','black','orange','pink','green']
    return (
        <Card style={{ width: '18rem',backgroundColor:'#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase(),color:'white' ,marginTop:'40px'}}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>{el.phone}</Card.Text>
                <Card.Text>{el.unique}</Card.Text>
                <Button variant="secondary" onClick={()=>handleEdit(el.id)}>EDIT</Button>
                <Button variant="danger" style={{marginLeft:'20px'}} onClick={()=>handleDelete(el.id)} >DELETE</Button>
            </Card.Body>
        </Card>
    );
}

export default contactCard;