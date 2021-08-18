import Head from 'next/head';
import HomeCarousel from '../components/HomeCarousel';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

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
