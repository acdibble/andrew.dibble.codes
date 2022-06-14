import NextImage, { ImageProps } from 'next/image';
import React, { Fragment } from 'react';
import classNames from '../utils/classNames';

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={classNames('max-w-fit px-3 text-xl font-semibold', className)}>
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 px-3 pb-3">{children}</div>
);

const Image = ({
  href,
  ...imageProps
}: Omit<ImageProps, 'children'> & { href?: string }) => {
  const image = <NextImage {...imageProps} />;
  const [wrapper, props] = (
    href ? ['a', { href, className: 'flex' }] : [Fragment, {}]
  ) as Parameters<typeof React['createElement']>;
  return React.createElement(wrapper, props, image);
};

const Card = ({ children }: { children: React.ReactNode }) => (
  <article className="flex w-full flex-col space-y-2 overflow-clip rounded-md border-[1px] bg-stone-200 pt-2 shadow-sm">
    {children}
  </article>
);

Card.Title = Title;
Card.Body = Body;
Card.Image = Image;

export default Card;
