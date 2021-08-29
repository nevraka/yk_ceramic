import React, { useState, useEffect } from 'react';
import { ContentfulClientApi } from 'contentful';
import withClient from '../utils/withClient';
import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '../components/Header';
import styles from './GiftCard.module.css';
import get from 'lodash/get';
import Loader from '../components/Loading';

interface GiftCardProps {
  client: ContentfulClientApi;
  imageUrl: string;
  dates: string;
  price: number;
}

const GiftCard = ({ client }: GiftCardProps) => {
  const [giftCard, setGiftCard] = useState<any>({});

  useEffect(() => {
    const getContentGift = async () => {
      const res = await client.getEntries({ content_type: 'giftCard' });
      console.log(res);
      if (res.items && res.items.length > 0) {
        setGiftCard(res.items[0]);
      }
    };
    getContentGift();
  }, []);

  if (!giftCard) {
    return <Loader />;
  }

  let imageUrl = get(giftCard, 'fields.media.fields.file.url');

  return (
    <div>
      <Head>
        <title>Yakaart Ceramic - Gift Card</title>
      </Head>
      <Header />
      <div className={styles.imagefirst}>
        {imageUrl && <img src={`https:${imageUrl}`} />}
      </div>
      <div className={styles.text}>
        {documentToReactComponents(get(giftCard, 'fields.text'))}
      </div>
      <div className={styles.price}>
        Price: {get(giftCard, 'fields.price') + 'Eur'}
      </div>
    </div>
  );
};

export default withClient(GiftCard);
