import React from 'react';
import Link from 'next/link';

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
  const main =
    'no-underline cursor-pointer text-black hover:underline cursor-pointer hover:text-gray-500';
  const classes = [main, className].join(' ');

  return (
    <Link href={href}>
      <a className={classes} type={type} {...otherProps}>
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
