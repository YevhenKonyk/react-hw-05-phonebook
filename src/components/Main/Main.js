import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';

const Main = ({ children }) => (
  <>
    <main>
      <div className={styles.container}>{children}</div>
    </main>
  </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
