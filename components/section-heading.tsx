import React, { PropsWithChildren } from 'react';

const SectionHeading: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2 className='mb-8 text-3xl font-medium text-center capitalize'>{children}</h2>;
};

export default SectionHeading