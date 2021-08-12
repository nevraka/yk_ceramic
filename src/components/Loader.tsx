import styles from './Loader.module.css';
import loader from '../../public/loader.jpeg';
import Image from 'next/image';

import React from 'react';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Image src={loader} height={100} width={100} />
      <div>Loading...</div>
    </div>
  );
};

export default Loader;
