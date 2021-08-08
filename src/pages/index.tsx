import Head from 'next/head';
import HomeCarousel from '../components/HomeCarousel';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

//useeffecttekıler productlıste
//bunun ıcınde product list olacak ama categoryıd '' olacak

const Shop = () => {
  return (
    <div>
      <Head>
        <title>Yakaart Ceramic</title>
      </Head>
      <Header floating={true} />
      <HomeCarousel />
      <ProductList categoryId="" />
    </div>
  );
};

export default Shop;
