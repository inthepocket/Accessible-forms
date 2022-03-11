import type { ReactHTML, ReactNode } from 'react';
import { createElement } from 'react';
import type { LinksFunction } from 'remix';

import styles from '~/styles/components/atoms/Card/styles.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

type Props = {
  type?: keyof ReactHTML;
  children: ReactNode;
};

const Card = ({ type = 'div', children }: Props) => {
  return createElement(type, { className: 'card' }, children);
};

export default Card;
