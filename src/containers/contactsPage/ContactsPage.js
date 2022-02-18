import React, { useState, useEffect } from "react";
import  { ContactForm } from "../../components/contactForm/ContactForm";
import  { TileList } from "../../components/tileList/TileList";


export const ContactsPage = (props) => {
  /*
  Define state variables for
  contact info and duplicate check
  */
 const contacts = props.contacts;
 const addContact = props.addContact;

 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicateName, setDuplicateName] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (duplicateName === false) {
     addContact(name, phone, email);

     setName('');
     setPhone('');
     setEmail('');
     setDuplicateName('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
   contacts.includes(name) ? setDuplicateName(true) : setDuplicateName(false);
 },[contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contacts</h2>
        <ContactForm
        name={name}
        phone={phone}
        email={email}
        duplicateName={duplicateName}
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        objArr={contacts}
        />
      </section>
    </div>
  );
};
