import { ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './styles.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <button className={styles.button} ref={ref} {...rest}>
      {children}
    </button>
  );
});
