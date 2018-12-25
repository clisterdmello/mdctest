
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDefaultContacts } from '../../actions';

import ContactCard from '../../components/contactCard/index';

class ListContacts extends Component {
    constructor() {
        super();
        this.populateContactList = this.populateContactList.bind(this);
    }

    componentDidMount() {
        this.props.loadDefaultContacts();
    }
    populateContactList() {
        let contacts = [...this.props.contacts];
        return contacts
            .filter((contact) => contact.name.indexOf(this.props.searchTerm) > -1);
    }

    render() {
        const { isLoading, error } = this.props
        return <div>
            {
                this.populateContactList().map((contact, index) =>
                    <ContactCard contact={contact} key={index} />
                )
            }
            {
                isLoading && <div>loading....</div>
            }
            {
                (error && error.type === 'initialLoadContact')
                && <div>failed to load default contacts</div>
            }
        </div>
    }
}



const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    loadDefaultContacts: () => {
        dispatch(fetchDefaultContacts());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);