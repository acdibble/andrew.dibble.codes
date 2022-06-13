import { marked } from 'marked';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Card from '../../components/Card';
import { formatPath, getTils } from '../../utils/tils';

type TilsProps = {
  tils: Record<string, string[]>;
};

export default function Tils({ tils }: TilsProps): JSX.Element {
  return (
    <div className="m-4 flex flex-col items-center space-y-4">
      <h1 className="text-3xl">What I&apos;ve learned:</h1>
      <p className="text-sm">
        A collection of concise write-ups on small things I learn day to day
        across a variety of languages and technologies.
      </p>
      <div className="flex w-full flex-col space-y-4 md:px-6">
        {Object.keys(tils).map((category) => (
          <Card key={category}>
            <Card.Title>{category}</Card.Title>
            <Card.Body>
              <ul>
                {tils[category].map((name) => (
                  <li key={name} className="prose flex">
                    <Link href={formatPath(category, name)}>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        className="hover:text-stone-600 hover:underline prose-p:m-0"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: marked.parse(name) }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<TilsProps> = async () => ({
  props: { tils: await getTils() },
});
