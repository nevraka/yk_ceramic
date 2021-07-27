import Head from 'next/head';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

//useeffecttekıler productlıste
//bunun ıcınde product list olacak ama categoryıd '' olacak

const Shop = () => {
  return (
    <div>
      <Head>
        <title>Yakaart Ceramic</title>
      </Head>
      <Header />
      <ProductList categoryId="" />
    </div>
  );
};

export default Shop;
