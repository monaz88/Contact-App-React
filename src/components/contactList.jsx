import React from "react";
import ContactItem from "./contactItem";
import styles from "./contactList.module.css"

function ContactList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
