import clsx from 'clsx';
import React from 'react';

import styles from './Input.module.scss';

interface IProps {
  change: () => void;
  value: string;
  placeholder?: string;
  size: 'long' | 'medium' | 'short';
}

export const Input: React.FC<IProps> = ({ change, value, placeholder, size }) => (
  <input
    className={clsx(styles.input, { [styles.long]: size === 'long' })}
    placeholder={placeholder}
    onChange={change}
    value={value}
  />
);
