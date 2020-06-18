/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const Loader = ({ loading }) => (
  <>
    {loading && (
      <div className={styles.container}>
        <h2 className={styles.title}>Loading...</h2>
      </div>
    )}
  </>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
