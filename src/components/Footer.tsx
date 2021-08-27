import React from 'react';
import styles from './Footer.module.css';
import LinkButton from './LinkButton';

const Footer = () => {
  return (
    <div className={styles.footer}>
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
