import React, { useState ,useEffect} from "react" // use state is for data sharing  , useeffect for persisting data
import Header from "./header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
  
  const [contacts,setContacts] = useState([]) //array
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts,contact]);
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>

  );
}

export default App;
