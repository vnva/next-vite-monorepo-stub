import { ButtonHTMLAttributes, forwardRef } from 'react';

import HouseIllustrationFromAssets from '@packages/assets/images/house.svg';

import { HouseIllustration } from '../../assets';

import styles from './styles.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  staticImageSrc?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, staticImageSrc, ...rest } = props;

  return (
    <>
      <button className={styles.button} ref={ref} {...rest}>
        {children}
      </button>
      <HouseIllustration height={300} />
      <div>
        Import from assets in ui kit package
        <HouseIllustrationFromAssets height={100} />
      </div>
      <div>
        Static image in ui kit usage
        <img src={staticImageSrc} />
      </div>
    </>
  );
});
