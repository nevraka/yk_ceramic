import { createClient } from 'contentful';
import React from 'react';

const withClient = (WrappedComponent: React.FC<any>) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || '',
  });

  const EnhancedComponent = (props: any) => {
    return <WrappedComponent client={client} {...props} />;
  };

  return EnhancedComponent;
};

export default withClient;
