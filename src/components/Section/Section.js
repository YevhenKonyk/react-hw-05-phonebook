import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <section className={styles.section}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </section>
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Section.defaultProps = {
  title: '',
};

export default Section;
