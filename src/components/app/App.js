import React, { Fragment } from 'react';
import SearchContacts from '../../containers/searchContacts';
import AddNewContact from '../../containers/addNewContact';
import ListContacts from '../../containers/listContacts';
import './App.css';

const App = () => <Fragment>
  <header className="App-header">My Contacts</header>
  <div className="utility prl10">
    <SearchContacts />
    <AddNewContact />
    <ListContacts />
  </div>
</Fragment>

export default App;
