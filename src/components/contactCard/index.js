import React from 'react';
import DeleteContact from '../../containers/deleteContact';

const ContactCard = ({ contact }) => <div className="contactCard">
    <p>Name: {contact.name} </p>
    <p>Email: {contact.email}</p>
    <p>Contact: {contact.phone}</p>
    {contact.isAddedContact && <DeleteContact deleteElemIndex={contact} />}
</div>

export default ContactCard;

