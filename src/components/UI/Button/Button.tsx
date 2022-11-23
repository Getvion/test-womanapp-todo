import React from 'react';

import { SVGSelector } from '../../../assets/images/SVGSelector';

import styles from './Button.module.scss';

interface IProps {
  text: string;
  click: () => void;
}

export const Button: React.FC<IProps> = ({ text, click }) => (
  <button className={styles.button} onClick={click}>
    {text}
    <span className={styles.image}>
      <SVGSelector name='add' />
    </span>
  </button>
);
