import React from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {

  const contacts = [
    {
      id: "1",
      name: "Denny",
      email: "denny@gmail.com"
    },

    {
      id: "2",
      name: "Bob",
      email: "bob@gmail.com"
    },

    {
      id: "3",
      name: "Jimmy",
      email: "jimmy@gmail.com"
    }

  ];

  return (
   
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
      <ContactList />
    </div>  
      
  
  );
}

export default App;
