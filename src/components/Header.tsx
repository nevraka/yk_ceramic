import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import profilePic from '../../public/profilePic.png';
import Link from 'next/link';
import withClient from '../utils/withClient';
import { ContentfulClientApi } from 'contentful';
import { GrInstagram, GrCart } from 'react-icons/gr';
import LinkButton from './LinkButton';

interface HeaderProps {
  client: ContentfulClientApi;
}

const Header = ({ client }: HeaderProps) => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await client.getEntries({ content_type: 'category' });
      setCategories(res.items);
    };
    getCategories();
  }, []);

  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <Image
            width={100}
            height={100}
            className={styles.logo}
            src={profilePic}
            alt="Picture of the brand"
          />
        </a>
      </Link>
      <div className={styles.categories}>
        {categories.map((category) => (
          <LinkButton
            key={category.sys.id}
            className={styles.category}
            href={`/Category/${category.sys.id}`}
          >
            {category.fields.title}
          </LinkButton>
        ))}
      </div>
      <div className={styles.right}>
        <LinkButton href={'/GiftCard'}>Gift Card</LinkButton>
        <LinkButton
          className={styles.icon}
          href="https://www.instagram.com/yakaart_ceramic/?hl=en"
        >
          <GrInstagram />
        </LinkButton>
        <LinkButton
          className={styles.icon}
          href="https://www.shopier.com/ShowProductNew/storefront.php?shop=yakaart&sid=NlN4b0xtZlBhclJWWHR4ZTBfLTFfIF8g"
        >
          <GrCart />
        </LinkButton>
        <LinkButton className={styles.category} href="/AboutMe">
          About me
        </LinkButton>
      </div>
    </div>
  );
};

export default withClient(Header);
