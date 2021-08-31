import React from 'react';
import LinkButton from './LinkButton';

interface ProductListItemProps {
  imageUrl: string;
  description: Function;
  title: string;
  price: number;
  productId: string;
}

const ProductListItem = ({
  productId,
  imageUrl,
  title,
}: ProductListItemProps) => {
  return (
    <div className="m-5 bg-white rounded-3 shadow-productdetail">
      <div className="flex flex-row">
        <div className="h-1/5 w-6/12">
          {imageUrl && (
            <img src={imageUrl} className="h-1/5 w-6/12 p-3 rounded-2xl" />
          )}
        </div>
        <div className="flex text-compactcolor flex-col py-6 rounded text-base font-semibold px-8">
          <h2 className="mt-10 mr-0 cursor-pointer">{title}</h2>
          <LinkButton className="text-sm" href={`/Product/${productId}`}>
            More details
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
