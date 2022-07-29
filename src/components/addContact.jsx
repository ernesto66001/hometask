import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";

function AddContact({show,handleClose,handleProduct}) {
    let [name,setName]=useState('')
    let [phone,setPhone]=useState('')
    let [unique,setUnique]=useState('')
    let [image,setImage]=useState('')

    const handleAdd=()=>{
        if(!name.trim() || !phone.trim() || !unique.trim() || !image.trim()){
            alert('введите значения')
            return;
        }
        let newObj={
            name:name,
            phone:phone,
            unique:unique,
            image:image,
            id:Date.now()
        }
        handleProduct(newObj)
        console.log(newObj)
        setName('')
        setPhone('')
        setUnique('')
        setImage('')
        handleClose()
    }
    return (
        <>


            <Modal   show={show} onHide={handleClose} >
                <Modal.Header style={{backgroundColor:'rgba(0,0,0,.7)',color:'white'}} closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'rgba(0,0,0,.7)',color:'white'}}>
                   <div className="form">
                       <Form.Control style={{backgroundColor:'rgba(255,255,255,.7)',color:"black"}} className='mt-3' size="lg" type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                       <Form.Control style={{backgroundColor:'rgba(255,255,255,.7)',color:"black"}} className='mt-3' size="lg" type="text" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                       <Form.Control style={{backgroundColor:'rgba(255,255,255,.7)',color:"black"}} className='mt-3' size="lg" type="text" placeholder="id" value={unique} onChange={(e)=>setUnique(e.target.value)}/>
                       <Form.Control style={{backgroundColor:'rgba(255,255,255,.7)',color:"black"}} className='mt-3' size="lg" type="text" placeholder="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
                   </div>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'rgba(0,0,0,.7)',color:'white'}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="light" onClick={handleAdd}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default AddContact;