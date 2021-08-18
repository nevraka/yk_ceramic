import styles from './Loading.module.css';
import Image from 'next/image';
import Spinner from './spinner.gif';
import React from 'react';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Image src={Spinner} height={64} width={64} />
    </div>
  );
};

export default Loader;
