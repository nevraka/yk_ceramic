import Head from 'next/head';
import HomeCarousel from '../components/HomeCarousel';
import ProductList from '../components/ProductList';

//useeffecttekıler productlıste
//bunun ıcınde product list olacak ama categoryıd '' olacak

const Shop = () => {
  return (
    <div>
      <Head>
        <title>Yakaart Ceramic</title>
      </Head>
      <HomeCarousel />
      <ProductList categoryId="" />
    </div>
  );
};

export default Shop;
