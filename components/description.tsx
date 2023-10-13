import { PropsWithChildren } from 'react';

const Description: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <p className='mt-2 leading-relaxed text-gray-700 '>✔ {children}</p>;
};

export default Description;
