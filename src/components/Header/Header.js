import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Header.module.css';
import logo from '../../img/phonebook.png';
import popTransition from '../transitions/pop.module.css';

export default class Header extends Component {
  state = { animateLogo: false };

  componentDidMount() {
    this.setState({
      animateLogo: true,
    });
  }

  render() {
    const { animateLogo } = this.state;
    return (
      <>
        <header className={styles.header}>
          <div className={styles.container}>
            <nav className={styles.navigation}>
              <CSSTransition
                in={animateLogo}
                timeout={500}
                unmountOnExit
                classNames={popTransition}
              >
                <a href="\" className={styles.logo}>
                  <img src={logo} alt="Phonebook logo" />
                </a>
              </CSSTransition>
              <ul className={styles.list}>
                <li>Home</li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
