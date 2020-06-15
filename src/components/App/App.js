import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section title="Phonebook">
          <p>content here...</p>
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default App;
