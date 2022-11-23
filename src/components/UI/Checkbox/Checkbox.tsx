import React from 'react';

import styles from './Checkbox.module.scss';

interface IProps {
  checked?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<IProps> = ({ checked, onChange }) => (
  <label htmlFor='checkbox' className={styles.label}>
    <input
      checked={checked}
      onChange={onChange}
      className={styles.input}
      type='checkbox'
      id='checkbox'
    />
    <div className={styles.display} />
  </label>
);
