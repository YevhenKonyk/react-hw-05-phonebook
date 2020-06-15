import React, { Component } from 'react';

export default class ContactEditor extends Component {
  state = {};

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter contact name"
            autoComplete="off"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            autoComplete="off"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
