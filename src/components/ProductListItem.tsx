import React from 'react';
import styles from './ProductListItem.module.css';
import Link from 'next/link';
import Button from '../components/Button';
import Product from './ProductDetail';

interface ProductListItemProps {
  imageUrl: string;
  description: Function;
  title: string;
  price: number;
  productId: string;
}

const ProductListItem = ({
  productId,
  imageUrl,
  description,
  title,
  price,
}: ProductListItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {imageUrl && <img src={imageUrl} className={styles.image} />}
        <div className={styles.compact}>
          <h2 className={styles.heading}>{title}</h2>
          <Link href={`/Product/${productId}`}>
            <Button>More details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
