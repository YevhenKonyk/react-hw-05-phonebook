import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import ContactEditor from '../ContactEditor/ContactEditor';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';

import * as contactsOperations from '../../redux/contacts/contactsOperations';

class App extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { fetchContacts } = this.props;

    fetchContacts();
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <Section title="Phonebook">
            <ContactEditor />
            <ContactFilter />
            <ContactList />
          </Section>
        </Main>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
