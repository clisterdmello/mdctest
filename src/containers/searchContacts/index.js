import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { initiateSearch } from '../../actions/index';

class SearchContacts extends Component {
    constructor() {
        super();
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(e) {
        this.props.search(e.target.value);
    }

    render() {
        return (<Fragment>
            <input type="search"
                name="searchContact"
                value={this.props.searchTerm}
                onChange={this.updateSearch} />
        </Fragment >)
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    search: (searchTerm) => {
        dispatch(initiateSearch(searchTerm));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContacts);