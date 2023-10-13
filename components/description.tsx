import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className: string;
}

const Description: React.FC<Props> = ({ children, className }): JSX.Element => {
  return <p className={className}>- {children}</p>;
};

export default Description;
