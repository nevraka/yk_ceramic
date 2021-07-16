import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
  });

  const res = await client.getEntries({ content_type: 'shop' });
  console.log(res);

  return {
    props: {
      shops: res.items,
    },
  };
}

interface ShopsProps {
  shops: [];
}

const Shop = ({ shops }: ShopsProps) => {
  console.log(shops);
  return <div>XXX</div>;
};

export default Shop;
