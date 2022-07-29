import React from 'react';
import ContactCard from "./contactCard";

const ContactList = ({contact,contactDelete,handleEdit}) => {
    return (
        <div className='d-flex justify-content-evenly flex-wrap'>
            {
                contact.map(el=>(
                    <ContactCard el={el} key={el.id} handleDelete={contactDelete} handleEdit={handleEdit}/>
                ))
            }
        </div>
    );
};

export default ContactList;