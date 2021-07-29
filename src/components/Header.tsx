import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import profilePic from '../../public/profilePic.png';
import Link from 'next/link';
import withClient from '../utils/withClient';
import { ContentfulClientApi } from 'contentful';
import { GrInstagram, GrCart } from 'react-icons/gr';

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
          <Link
            passHref
            key={category.sys.id}
            href={`/Category/${category.sys.id}`}
          >
            <a className={styles.category}>{category.fields.title}</a>
          </Link>
        ))}
      </div>
      <div className={styles.right}>
        <span className={styles.inst}>
          <Link href="https://www.instagram.com/yakaart_ceramic/?hl=en">
            <a>
              <GrInstagram />
            </a>
          </Link>
        </span>
        <span className={styles.cart}>
          <Link href="https://www.shopier.com/ShowProductNew/storefront.php?shop=yakaart&sid=NlN4b0xtZlBhclJWWHR4ZTBfLTFfIF8g">
            <a>
              <GrCart />
            </a>
          </Link>
        </span>
        <span className={styles.aboutme}>
          <Link passHref href="/AboutMe">
            <a>About me</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default withClient(Header);
