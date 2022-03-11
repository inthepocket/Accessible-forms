import type { LinksFunction, MetaFunction } from 'remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';

import a11y from '~/styles/a11y.css';
import reset from '~/styles/reset.css';
import shared from '~/styles/shared.css';
import typography from '~/styles/typography.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: reset },
  { rel: 'stylesheet', href: shared },
  { rel: 'stylesheet', href: typography },
  { rel: 'stylesheet', href: a11y },
];

export const meta: MetaFunction = () => {
  return { title: 'Accessible Forms' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="https://assets.website-files.com/615426c4bb392115c8da79fb/618a775ca1b8fbb8125723c8_Frame%202.png"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
