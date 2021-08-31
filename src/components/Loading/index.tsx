import Image from 'next/image';
import Spinner from './spinner.gif';
import React from 'react';

const Loader = () => {
  return (
    <div className="text-center self-center">
      <Image
        className="margin-auto w-16 h-16"
        src={Spinner}
        height={64}
        width={64}
      />
    </div>
  );
};

export default Loader;
