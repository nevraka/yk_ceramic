import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import logo from '../../public/logo.png';
import Link from 'next/link';
import withClient from '../utils/withClient';
import { ContentfulClientApi } from 'contentful';
import { GrInstagram, GrCart } from 'react-icons/gr';
import LinkButton from './LinkButton';
import Loader from './Loading';

interface HeaderProps {
  client: ContentfulClientApi;
  floating?: boolean;
}

const Header = ({ client, floating = false }: HeaderProps) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const res = await client.getEntries({ content_type: 'category' });
      setCategories(res.items);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const onScroll: EventListener = (e: Event) => {
      const top = (e.target as Document).documentElement.scrollTop;
      setIsScrolled(top !== 0);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [styles.header];
  if (isScrolled) {
    classes.push(styles.scrolled);
  }

  return (
    <>
      {!floating && <div className={styles.placeholder} />}
      <div className={classes.join(' ')}>
        <Link href="/">
          <a>
            <Image
              width={isScrolled ? 50 : 100}
              height={isScrolled ? 50 : 100}
              className={styles.logo}
              src={logo}
              alt="Picture of the brand"
            />
          </a>
        </Link>
        {categories && categories.length ? (
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
        ) : (
          <Loader />
        )}
        <div className={styles.right}>
          <LinkButton className={styles.category} href={'/GiftCard'}>
            Gift Card
          </LinkButton>
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
    </>
  );
};

export default withClient(Header);
