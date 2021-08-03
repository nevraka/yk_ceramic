import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ProductDetail from '../../components/ProductDetail';
import { ContentfulClientApi } from 'contentful';
import { useRouter } from 'next/router';
import withClient from '../../utils/withClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ProductDetailsProps {
  client: ContentfulClientApi;
}

const ProductDetails = ({ client }: ProductDetailsProps) => {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const getEntry = async () => {
      if (!productId) {
        return;
      }
      const res = await client.getEntry(productId as string);
      setProduct(res);
    };
    getEntry();
  }, [productId]);

  if (!product) {
    return null;
  }

  const imageUrl =
    product.fields.image.length && product.fields.image[0].fields
      ? `https:${product.fields.image[0].fields.file.url}`
      : '';

  return (
    <div>
      <Head>
        <title>Yakaart Ceramic - Product</title>
      </Head>
      <ProductDetail
        key={product.sys.id}
        imageUrl={imageUrl}
        description={() =>
          documentToReactComponents(product.fields.description)
        }
        title={product.fields.title}
        price={product.fields.price}
        productId={product.sys.id}
      />
    </div>
  );
};

export default withClient(ProductDetails);
