import React from 'react';
import styles from './Product.module.css';

interface ProductProps {
  imageUrl: string;
  description: Function;
  title: string;
  price: number;
}

const Product = ({ imageUrl, description, title, price }: ProductProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {imageUrl && <img src={imageUrl} className={styles.image} />}
        <div className={styles.compact}>
          <h2 className={styles.heading}>{title}</h2>
          <span>{` € ${price}.00 Eur`}</span>
        </div>
      </div>
      <div className={styles.description}>{description()}</div>
    </div>
  );
};

export default Product;
