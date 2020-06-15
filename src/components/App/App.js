import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import ContactEditor from '../ContactEditor/ContactEditor';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';

function App() {
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

export default App;
