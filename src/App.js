import HeaderNav from "./components/header-nav";
import AddContact from "./components/addContact";
import Header_nav from "./components/header-nav";
import {useState} from "react";
import ContactList from "./components/contactList";
import ContactEdit from "./components/contactEdit";
import contactEdit from "./components/contactEdit";


function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [editModal, setEditModal] = useState(false);
    const handleEditClose = () => setEditModal(false);
    const handleEditShow = () => setEditModal(true);

    const [contact,setContact]=useState([])
    const handleProduct=(newObj)=>{
        let newProduct=[...contact]
        newProduct.push(newObj)
        setContact(newProduct)
    }
    const handleDelete=(id)=>{
        let newContact=contact.filter(el=>el.id!==id)
        setContact(newContact)
    }
    const [editContact,setEditContact]=useState({})
    const handleEdit=(id)=>{
        let obj=contact.filter(el=>el.id=id)
        handleEditShow()
        setEditContact(obj[0])
    }
    const handleSave=(obj)=>{
        let newContact=contact.map(el=>{
            if(el.id===obj.id){
                return obj;
            }
            return el;
        })
        setContact(newContact)
        handleEditClose()
    }
    return (
    <div className="App">
<Header_nav handleShow={handleShow}/>
        <AddContact show={show} handleClose={handleClose} handleProduct={handleProduct}/>
        <ContactList contact={contact} contactDelete={handleDelete} handleEdit={handleEdit}/>
        {editModal && <ContactEdit handleEditClose={handleEditClose} handleEditShow={handleEditShow} handleSave={handleSave} editContact={editContact}/>}
    </div>
  );
}

export default App;
