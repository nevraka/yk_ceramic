import React from 'react';
import styles from './ProductListItem.module.css';
import LinkButton from './LinkButton';

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
  title,
}: ProductListItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {imageUrl && <img src={imageUrl} className={styles.image} />}
        <div className={styles.compact}>
          <h2 className={styles.heading}>{title}</h2>
          <LinkButton
            className={styles.linkButton}
            href={`/Product/${productId}`}
          >
            More details
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
