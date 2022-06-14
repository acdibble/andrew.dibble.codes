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
  <div className="px-3 pb-3">{children}</div>
);

const Card = ({
  children,
  image,
}: {
  children: React.ReactNode;
  image?: JSX.Element;
}) => (
  <article
    className={classNames(
      'flex w-full flex-col space-y-2 overflow-clip rounded-md border-[1px] bg-stone-200 pt-2 shadow-sm',
    )}
  >
    <div className="flex-1">{children}</div>
    {image}
  </article>
);

Card.Body = Body;
Card.Title = Title;

export default Card;
