import { forwardRef } from 'react';
import type { LinksFunction } from 'remix';

import styles from '~/styles/components/atoms/Toast/styles.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

type Props = Record<string, unknown>;

const Toast = forwardRef<HTMLDivElement, Props>((_, ref) => (
  <div className="toast" ref={ref} role="alert" aria-live="polite" />
));

Toast.displayName = 'Toast';

export default Toast;
