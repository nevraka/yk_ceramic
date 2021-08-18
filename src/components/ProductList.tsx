//categoryId gelecek
//use effect ıle cekecek
//map edıp product render edecek

import React, { useState, useEffect } from 'react';
import ProductListItem from './ProductListItem';
import withClient from '../utils/withClient';
import { ContentfulClientApi } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Loading from './Loading';
interface ProductListProps {
  client: ContentfulClientApi;
  categoryId: string;
}

const ProductList = ({ client, categoryId }: ProductListProps) => {
  const [products, setProducts] = useState<any[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await client.getEntries({
        content_type: 'product',
        'fields.category.sys.id': categoryId,
      });
      setProducts(res.items);
    };
    getData();
  }, [categoryId]);

  return (
    <div>
      {products ? (
        products.map((product) => {
          const imageUrl =
            product.fields.image.length && product.fields.image[0].fields
              ? `https:${product.fields.image[0].fields.file.url}`
              : '';
          return (
            <ProductListItem
              key={product.sys.id}
              imageUrl={imageUrl}
              description={() =>
                documentToReactComponents(product.fields.description)
              }
              title={product.fields.title}
              price={product.fields.price}
              productId={product.sys.id}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default withClient(ProductList);
