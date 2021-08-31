import React from 'react';
import Link from 'next/link';

interface ProductProps {
  imageUrl: string;
  description: Function;
  title: string;
  price: number;
  productId: string;
}

const Product = ({
  productId,
  imageUrl,
  description,
  title,
  price,
}: ProductProps) => {
  return (
    <div className="m-5 bg-white rounded-xl shadow-productdetail ">
      <div className="flex flex-row ">
        {imageUrl && (
          <img src={imageUrl} className="h-1/5 w-2/5 rounded-2xl m-2" />
        )}
        <div className="flex px-7 text-compactcolor flex-col pb-3 rounded text-sm font-bold pl-8">
          <Link href={`/Product/${productId}`}>
            <h2 className="mt-3 mr-0 cursor-pointer">{title}</h2>
          </Link>
          <span>{` € ${price}.00 Eur`}</span>
        </div>
      </div>
      <div className="p-3 text-left">{description()}</div>
    </div>
  );
};

export default Product;
