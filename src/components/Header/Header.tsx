import React from 'react';
import { Link } from 'react-router-dom';

import { SVGSelector } from '../../assets/images/SVGSelector';

import styles from './Header.module.scss';

export const Header = () => (
  <Link to='/' className={styles.container}>
    <span className={styles.logo}>
      <SVGSelector name='logo' />
    </span>
    <h1 className={styles.title}>
      to<span>do</span>
    </h1>
  </Link>
);
