import clsx from 'clsx';
import React from 'react';

import { SVGSelector } from '../../../assets/images/SVGSelector';

import styles from './Button.module.scss';

interface IProps {
  text: string;
  click: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button' | 'reset';
  icon?: boolean;
  size?: 'big' | 'medium' | 'small';
}

export const Button: React.FC<IProps> = ({
  text,
  click,
  type = 'button',
  icon = true,
  size = 'big'
}) => (
  <button
    className={clsx(styles.button, {
      [styles.big]: size === 'big',
      [styles.medium]: size === 'medium',
      [styles.small]: size === 'small'
    })}
    onClick={click}
    type={type}
  >
    {text}
    {icon && (
      <span className={styles.image}>
        <SVGSelector name='add' />
      </span>
    )}
  </button>
);
