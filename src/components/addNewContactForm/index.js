import React from 'react';

const AddContactForm = ({ contactData,
    onChangeHandler,
    toggleContactForm, addNewContact }) =>
    <form onSubmit={addNewContact} >
        <div>
            <label>Name</label>
            <input type="text"
                name="name"
                placeholder="Enter a valid name"
                value={contactData.name}
                onChange={onChangeHandler} />
        </div>
        <div>
            <label>Email</label>
            <input type="email"
                name="email"
                placeholder="Enter valid email"
                value={contactData.email}
                onChange={onChangeHandler} />
        </div>
        <div>
            <label>Contact No</label>
            <input type="text"
                name="phone"
                placeholder="Enter valid phone number"
                value={contactData.phone}
                onChange={onChangeHandler} />
        </div>

        <input type="submit" value="Add" readOnly />
        &nbsp;
        <input type="button" value="Cancel" readOnly onClick={toggleContactForm} />
    </form>

export default AddContactForm;

