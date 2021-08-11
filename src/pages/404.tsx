import React from 'react';
import Image from 'next/image';
import LinkButton from '../components/LinkButton';
import NotFound from '../../public/NotFound.jpeg';
import styles from './404.module.css';

const Page_404 = () => {
  return (
    <div>
      <Image className={styles.image} src={NotFound} layout="responsive" />
      <p className={styles.link}>
        <LinkButton href="/">Go to Main Page</LinkButton>
      </p>
    </div>
  );
};

export default Page_404;
