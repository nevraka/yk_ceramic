//idyi routerdan cekecek
//productliste proptan gececek

import React from 'react';
import ProductList from '../../components/ProductList';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const Category = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <div>
      <Head>
        <title>Yakaart Ceramic - Categories</title>
      </Head>
      <Header />
      <ProductList categoryId={categoryId} />
    </div>
  );
};

export default Category;
