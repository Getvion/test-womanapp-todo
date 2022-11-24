import clsx from 'clsx';
import React from 'react';

import styles from './Input.module.scss';

interface IProps {
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  size: 'long' | 'medium' | 'short' | 'full';
}

export const Input: React.FC<IProps> = ({ change, value, placeholder, size }) => (
  <input
    className={clsx(styles.input, {
      [styles.long]: size === 'long',
      [styles.medium]: size === 'medium',
      [styles.short]: size === 'short'
    })}
    placeholder={placeholder}
    onChange={change}
    value={value}
  />
);
