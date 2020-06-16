import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
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
