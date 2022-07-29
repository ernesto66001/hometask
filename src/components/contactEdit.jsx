import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditProduct = ({handleEditShow,handleEditClose,editContact,handleSave}) => {
    const [contact,setContact]=useState(editContact)
    console.log(contact)
    const editName=(e)=>{
        let newObj={
            ...contact,
            name:e.target.value,
        }
        setContact(newObj)
    }
    const editPhone=(e)=>{
        let newObj={
            ...contact,
            phone:e.target.value,
        }
        setContact(newObj)
    }
    const editUnique=(e)=>{
        let newObj={
            ...contact,
            unique:e.target.value,
        }
        setContact(newObj)
    }
    const editImage=(e)=>{
        let newObj={
            ...contact,
            image:e.target.value,
        }
        setContact(newObj)
    }

    return (
        <div>

            <Modal show={handleEditShow} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                        <Form.Control onChange={editName} className='mt-3' size="lg" type="text" placeholder="name" value={contact.name} //value={title} onChange={(e)=>setTitle(e.target.value)}
                        />
                        <Form.Control onChange={editPhone}  className='mt-3' size="lg" type="text" placeholder="phone" value={contact.phone} //value={price} onChange={(e)=>setPrice(e.target.value)}
                        />
                        <Form.Control onChange={editUnique} className='mt-3' size="lg" type="text" placeholder="id" value={contact.unique} //value={description} onChange={(e)=>setDescription(e.target.value)}
                        />
                        <Form.Control onChange={editImage} className='mt-3' size="lg" type="text" placeholder="image" value={contact.image} //value={image} onChange={(e)=>setImage(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>
                        Close
                    </Button>
                    <Button onClick={()=>handleSave(contact)} variant="primary" >
                        SAVE
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditProduct;