import React from 'react';
import LinkButton from './LinkButton';

const Footer = () => {
  return (
    <div className="bg-footer text-footertext border-t border-solid border-ftborder text-center flex-row w-full p-3">
      © 2021 Yaka Art Ceramic. Powered by
      {
        <LinkButton href="https://github.com/nevraka">
          {' '}
          <a> nevraka </a>
        </LinkButton>
      }
    </div>
  );
};

export default Footer;
