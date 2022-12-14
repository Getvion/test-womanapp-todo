import React from 'react';

import styles from './Checkbox.module.scss';

interface IProps {
  checked?: boolean;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export const Checkbox: React.FC<IProps> = ({ checked, change, label }) => (
  <label htmlFor='checkbox' className={styles.label}>
    <input
      checked={checked}
      onChange={change}
      className={styles.input}
      type='checkbox'
      id='checkbox'
    />
    <div className={styles.display} />
    <span className={styles.text}>{label}</span>
  </label>
);
