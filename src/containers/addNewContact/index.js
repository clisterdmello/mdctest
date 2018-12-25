import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addNewContact } from '../../actions/index';
import AddContactForm from '../../components/addNewContactForm';

class AddNewContact extends Component {
    constructor() {
        super();
        this.state = {
            isAddActive: false,
            isDublicateEntry: false,
            contact: {
                isAddedContact: true,
                email: '',
                phone: '',
                name: ''
            }
        }
        this.toggleContactForm = this.toggleContactForm.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addNewContact = this.addNewContact.bind(this);
        this.isContactInfoValid = this.isContactInfoValid.bind(this);
    }
    toggleContactForm() {
        this.setState({
            isAddActive: !this.state.isAddActive
        })
    }
    addNewContact(e) {
        if (this.isContactInfoValid()) {
            this.props.addNewContact(this.state.contact);
            setTimeout(() => {
                this.setState({
                    isAddActive: false,
                    isDublicateEntry: false
                })
            }, 100)

        } else {
            this.setState({
                isDublicateEntry: true
            })
        }
        e.preventDefault();

    }
    isContactInfoValid() {

        const { contacts } = this.props;
        const { name, email, phone } = this.state.contact;
        if (name === '' || email === '' || phone === '') {
            return false;
        }
        return contacts.filter(contact => contact.name === name).length === 0

    }
    onChangeHandler(e) {
        this.setState({ contact: { ...this.state.contact, [e.target.name]: e.target.value } });
    }

    render() {
        return (<Fragment>

            <input disabled={this.state.isAddActive ? true : false}
                type="Button"
                value="Add New Contact"
                readOnly
                onClick={this.toggleContactForm} />

            {this.state.isDublicateEntry && 'dublicate entry'}

            <div className="addContactForm"
                style={{ display: this.state.isAddActive ? 'block' : 'none' }}>

                <AddContactForm
                    contactData={this.state.contact}
                    onChangeHandler={this.onChangeHandler}
                    toggleContactForm={this.toggleContactForm}
                    addNewContact={this.addNewContact}
                />
            </div>
        </Fragment >)
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    addNewContact: (newContactinfo) => {
        dispatch(addNewContact(newContactinfo));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContact);