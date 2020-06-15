import React, { Component } from 'react';
import styles from './ContactEditor.module.css';

export default class ContactEditor extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={styles.container}>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Enter contact name"
              autoComplete="off"
              required
              className={styles.input}
            />
            <input
              type="tel"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              autoComplete="off"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}
