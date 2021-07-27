import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import profilePic from '../../public/profilePic.png';
import Link from 'next/link';
import withClient from '../utils/withClient';
import { ContentfulClientApi } from 'contentful';

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
        <Image
          width={100}
          height={100}
          className={styles.logo}
          src={profilePic}
          alt="Picture of the brand"
        />
      </Link>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link href={`/category/${category.sys.id}`}>
            <a className={styles.category}>{category.fields.title}</a>
          </Link>
        ))}
      </div>
      <div className={styles.aboutme}>
        <Link href="/AboutMe">About me</Link>
      </div>
    </div>
  );
};

export default withClient(Header);
