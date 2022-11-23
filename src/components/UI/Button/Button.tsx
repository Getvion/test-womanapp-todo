import React from 'react';

import { SVGSelector } from '../../../assets/images/SVGSelector';

import styles from './Button.module.scss';

interface IProps {
  text: string;
  click: () => void;
  type?: 'submit' | 'button' | 'reset';
}

export const Button: React.FC<IProps> = ({ text, click, type = 'button' }) => (
  <button className={styles.button} onClick={click} type={type}>
    {text}
    <span className={styles.image}>
      <SVGSelector name='add' />
    </span>
  </button>
);
