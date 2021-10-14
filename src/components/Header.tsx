import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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

  const header =
    'fixed z-1 top-0 left-0 right-0 p-0 flex flex-row justify-between text-base bg-transparent p-3 duration-500 transition-backgroundColor transition-padding ';

  const scrolled =
    'bg-scrolled p-1duration-500 transition-backgroundColor transition-padding';
  return (
    <nav>
      {!floating && <div className="h-24" />}
      <div className={header + (isScrolled ? scrolled : '')}>
        <Link href="/">
          <a>
            <Image
              width={isScrolled ? 50 : 100}
              height={isScrolled ? 50 : 100}
              className="cursor-pointer leading-none"
              src={logo}
              alt="Picture of the brand"
            />
          </a>
        </Link>
        {categories && categories.length ? (
          <div className="flex items-center ">
            {categories.map((category) => (
              <LinkButton
                key={category.sys.id}
                className="mt-0 mr-5"
                href={`/Category/${category.sys.id}`}
              >
                {category.fields.title}
              </LinkButton>
            ))}
          </div>
        ) : (
          <Loader />
        )}
        <div className="flex flex-row items-center ">
          <LinkButton className="mt-0 mr-5 text-black" href={'/GiftCard'}>
            Gift Card
          </LinkButton>
          <LinkButton
            className="text-xl mt-0 mr-3"
            href="https://www.instagram.com/yakaart_ceramic/?hl=en"
          >
            <GrInstagram />
          </LinkButton>
          <LinkButton
            className="text-xl mt-0 mr-3"
            href="https://www.shopier.com/ShowProductNew/storefront.php?shop=yakaart&sid=NlN4b0xtZlBhclJWWHR4ZTBfLTFfIF8g"
          >
            <GrCart />
          </LinkButton>
          <LinkButton className="mt-0 mr-5 text-black" href="/AboutMe">
            About me
          </LinkButton>
        </div>
      </div>
    </nav>
  );
};

export default withClient(Header);
