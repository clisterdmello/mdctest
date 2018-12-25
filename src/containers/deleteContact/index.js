import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/index';

class DeleteContact extends Component {
    constructor() {
        super();
        this.deleteContact = this.deleteContact.bind(this);
    }
    deleteContact() {
        const { deleteElemIndex } = this.props;
        this.props.deleteContact(deleteElemIndex);
    }
    render() {
        return <div onClick={this.deleteContact} className="btn">Delete</div>
    }
}

const mapDispatchToProps = dispatch => ({
    deleteContact: (deleteElemIndex) => {
        dispatch(deleteContact(deleteElemIndex));
    }
});

export default connect(null, mapDispatchToProps)(DeleteContact);