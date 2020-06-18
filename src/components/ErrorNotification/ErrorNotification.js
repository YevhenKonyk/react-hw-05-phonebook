import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ error }) => (
  <>
    {error && (
      <div className={styles.container}>
        <p className={styles.message}>{error.message}</p>
      </div>
    )}
  </>
);

ErrorNotification.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};

ErrorNotification.defaultProps = {
  error: {},
};

export default ErrorNotification;
