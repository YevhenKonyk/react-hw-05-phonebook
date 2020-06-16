import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactEditor.module.css';

export default class ContactEditor extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    phoneNumber: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      name: '',
      phoneNumber: '',
    });

  render() {
    const { name, phoneNumber } = this.state;

    return (
      <>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter contact name *"
              autoComplete="off"
              required
              className={styles.input}
              onChange={this.handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890 *"
              autoComplete="off"
              required
              className={styles.input}
              onChange={this.handleChange}
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
