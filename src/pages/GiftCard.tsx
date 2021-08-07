import React, { useState, useEffect } from 'react';
import { ContentfulClientApi } from 'contentful';
import withClient from '../utils/withClient';
import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface GiftCardProps {
  client: ContentfulClientApi;
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

  const desc =
    giftCard &&
    giftCard.fields &&
    documentToReactComponents(giftCard.fields.text);

  return (
    <div>
      <Head>
        <title>Yakaart Ceramic - Gift Card</title>
      </Head>
      <div>{desc}</div>
    </div>
  );
};

export default withClient(GiftCard);
