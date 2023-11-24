import React from "react"
import Header from "./header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
function App() {
  const contacts =[
    {
      id: "1",
      name: "Varun",
      email: "mallis.varun@yahoo.com",
    },
    {
      id: "2",
      name: "Rashmi",
      email: "mallis.rashmi@google.com",
    },
    {
      id: "3",
      name: "keerthana",
      email: "mallis.keeeru@amazon.com",
    },

  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>

  );
}

export default App;
