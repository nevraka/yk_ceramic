import React from 'react';
import styles from './ProductDetail.module.css';
import Link from 'next/link';

interface ProductProps {
  imageUrl: string;
  description: Function;
  title: string;
  price: number;
  productId: string;
}

const Product = ({
  productId,
  imageUrl,
  description,
  title,
  price,
}: ProductProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {imageUrl && <img src={imageUrl} className={styles.image} />}
        <div className={styles.compact}>
          <Link href={`/Product/${productId}`}>
            <h2 className={styles.heading}>{title}</h2>
          </Link>
          <span>{` € ${price}.00 Eur`}</span>
        </div>
      </div>
      <div className={styles.description}>{description()}</div>
    </div>
  );
};

export default Product;
