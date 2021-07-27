import React, { Dispatch, SetStateAction } from 'react';
import { createClient } from 'contentful';
import Image from 'next/image';
import styles from './header.module.css';
import profilePic from '../../public/profilePic.png';
import Link from 'next/link';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || '',
  });
  const res = await client.getEntries({ content_type: 'category' });

  console.log(res.items);
  return {
    props: {
      categories: res.items,
    },
  };
}

interface HeaderProps {
  categories: any[];
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export const Header = ({ categories, setSelectedCategory }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <Image
        height="100px"
        width="100px"
        src={profilePic}
        alt="Picture of the brand"
      />
      <div className={styles.categories}>
        {categories.map((category) => (
          <span
            className={styles.category}
            onClick={() => setSelectedCategory(category.sys.id)}
          >
            {category.fields.title}
          </span>
        ))}
      </div>
      <div className={styles.aboutme}>
        <Link href="/Aboutme">About me</Link>
      </div>
    </div>
  );
};

export default Header;
