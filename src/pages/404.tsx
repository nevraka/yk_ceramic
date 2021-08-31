import React from 'react';
import Image from 'next/image';
import LinkButton from '../components/LinkButton';
import NotFound from '../../public/NotFound.jpeg';

const Page_404 = () => {
  return (
    <div>
      <Image src={NotFound} layout="responsive" />
      <p className="text-center font-bold text-404color ">
        <LinkButton href="/">Go to Main Page</LinkButton>
      </p>
    </div>
  );
};

export default Page_404;
