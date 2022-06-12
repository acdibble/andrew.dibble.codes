import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  path: string;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

function NavLink({ path, as = 'div', children }: NavLinkProps) {
  return React.createElement(
    as,
    {
      className:
        'flex h-full w-24 transition hover:bg-stone-700 active:bg-stone-600',
    },
    <Link href={path}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="flex h-full w-full items-center justify-center">
        <span>{children}</span>
      </a>
    </Link>,
  );
}

export default function Nav(): JSX.Element {
  return (
    <nav className="flex h-12 w-full justify-center bg-stone-800 text-stone-200">
      <div className="flex h-full max-w-3xl flex-1 justify-between">
        <div className="flex h-full items-center">
          <NavLink path="/">Welcome!</NavLink>
        </div>
        <ul className="flex space-x-2">
          <NavLink as="li" path="/">
            About
          </NavLink>
          <NavLink as="li" path="/tils">
            TIL
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
