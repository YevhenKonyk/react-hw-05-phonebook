import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';

import Loader from '../Loader/LoaderContainer';
import ErrorNotification from '../ErrorNotification/ErrorNotificationContainer';

import ContactEditor from '../ContactEditor/ContactEditorContainer';
import ContactFilter from '../ContactFilter/ContactFilterContainer';
import ContactList from '../ContactList/ContactListContainer';

export default class App extends Component {
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
          <ErrorNotification />
          <Section title="Phonebook">
            <ContactEditor />
          </Section>

          <Section title="Find contact by name">
            <ContactFilter />
          </Section>

          <Section title="Available contacts">
            <ContactList />
          </Section>
          <Loader />
        </Main>
        <Footer />
      </>
    );
  }
}
