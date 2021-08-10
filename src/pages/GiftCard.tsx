import React, { useState, useEffect } from 'react';
import { ContentfulClientApi } from 'contentful';
import withClient from '../utils/withClient';
import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '../components/Header';
import get from 'lodash/get';

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

  return (
    <div>
      <Head>
        <title>Yakaart Ceramic - Gift Card</title>
      </Head>
      <Header />
      <div>{documentToReactComponents(get(giftCard, 'fields.text'))}</div>
      <div>{get(giftCard, 'fields.price')}</div>
    </div>
  );
};

export default withClient(GiftCard);
