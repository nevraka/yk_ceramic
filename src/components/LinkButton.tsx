import React from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.css';

interface LinkButtonProps {
  href: string;
  type?: 'submit' | 'button';
  className?: string;
}

const LinkButton = ({
  href,
  type,
  children,
  className,
  ...otherProps
}: React.PropsWithChildren<
  LinkButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>) => {
  const classes = [styles.linkButton, className].join(' ');

  return (
    <Link href={href}>
      <a className={classes} type={type} {...otherProps}>
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
